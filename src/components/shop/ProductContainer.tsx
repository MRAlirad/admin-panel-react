import productCategory from '../../entities/ProductCategory';
import Product from '../../entities/Product';
import ProductItem from './ProductItem';
import threndsProductsService from '../../services/thrends-products-service';
import viewsProductService from '../../services/views-product-service';
import useProducts from '../../hooks/useProducts';
import Loader from '../Loader';

interface Props {
	title: string;
	area: string;
}

const ProductContainer = ({ title, area }: Props) => {
	const { products, error, isLoading, selectedGroup, setProducts, setSelectedGroup } = useProducts(area);

	const itemToggleFavourite = (product: Product) => {
		const updatedProduct = { ...product, favourite: !product.favourite };
		const request = area === 'views' ? viewsProductService : threndsProductsService;
		request
			.update<Product>(updatedProduct)
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
			{isLoading && <Loader />}
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
