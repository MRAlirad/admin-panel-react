import productCategory from '../../entities/ProductCategory';
import ProductItem from './ProductItem';
import Loader from '../Loader';
import useFetchProducts from '../../hooks/product/useFetchProducts';
import { useState } from 'react';
import useEditProduct from '../../hooks/product/useEditProduct';

interface Props {
	title: string;
	area: string;
}

const ProductContainer = ({ title, area }: Props) => {
	const [selectedGroup, setSelectedGroup] = useState('');
	const { data: products, isLoading, error } = useFetchProducts(area, selectedGroup);
	const itemToggleFavourite = useEditProduct({
		area: area,
		group: selectedGroup,
		onError: () => alert('مشکلی پیش آمده است. لطفا دوباره امتحان کنید!'),
	});

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
			{isLoading ? (
				<Loader />
			) : error ? (
				<p className="text-red">{error.message}</p>
			) : products?.length > 0 ? (
				<div className="product-container grid grid-cols-3 gap-[15px_1%]">
					{!error &&
						!isLoading &&
						products?.map(product => (
							<ProductItem
								key={product.id}
								product={product}
								onToggleFavourite={() => {
									itemToggleFavourite.mutate({
										...product,
										favourite: !product.favourite,
									});
								}}
							/>
						))}
				</div>
			) : (
				<p className="no-task-text text-lg text-center font-bold">محصولی وجود ندارد</p>
			)}
		</div>
	);
};

export default ProductContainer;
