import { useQuery } from '@tanstack/react-query';
// import useHistory from '../../hooks/useHistory';
import Button from '../Button';
// import Loader from '../Loader';
import History from '../../entities/History';
import HistoryItem from './HistoryItem';
import axios from 'axios';

const HistoryContainer = () => {
	// const { histories, error, isLoading, refresh } = useHistory();
	const FetchHistory = async ()=> {
		return axios
			.get<History[]>("http://localhost:3500/history")
			.then(res => res.data)
		;
	}
	const {data : histories, error} = useQuery<History[], Error>({
		queryKey: ['history'],
		queryFn : FetchHistory
	})

	return (
		<section className="history-section card flex flex-col gap-4 h-max p-4">
			<div className="title-box flex items-center justify-between">
				<h3 className="title text-xl text-delftBlue">تاریخچه</h3>
				<Button
					type="icon"
					color="delftBlue"
					text="refresh"
					size="text-xl"
					// onClick={refresh}
				/>
			</div>
			{/* {isLoading && <Loader />} */}
			{error && <p className="text-red">{error.message}</p>}
			<div className="history-container">
				{
				// !error && !isLoading && 
				histories?.map(history => <HistoryItem key={history.id} history={history} />)}
			</div>
		</section>
	);
};

export default HistoryContainer;
