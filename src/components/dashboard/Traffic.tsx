import BarChart from '../charts/Bar';

const Traffic = () => {
	const traffic = {
		labels: ['00', '04', '08', '12', '16', '20', '24'],
		data: [
			{
				label: 'traffic',
				data: [6, 4, 9, 5, 7, 10, 2],
				backgroundColor: '#4318FF',
				borderRadius: 100,
				barThickness: 10,
			},
		],
	};
	const data = {
		traffic: 1258,
		profitPercent: 2.5,
	};
	return (
		<div className="traffic card col-[4/7] grid grid-cols-1 grid-rows-[max-content_1fr] gap-5 py-5 px-[5%]">
			<div className="desc flex items-start justify-between px-[5%]">
				<div>
					<span className='text-xs text-powderBlue'>ترافیک روزانه</span>
					<div className='flex items-center gap-2'>
						<span className='text-delftBlue text-3xl font-bold'>{data.traffic}</span>
						<span className='text-xs text-powderBlue'>بازدید کننده</span>
					</div>
				</div>
				<span className={`flex items-center gap-0.5 ${data.profitPercent < 0 ? 'text-red' : 'text-jade'}`}>
					<i className="material-icons material-icons-round">
						{data.profitPercent < 0 ? 'arrow_drop_down' : 'arrow_drop_up'}
					</i>
					{`${data.profitPercent}%`}
				</span>
			</div>
			<BarChart
				labels={traffic.labels}
				datasets={traffic.data}
			/>
		</div>
	);
};

export default Traffic;
