import Button from '../Button';
import LineChart from '../charts/Line';

const Expence = () => {
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
		<div className="card col-[7/13] grid grid-rows-[max-content_1fr] gap-5 py-6 px-[5%]">
			<div className="title-box flex items-start justify-between">
				<div className="flex flex-col">
					<span className="flex items-center gap-1.5 text-xs text-powderBlue bg-ghostWhite w-max py-1 px-4 rounded-md mb-1">
						<i className={`material-icons material-icons-round`}>calendar_today</i>
						ماه جاری
					</span>
					<h3 className="title text-xl text-delftBlue font-bold">37 میلیون تومان</h3>
					<span className="flex items-center gap-1 text-xs text-powderBlue">
						جمع مخارج
						<span className="flex items-center gap-0.5 text-jade">
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
	);
};

export default Expence;
