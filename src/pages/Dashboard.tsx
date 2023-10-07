import Header from '../components/dashboard/Header';
import Income from '../components/dashboard/Income';
import Expence from '../components/dashboard/Expence';

const Dashboard = () => {
	return (
		<div className="dashboad-page grid grid-cols-12 gap-2.5">
			<Header />
			<Income />
			<Expence />
		</div>
	);
};

export default Dashboard;
