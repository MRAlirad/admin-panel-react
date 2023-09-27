import ProductCategory from '../../entities/ProductCategory';
import Product from '../../entities/Product';
import { useState } from 'react';
import ProductItem from './ProductItem';

interface Props {
	title: string;
	products: Product[];
}

const ProductContainer = ({ title, products }: Props) => {
	const [selectedGroup, setSelectedGroup] = useState('');

	return (
		<div className="product-segment grid gap-3">
			<div className="title-grouping-box flex items-center justify-between">
				<h3 className="title text-xl">{title}</h3>
				<div className="grouping-box flex items-center">
					{ProductCategory.map(group => (
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
