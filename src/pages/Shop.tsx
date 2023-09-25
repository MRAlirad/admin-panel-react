import Banner from '../components/shop/Banner';
import TodayThrends from '../components/shop/TodayThrends';

const Shop = () => {
	return (
		<div className="grid grid-cols-[2fr_1fr]">
			<Banner />
			<div></div>
			<TodayThrends />
		</div>
	);
};

export default Shop;
