import useFetchHistory from '../../hooks/history/useFetchHistory';
import Button from '../Button';
import Loader from '../Loader';
import HistoryItem from './HistoryItem';

const HistoryContainer = () => {
	const { data: histories, error, isLoading, refetch, isRefetching } = useFetchHistory();

	return (
		<section className="history-section card flex flex-col gap-4 h-max p-4">
			<div className="title-box flex items-center justify-between">
				<h3 className="title text-xl text-delftBlue">تاریخچه</h3>
				<Button
					type="icon"
					color="delftBlue"
					text="refresh"
					size="text-xl"
					disabled={isRefetching}
					onClick={refetch}
				/>
			</div>
			{isLoading && <Loader />}
			{error && <p className="text-red">{error.message}</p>}
			<div className="history-container">
				{
					// !error && !isLoading &&
					histories?.map(history => (
						<HistoryItem
							key={history.id}
							history={history}
						/>
					))
				}
			</div>
		</section>
	);
};

export default HistoryContainer;
