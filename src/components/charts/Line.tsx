import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
Chart.defaults.font.family = 'vazir FD';

interface Data {
	label: string;
	data: number[];
	borderColor: string;
	backgroundColor: string;
	tension: number,
}

interface Props {
	labels: string[];
	datasets: Data[];
}

const LineChart = ({ labels, datasets }: Props) => {
	const data = {
		labels,
		datasets,
	};
	const options = {
		maintainAspectRatio: false,
		radius: 0,
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				display: false,
				beginAtZero: true,
			},
			x: {
				border: {
					display: false,
				},
				grid: {
					display: false,
				},
				ticks: {
					color :'#A3AED0',
				},
			},
		},
		interaction: {
			intersect: false,
		},
	};
	return (
		<div className="w-full h-full">
			<Line
				data={data}
				options={options}
			/>
		</div>
	);
};

export default LineChart;
