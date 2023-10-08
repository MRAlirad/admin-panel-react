import { ReactNode } from 'react';

interface Header {
	name: string;
	label: string;
	sortable?: boolean;
	component?: ReactNode;
}

interface Record {
	name: string;
	date: string;
	progress: number;
	status: number;
}

interface Props {
	headerLists: Header[];
	record: Record[];
}

const Table = ({ headerLists, record }: Props) => {
	return (
		<table className="w-full">
			<thead>
				<tr className="header">
					{headerLists.map(header => (
						<td key={header.name}>
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
				{record.map(rec => (
					<tr key={Math.random()}>
						{Object.entries(rec).map(([key, value], index) =>
							headerLists[index]?.component ? (
								headerLists[index].component
							) : (
								<td>
									{value}{key}
								</td>
							)
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
