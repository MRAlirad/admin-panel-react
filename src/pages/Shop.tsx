import Banner from '../components/shop/Banner';
import ProductContainer from '../components/shop/ProductContainer';

const Shop = () => {
	return (
		<div className="grid grid-cols-[2fr_1fr] gap-y-10">
			<Banner />
			<div></div>
			<div className="product-containers grid gap-y-8">
				<ProductContainer
					title="ترندهای روز"
					area='thrends'
				/>
				<ProductContainer
					title="بازدیدهای اخیر"
					area='views'
				/>

			</div>
		</div>
	);
};

export default Shop;
