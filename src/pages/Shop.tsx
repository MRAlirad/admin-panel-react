import { useEffect, useState } from 'react';
import Banner from '../components/shop/Banner';
import ProductContainer from '../components/shop/ProductContainer';
import Product from '../entities/Product';
import axios from 'axios';

const Shop = () => {
	const [thrends, setThrends] = useState<Product[]>([]);
	const [recentViews, setRecentViews] = useState<Product[]>([]);

	useEffect(()=> {
		axios.get<Product[]>('http://localhost:3500/thrends')
			.then((response)=> setThrends(response.data))
		;
	}, []);

	useEffect(()=> {
		axios.get<Product[]>('http://localhost:3500/views')
			.then((response)=> setRecentViews(response.data))
		;
	}, []);

	return (
		<div className="grid grid-cols-[2fr_1fr] gap-y-10">
			<Banner />
			<div></div>
			<div className="product-containers grid gap-y-8">
				<ProductContainer
					title="ترندهای روز"
					products={thrends}
				/>
				<ProductContainer
					title="بازدیدهای اخیر"
					products={recentViews}
				/>

			</div>
		</div>
	);
};

export default Shop;
