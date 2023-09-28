import productCategory from '../../entities/ProductCategory';
import Product from '../../entities/Product';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import  { CanceledError } from '../../services/api-client';
import productService from '../../services/product-service';

interface Props {
	title: string;
	area: string;
}

const ProductContainer = ({ title, area }: Props) => {
	const [selectedGroup, setSelectedGroup] = useState('');
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setError('');
		const {request, cancel} = productService.getProducts(area, selectedGroup);

		request
			.then(response => {
				setProducts(response.data);
				setIsLoading(false);
			})
			.catch(err => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setIsLoading(false);
			});
		return () => cancel();
	}, [area, selectedGroup]);

	const itemToggleFavourite = (product: Product) => {
		const updatedProduct = { ...product, favourite: !product.favourite };

		// apiClient
		// 	.patch(`/${area}/${product.id}`, updatedProduct)
		productService.productToggleFavourite(area, updatedProduct)
			.then(() => setProducts(products.map(p => (p.id === product.id ? updatedProduct : p))))
			.catch(error => {
				alert(error.message);
			});
	};

	return (
		<div className="product-segment grid gap-3">
			<div className="title-grouping-box flex items-center justify-between">
				<h3 className="title text-xl">{title}</h3>
				<div className="grouping-box flex items-center">
					{productCategory.map(group => (
						<button
							key={group.type}
							className={`
								btn simple text-delftBlue text-sm w-16 rounded-full
								${selectedGroup === group.type ? 'bg-white opacity-100' : ''}
							`}
							onClick={() => {
								setSelectedGroup(group.type);
							}}
						>
							{group.name}
						</button>
					))}
				</div>
			</div>
			{isLoading && (
				<div className="flex items-center justify-center w-full h-full">
					<span className="flex w-16 h-16 border-4 border-solid border-transparent border-t-delftBlue rounded-full animate-spin"></span>
				</div>
			)}
			{error && <p className="text-red">{error}</p>}
			<div className="product-container grid grid-cols-3 gap-[15px_1%]">
				{!error &&
					!isLoading &&
					products.map(product => (
						<ProductItem
							key={product.id}
							product={product}
							onToggleFavourite={itemToggleFavourite}
						/>
					))}
			</div>
		</div>
	);
};

export default ProductContainer;
