import Header from '../components/dashboard/Header';
import Income from '../components/dashboard/Income';
import Expence from '../components/dashboard/Expence';
import SystemFile from '../components/dashboard/SystemFile';
import Traffic from '../components/dashboard/Traffic';
import MemberSection from '../components/dashboard/MemberSection';
import SecurityControl from '../components/dashboard/SecurityControl';

const Dashboard = () => {
	return (
		<div className="dashboad-page grid grid-cols-12 gap-2.5">
			<Header />
			<Income />
			<Expence />
			<SystemFile />
			<Traffic />
			<MemberSection />
			<SecurityControl />
		</div>
	);
};

export default Dashboard;
