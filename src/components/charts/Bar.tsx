import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Data {
	label: string;
	data: number[];
	backgroundColor?: string;
	borderRadius?: number;
	barPercentage?: number;
}

interface Props {
	type?: 'SIMPLE' | 'STACKED';
	labels: string[];
	datasets: Data[];
}

const BarChart = ({ type = 'SIMPLE', labels, datasets }: Props) => {
	const data = {
		labels,
		datasets,
	};
	const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				display: false,
				stacked: !!(type === 'STACKED'),
			},
			x: {
				stacked: !!(type === 'STACKED'),
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
			},
		},
	};
	return (
		<div className="w-full h-full">
			<Bar
				data={data}
				options={options}
			/>
		</div>
	);
};

export default BarChart;
