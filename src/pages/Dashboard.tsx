import Header from '../components/dashboard/Header';
import Income from '../components/dashboard/Income';
import Expence from '../components/dashboard/Expence';
import SystemFile from '../components/dashboard/SystemFile';
import Traffic from '../components/dashboard/Traffic';
// import ExaminationTable from '../components/dashboard/ExaminationTable';

const Dashboard = () => {
	return (
		<div className="dashboad-page grid grid-cols-12 gap-2.5">
			<Header />
			<Income />
			<Expence />
			<SystemFile />
			<Traffic />
			{/* <ExaminationTable /> */}
		</div>
	);
};

export default Dashboard;
