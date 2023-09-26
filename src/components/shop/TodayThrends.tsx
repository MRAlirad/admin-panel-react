import { useState } from 'react';
import ThrendItem from './ThrendItem';

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
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'music_note',
			liked: true,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'diversity_1',
			liked: false,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'palette',
			liked: false,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'emoji_events',
			liked: true,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'music_note',
			liked: false,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'diversity_1',
			liked: false,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'palette',
			liked: true,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'emoji_events',
			liked: false,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'music_note',
			liked: false,
		},
		{
			imageSrc: '/src/assets/pics/Thrend.png',
			title: 'لورم ایپسوم متن ساختگی',
			description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
			price: Math.floor(Math.random() * 1000),
			link: 'total',
			group : 'palette',
			liked: true,
		},
	]);

	return (
		<div className="today-thrends grid gap-3">
			<div className="title-grouping-box flex items-center justify-between">
				<h3 className="title text-xl">ترندهای روز</h3>
				<div className="grouping">
					{groupingItems.map(group => (
						<button
							key={group.type}
							className={`
								text-delftBlue text-sm w-16 p-1 rounded-full
								${selectedGroup === group.type ? 'bg-white' : ''}
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
			<div className="thrends-container grid grid-cols-3 gap-[1%]">
				{thrends.map(thrend => (
					<ThrendItem
						key={thrend.price}
						title={thrend.title}
						description={thrend.description}
						imageSrc={thrend.imageSrc}
						link={thrend.link}
						liked={thrend.liked}
						price={thrend.price}
						group={thrend.group}
					/>
				))}
			</div>
		</div>
	);
};

export default TodayThrends;
