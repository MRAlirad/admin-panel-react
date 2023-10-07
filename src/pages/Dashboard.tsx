import Header from '../components/dashboard/Header';
import BarChart from '../components/charts/Bar';
import Button from '../components/Button';
import LineChart from '../components/charts/Line';

const Dashboard = () => {
	const weeklyIncome = {
		labels: ['19', '20', '21', '22', '23', '24', '25'],
		data: [
			{
				label: '1',
				data: [5, 5, 5, 4, 5, 6, 5],
				backgroundColor: '#775FFC',
				borderRadius: 100,
				barPercentage: 0.2,
			},
			{
				label: '1',
				data: [5, 5, 5, 4, 5, 6, 5],
				backgroundColor: '#6AD2FF',
				borderRadius: 100,
				barPercentage: 0.2,
			},
			{
				label: '1',
				data: [5, 5, 5, 4, 5, 6, 5],
				backgroundColor: '#EFF4FB',
				borderRadius: 100,
				barPercentage: 0.2,
			},
		],
	};

	const profit = {
		labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
		data: [
			{
				label: 'lastMonth',
				data: [8, 7, 5, 7, 4, 6, 3],
				backgroundColor: '#6AD2FF',
				borderColor: '#6AD2FF',
				tension: 0.5,
			},
			{
				label: 'currentMonth',
				data: [13, 10, 7, 12, 9, 8, 7],
				backgroundColor: '#775FFC',
				borderColor: '#775FFC',
				tension: 0.5,
			},
		],
	};

	return (
		<div className="dashboad-page grid grid-cols-12 gap-2.5">
			<Header />
			<div className="card col-[1/7] grid grid-rows-[max-content_1fr] gap-5 py-6">
				<div className="title-box flex items-center justify-between px-[5%]">
					<h3 className="title text-xl text-delftBlue font-bold">درآمد هفتگی</h3>
					<Button
						type="icon"
						text="refresh"
						size="text-xl"
						color="blue"
						className="!bg-ghostWhite"
					/>
				</div>
				<BarChart
					type="STACKED"
					labels={weeklyIncome.labels}
					datasets={weeklyIncome.data}
				/>
			</div>
			<div className="card col-[7/13] grid grid-rows-[max-content_1fr] gap-5 py-6 px-[5%]">
				<div className="title-box flex items-start justify-between">
					<div className='flex flex-col'>
						<span className='flex items-center gap-1.5 text-xs text-powderBlue bg-ghostWhite w-max py-1 px-4 rounded-md mb-1'>
							<i className={`material-icons material-icons-round`}>calendar_today</i>
							ماه جاری
						</span>
						<h3 className="title text-xl text-delftBlue font-bold">37 میلیون تومان</h3>
						<span className='flex items-center gap-1 text-xs text-powderBlue'>
							جمع مخارج
							<span className='flex items-center gap-0.5 text-jade'>
								<i className="material-icons material-icons-round">arrow_drop_up</i>
								+2.4%
							</span>
						</span>
					</div>
					<Button
						type="icon"
						text="refresh"
						size="text-xl"
						color="blue"
						className="!bg-ghostWhite"
					/>
				</div>
				<LineChart
					labels={profit.labels}
					datasets={profit.data}
				/>
			</div>
		</div>
	);
};

export default Dashboard;
