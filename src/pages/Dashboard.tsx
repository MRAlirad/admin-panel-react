import Header from '../components/dashboard/Header';
import Income from '../components/dashboard/Income';
import Expence from '../components/dashboard/Expence';
import SystemFile from '../components/dashboard/SystemFile';

const Dashboard = () => {
	return (
		<div className="dashboad-page grid grid-cols-12 gap-2.5">
			<Header />
			<Income />
			<Expence />
			<SystemFile />
		</div>
	);
};

export default Dashboard;
