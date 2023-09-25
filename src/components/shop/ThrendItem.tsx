import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	imageSrc: string;
	title: string;
	description: string;
	price: number;
	link: string;
	liked: boolean;
}

const ThrendItem = ({ imageSrc, title, description, price, link, liked}: Props) => {
	const [like, setLike] = useState(liked);

	return (
		<div className="thrend-item card p-5">
			<div className="img-box relative">
				<img
					src={imageSrc}
					alt={title}
				/>
				<button
					className="like-btn flex items-center justify-center w-7 h-7 text-base bg-white absolute top-3 left-3"
					onClick={() => setLike(!like)}
				>
					{like}
				</button>
			</div>
			<div className="specs-box">
				<h4 className="title">{title}</h4>
				<p className="desc">{description}</p>
				<div className="price-purchace-box">
					<div className="price">قیمت: {price} تومان</div>
					<Link
						to={link}
						className="flex items-center justify-center text-sm text-white bg-delftBlue w-20 h-7"
					>
						خرید
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ThrendItem;
