// import { ReactNode } from 'react';
// import Button from './Button';

// interface Header {
// 	name: string;
// 	label: string;
// 	sortable?: boolean;
// 	component?: ReactNode;
// }

// interface Record {
// 	// name: string;
// 	// date: string;
// 	// progress: number;
// 	// status: number;
// 	value : string | number;
// 	component?: ReactNode;
// }

// interface Props {
// 	title: string;
// 	headers: Header[];
// 	rows: Record[];
// }

// const Table = ({ title, headers, rows }: Props) => {
// 	return (
// 		<div className="table-container card w-full">
// 			<div className="title-box">
// 				<h2 className="title">{title}</h2>
// 				<Button
// 					type="icon"
// 					text="more_horiz"
// 					className="bg-"
// 				/>
// 			</div>
// 			<table className="w-full">
// 				<thead>
// 					<tr className="header">
// 						{headers.map((header) => (
// 							<td key={header.name}>
// 								<div
// 									className={`flex items-center justify-center gap-1 text-sm text-powderBlue ${
// 										header.sortable ? 'cursor-pointer' : 'cursor-default'
// 									}`}
// 								>
// 									<span>{header.label}</span>
// 									{header.sortable ? (
// 										<i className="material-icons material-icons-round"> keyboard_arrow_down</i>
// 									) : null}
// 								</div>
// 							</td>
// 						))}
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{
// 						rows.map(rec => (
// 							<tr key={Math.random()}>
// 								{rec.value}
// 							</tr>
// 						))
// 					}
// 					{/* {rows.map((row) => (
// 						<tr key={Math.random()}>
// 							{Object.entries(row).map(([key, value], index) =>
// 								headers[index]?.component ? (
// 									headers[index].component
// 								) : (
// 									<td>
// 										{value}
// 										{key}
// 									</td>
// 								)
// 							)}
// 						</tr>
// 					))} */}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// export default Table;
const Table = () => {
  return (
	<div>Table</div>
  )
}

export default Table;