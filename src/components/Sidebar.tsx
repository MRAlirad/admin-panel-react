import logo from '../assets/pics/Logo.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	const sidevarLinks = [
		{
			to: '/dashboard',
			icon: 'home',
			text: 'داشبورد',
		},
		{
			to: '/shop',
			icon: 'shopping_cart',
			text: 'فروشگاه',
		},
		{
			to: '/tables',
			icon: 'bar_chart',
			text: 'جدول ها',
		},
		{
			to: '/kanban',
			icon: 'dashboard',
			text: 'کنبان',
		},
		{
			to: '/profile',
			icon: 'person',
			text: 'پروفایل',
		},
		{
			to: '/login',
			icon: 'lock',
			text: 'ورود',
		},
	];
	return (
		<div className="sidebar grid grid-rows-[max-content_1fr] row-[1/3] bg-white w-full h-full">
			<div className="img-box h-[130px] w-full border-b border-ghostWhite">
				<img
					src={logo}
					alt="logo"
					className="w-8/12 h-max"
				/>
			</div>

			<div className="page-link-containers py-10 flex flex-col gap-5">
				{sidevarLinks.map(link => (
					<NavLink
						key={link.text}
						to={link.to}
						className={({ isActive }) =>
							isActive
								? 'side-bar-link relative flex items-center gap-4 w-full h-9 text-base font-bold text-delftBlue pr-[12%] border-l-4 border-delftBlue'
								: 'side-bar-link relative flex items-center gap-4 w-full h-9 text-base font-bold text-powderBlue pr-[12%] hover:text-[#6E80B7]'
						}
					>
						<i className="material-icons material-icons-round"> {link.icon} </i>
						{link.text}
						{/* <span className="left-line absolute left-0 top-0 w-1 h-full bg-transparent rounded-full"></span> */}
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
