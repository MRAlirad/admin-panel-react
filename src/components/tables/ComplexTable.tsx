// import Table from "../Table"

import Button from '../Button';
import ProgressBar from '../ProgressBar';
import Status from '../Status';

interface Header {
	name: string;
	label: string;
	sortable?: boolean;
}

interface Complex {
	id : number;
	name: string;
	status: number;
	date: string;
	progresss: number;
}

const ComplexTable = () => {
	const headers: Header[] = [
		{
			name: 'name',
			label: 'نام',
		},
		{
			name: 'status',
			label: 'وضعیت',
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
	const rows: Complex[] = [
		{
			id: Math.random(),
			name: 'لورم ایپسوم',
			status: 0,
			date: '24.فرو.1402',
			progresss: 60,
		},
		{
			id: Math.random(),
			name: 'لورم ایپسوم',
			status: 1,
			date: '24.فرو.1402',
			progresss: 40,
		},
		{
			id: Math.random(),
			name: 'لورم ایپسوم',
			status: 2,
			date: '24.فرو.1402',
			progresss: 80,
		},
	];

	return (
		<div className="table-container card w-full p-5">
			<div className="title-box flex items-center justify-between mb-5">
				<h2 className="title">جدول کمپلکس</h2>
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
							<td key={header.name} className=' border-b border-solid border-[#E9EDF7] pb-3'>
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
						<tr key={row.id} className='text-center h-11'>
							<td>
								<span className='text-sm font-bold text-delftBlue'>{row.name}</span>
							</td>
							<td>
								<Status state={row.status} />
							</td>
							<td>
								<span className='text-sm font-bold text-delftBlue'>{row.date}</span>
							</td>
							<td>
								<ProgressBar percent={row.progresss} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ComplexTable;
