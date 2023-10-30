// import Table from "../Table"

import Button from '../Button';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import ProgressBar from '../ProgressBar';

interface Header {
	name: string;
	label: string;
	sortable?: boolean;
}

interface Development {
	id: number;
	title: string;
	platforms: string[];
	date: string;
	progress: number;
}

const DevelopmentTable = () => {
	const headers: Header[] = [
		{
			name: 'title',
			label: 'عنوان',
		},
		{
			name: 'platforms',
			label: 'پلتفرم',
		},
		{
			name: 'date',
			label: 'تاریخ',
		},
		{
			name: 'progress',
			label: 'پیشرفت',
		},
	];

	const rows: Development[] = [
		{
			id: Math.random(),
			title: 'لورم ایپسوم',
			platforms: ['desktop_windows', 'android', 'polymer'],
			date: '24.فرو.1402',
			progress: 60,
		},
		{
			id: Math.random(),
			title: 'لورم ایپسوم',
			platforms: ['desktop_windows', 'android', 'polymer'],
			date: '24.فرو.1402',
			progress: 40,
		},
		{
			id: Math.random(),
			title: 'لورم ایپسوم',
			platforms: ['desktop_windows', 'android', 'polymer'],
			date: '24.فرو.1402',
			progress: 80,
		},
	];

	return (
		<div className="table-container card w-full p-5">
			<div className="title-box flex items-center justify-between mb-5">
				<h2 className="title">جدول توسعه</h2>
				<Button
					type="icon"
					text="more_horiz"
					className="bg-ghostWhite"
				/>
			</div>
			<table className="w-full">
				<thead>
					<tr className="header">
						{headers.map((header) => (
							<td
								key={header.name}
								className=" border-b border-solid border-[#E9EDF7] pb-3"
							>
								<div
									className={`flex items-center justify-center gap-1 text-sm text-powderBlue ${
										header.sortable ? 'cursor-pointer' : 'cursor-default'
									}`}
								>
									<span>{header.label}</span>
									{header.sortable ? (
										<i className="material-icons material-icons-round"> keyboard_arrow_down</i>
									) : null}
								</div>
							</td>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr
							key={row.id}
							className="text-center h-11"
						>
							<td>
								<div className="flex items-center justify-center">
									<Checkbox />
									<span className="text-sm font-bold text-delftBlue">{row.title}</span>
								</div>
							</td>
							<td>
								<div className="platforms flex itmems-center justify-center gap-1">
									{row.platforms.map((platform) => (
										<Icon key={platform} icon={platform} />
										// <span className="icon-box text-[#E0E5F2] text-lg">
										// 	<i className="material-icons material-icons-round">{platform}</i>
										// </span>
									))}
								</div>
							</td>
							<td>
								<span className="text-sm font-bold text-delftBlue">{row.date}</span>
							</td>
							<td>
								<ProgressBar percent={row.progress} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DevelopmentTable;
