const ProfileInfo = () => {
	const info = {
		img: '/src/assets/pics/Profile.png',
		bg: '/src/assets/pics/ProfileBg.png',
		name: 'آناهیتا رجبی',
		role: 'برنامه نویس',
		followers: 275,
		followings: '7K',
		posts: 17,
	};

	return (
		<div className="profile card p-2 pb-6">
			<div className="profile-bg img-box rounded-2xl h-28">
				<img
					src={info.bg}
					alt="profile-bg"
					className="object-cover"
				/>
			</div>
			<div className="specifications-segment flex flex-col items-center gap-5 -mt-8">
				<div className="img-box w-16 h-16 rounded-full border-2 border-solid border-white">
					<img
						src={info.img}
						alt="name"
					/>
				</div>
				<div className="name-box flex flex-col items-center">
					<h2 className="name text-lg font-bold text-delftBlue">{info.name}</h2>
					<span className="role text-sm text-powderBlue">{info.role}</span>
				</div>
				<div className="status-box flex items-center justify-center gap-[6%] w-full">
					<div className="followings flex flex-col items-center">
						<span className="count text-xl text-delftBlue font-bold">{info.followings}</span>
						<span className="text text-sm text-powderBlue">دنبال شونده</span>
					</div>
					<div className="followers flex flex-col items-center">
						<span className="count text-xl text-delftBlue font-bold">{info.followers}</span>
						<span className="text text-sm text-powderBlue">دنبال کننده</span>
					</div>
					<div className="posts flex flex-col items-center">
						<span className="count text-xl text-delftBlue font-bold">{info.posts}</span>
						<span className="text text-sm text-powderBlue">پست ها</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileInfo;
