import Header from '../components/dashboard/Header';
import BarChart from '../components/charts/Bar';
import Button from '../components/Button';

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
	return (
		<div className="dashboad-page grid grid-cols-12 gap-2.5">
			<Header />
			<div className="card col-[1/7] grid grid-rows-[max-content_1fr] gap-5 py-6 h-60">
				<div className="title-box flex items-center justify-between px-[5%]">
					<h3 className="title text-xl text-delftBlue">درآمد هفتگی</h3>
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
		</div>
	);
};

export default Dashboard;
