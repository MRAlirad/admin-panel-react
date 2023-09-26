import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	imageSrc: string;
	title: string;
	description: string;
	price: number;
	link: string;
	liked: boolean;
	group: string;
}

const ThrendItem = ({ imageSrc, title, description, price, link, liked, group }: Props) => {
	const [like, setLike] = useState(liked);

	return (
		<div className="thrend-item card p-3">
			<div className="img-box relative rounded-md">
				<img
					src={imageSrc}
					alt={title}
				/>
				<button
					className="like-btn flex items-center justify-center w-6 h-6 bg-white absolute top-2 left-2 rounded-full text-base text-red"
					onClick={() => setLike(!like)}
				>
					<i className="material-icons material-icons-round"> {like ? 'favorite' : 'favorite_border'} </i>
				</button>
				<span className="flex items-center justify-center w-5 h-5 bg-white absolute top-2 right-2 rounded-full text-sm text-delftBlue">
					<i className="material-icons material-icons-round"> {group} </i>
				</span>
			</div>
			<div className="specs-box grid gap-4 pt-4 pb-2">
				<div className="title-desc-box grid gap-1">
					<h4 className="title text-delftBlue text-base font-bold line-clamp-1">{title}</h4>
					<p className="desc text-xs text-powderBlue line-clamp-1">{description}</p>
				</div>
				<div className="price-purchace-box flex items-center justify-between">
					<div className="price text-xs text-neonBlue">قیمت: {price} تومان</div>
					<Link
						to={link}
						className="flex items-center justify-center text-sm text-white bg-delftBlue w-20 h-7 rounded-full"
					>
						خرید
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ThrendItem;
