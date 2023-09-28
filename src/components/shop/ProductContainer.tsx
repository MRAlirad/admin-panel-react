import productCategory from '../../entities/ProductCategory';
import Product from '../../entities/Product';
import { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import axios, { CanceledError } from 'axios';

interface Props {
	title: string;
	area : string;
}

const ProductContainer = ({ title, area }: Props) => {
	const [selectedGroup, setSelectedGroup] = useState('');
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState('');

	useEffect(()=> {
		const controller = new AbortController();
		axios
			.get<Product[]>(
				`http://localhost:3500/${area}${selectedGroup ? `?group=${selectedGroup}` : ''}`,
				{signal: controller.signal}
			)
			.then((response)=> setProducts(response.data))
			.catch(err => {
				if(err instanceof CanceledError) return;
				setError(err.message)
			})
		;
		return ()=> controller.abort()
	},[area, selectedGroup]);

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
			<div className="product-container grid grid-cols-3 gap-[15px_1%]">
				{error && <p className="text-red">{error}</p> }
				{products.map(product => (
					<ProductItem
						product={product}
						key={product.id}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductContainer;
