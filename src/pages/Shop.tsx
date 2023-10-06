import Banner from '../components/shop/Banner';
import HistoryContainer from '../components/shop/HistoryContainer';
import ProductContainer from '../components/shop/ProductContainer';

const Shop = () => {
	return (
		<div className="grid grid-cols-[2fr_1fr] gap-x-3">
			<div className='flex flex-col gap-10'>
				<Banner />
				<div className="product-containers grid gap-y-8">
					<ProductContainer
						title="ترندهای روز"
						area="thrends"
					/>
					<ProductContainer
						title="بازدیدهای اخیر"
						area="views"
					/>
				</div>
			</div>
			<div>
				<HistoryContainer />
			</div>
		</div>
	);
};

export default Shop;
