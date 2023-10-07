import Button from '../Button';
import PieChart from '../charts/Pie';

const SystemFile = () => {
	const data = {
		labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
		datasets: [
			{
				label: 'system file',
				data: [12, 5, 4],
				backgroundColor: ['#4318FF', '#6AD2FF', '#EFF4FB'],
				borderColor: ['#4318FF', '#6AD2FF', '#EFF4FB'],
			},
		],
	};
	return (
		<div className="card col-[1/4] grid grid-cols-1 grid-rows-[max-content_1fr_max-content] gap-5 py-6 px-[5%]">
			<div className="title-box flex items-center justify-between px-[5%]">
				<h3 className="title text-xl text-delftBlue font-bold">نمودار دایره ای</h3>
				<Button
					type="icon"
					text="refresh"
					size="text-xl"
					color="blue"
					className="!bg-ghostWhite"
				/>
			</div>
			<PieChart
				datasets={data.datasets}
				labels={data.labels}
			/>
			<div className="percent-box flex items-center justify-around">
				<div className="system grid grid-cols-[max-content_max-content] justify-items-center gap-x-0.5">
					<span className="text-xs text-powderBlue">سیستم</span>
					<span className="text-paleAzure flex items-center justify-center text-[8px]">
						<i className="material-icons material-icons-round">circle</i>
					</span>
					<span className="text-delftBlue col-[1/3] text-sm font-bold">%25</span>
				</div>
				<div className="file grid grid-cols-[max-content_max-content] justify-items-center gap-x-0.5">
					<span className="text-xs text-powderBlue">فایل های شما</span>
					<span className="text-delftBlue flex items-center justify-center text-[8px]">
						<i className="material-icons material-icons-round">circle</i>
					</span>
					<span className="text-delftBlue col-[1/3] text-sm font-bold">%63</span>
				</div>
			</div>
		</div>
	);
};

export default SystemFile;
