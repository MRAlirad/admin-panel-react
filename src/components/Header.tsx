import profileImg from '../assets/pics/Profile.png'

const Header = () => {
	const title = 'پروفایل';
	return (
		<div className="flex items-center justify-between w-full h-[110px] pr-4 pl-12">
			<div className="title-navigation-box">
				<span className="navigation text-sm text-powderBlue"> صفحات / {title}</span>
				<h1 className="page-title text-3xl text-delftBlue font-bold">{title}</h1>
			</div>
			<div className="settings-search-box grid grid-cols-[1fr_max-content_max-content] items-center gap-2 w-[420px] h-16 p-2.5 bg-white rounded-[30px]">
				<div className="search-box flex items-center gap-1 h-full py-1 px-3 rounded-[30px] bg-ghostWhite">
					<button className="btn icon text-delftBlue">
						<i className="material-icons material-icons-outlined"> search </i>
					</button>
					<input
						type="text"
						className="text-sm text-delftBlue"
					/>
				</div>
				<div className="actions-box flex items-center gap-2">
					<button className="btn icon text-powderBlue">
						<i className="material-icons material-icons-outlined"> notifications </i>
					</button>
					<button className="btn icon text-powderBlue">
						<i className="material-icons material-icons-round"> nightlight_round </i>
					</button>
					<button className="btn icon text-powderBlue">
						<i className="material-icons material-icons-outlined"> info </i>
					</button>
				</div>
				<div className="img-box w-10 h-10 rounded-full">
					<img
						src={profileImg}
						alt="profile"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
