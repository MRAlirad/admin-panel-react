import Button from '../Button';

const Banner = () => {
	return (
		<div className="banner bg-[url('/src/assets/pics/ShopBanner.png')] bg-cover bg-no-repeat bg-left h-56 w-full rounded-xl">
			<div className="desc w-1/2 h-full flex flex-col justify-center gap-4 pr-[5%] text-white">
				<h3 className="title text-xl">لورم ایپسوم متن ساختگی</h3>
				<p className="desc text-sm">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
				</p>
				<div className="action-box">
					<Button
						type="primary"
						color="white"
						text="ببین و بگرد"
						onClick={() => {}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
