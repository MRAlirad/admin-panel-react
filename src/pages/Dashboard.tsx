// import LineChart from '../components/charts/Line';
import Header from '../components/dashboard/Header';

const Dashboard = () => {
	// const labels = ['a', 'b', 'c', 'd', 'e', 'f']
	// const data = [
	// 	{
	// 		label: '1',
	// 		data: [1, 2, 3, 4, 5, 6],
	// 		borderColor: 'red',
	// 		backgroundColor: 'black',
	// 	},
	// 	{
	// 		label: '2',
	// 		data: [2, 2, 1, 6, 5, 9],
	// 		borderColor: 'red',
	// 		backgroundColor: 'black',
	// 	},
	// ]
	return (
		<div className="dashboad-page grid grid-cols-6">
			<Header />
			{/* <LineChart labels={labels} datasets={data}/> */}
		</div>
	);
};

export default Dashboard;
