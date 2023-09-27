import { useState } from 'react';
import ProductItem from './ProductItem';

const TodayThrends = () => {
	const groupingItems = [
		{
			type: 'music',
			name: 'موزیک',
			icon: 'music_note',
		},
		{
			type: 'family',
			name: 'خانواده',
			icon: 'diversity_1',
		},
		{
			type: 'art',
			name: 'هنر',
			icon: 'palette',
		},
		{
			type: 'sport',
			name: 'ورزش',
			icon: 'emoji_events',
		},
	];
	const [selectedGroup, setSelectedGroup] = useState('');
	const [thrends, setThrends] = useState([
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'music_note',
			liked: true,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'diversity_1',
			liked: false,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'palette',
			liked: false,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'emoji_events',
			liked: true,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'music_note',
			liked: false,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'diversity_1',
			liked: false,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'palette',
			liked: true,
		},
		{
			id: Math.random(),
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'emoji_events',
			liked: false,
		},
	]);

	return (
		<div className="today-thrends grid gap-3">
			<div className="title-grouping-box flex items-center justify-between">
				<h3 className="title text-xl">ترندهای روز</h3>
				<div className="grouping-box flex items-center">
					{groupingItems.map(group => (
						<button
							key={group.type}
							className={`
								btn simple text-delftBlue text-sm w-16 rounded-full
								${selectedGroup === group.type ? 'bg-white opacity-100' : ''}
							`}
							onClick={() => {
								setSelectedGroup(group.type);
								setThrends(thrends);
							}}
						>
							{group.name}
						</button>
					))}
				</div>
			</div>
			<div className="thrends-container grid grid-cols-3 gap-[15px_1%]">
				{thrends.map(thrend => (
					<ProductItem
						product={thrend}
						key={thrend.id}
					/>
				))}
			</div>
		</div>
	);
};

export default TodayThrends;
