import { useState } from 'react';

const TodayThrends = () => {
	const groupingItems = [
		{
			type: 'music',
			name : 'موزیک',
			icon : 'music_note',
		},
		{
			type: 'family',
			name : 'خانواده',
			icon : 'diversity_1',
		},
		{
			type: 'art',
			name : 'هنر',
			icon : 'diversity_1',
		},
		{
			type: 'sport',
			name : 'ورزش',
			icon : 'diversity_1',
		},
	];
	const [selectedGroup, setSelectedGroup] = useState('');

	return (
		<div className="today-thrends pt-5">
			<div className="title-grouping-box flex items-center justify-between">
				<h3 className="title text-xl">ترندهای روز</h3>
				<div className="grouping">
					{groupingItems.map(group => (
						<button
							key={group.type}
							className={`text-delftBlue text-sm w-16 p-1 rounded-full ${selectedGroup === group.type ? 'bg-white' : ''}`}
							onClick={() => setSelectedGroup(group.type)}
						>
							{group.name}
						</button>
					))}
				</div>
			</div>
            <div className="thrends-container grid grid-cols-3 gap-[1%]">
                
            </div>
		</div>
	);
};

export default TodayThrends;
