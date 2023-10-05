import Button from '../Button';

const Banner = () => {
	return (
		<div className="banner bg-[url('/src/assets/pics/ShopBanner.png')] bg-cover bg-no-repeat bg-left h-56 w-full rounded-xl">
			<div className="desc w-1/2 h-full flex flex-col justify-center gap-4 pr-[5%] text-white">
				<h3 className="title text-xl">لورم ایپسوم متن ساختگی</h3>
				<p className="desc text-sm">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
				</p>
				<div className="action-box flex items-center gap-5">
					<Button
						type="primary"
						color="white"
						text="ببین و بگرد"
						className="!text-delftBlue"
						onClick={() => {}}
					/>
					<Button
						type="simple"
						color='white'
						text="ویدئو رو ببین"
						onClick={() => {}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
