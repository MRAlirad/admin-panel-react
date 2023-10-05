import Banner from '../components/shop/Banner';
import HistoryContainer from '../components/shop/HistoryContainer';
import ProductContainer from '../components/shop/ProductContainer';

const Shop = () => {
	return (
		<div className="grid grid-cols-[2fr_1fr] grid-rows-[max-content_max-content] gap-x-3 gap-y-10 cursor-pointer hover: ">
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
			<HistoryContainer />
		</div>
	);
};

export default Shop;
