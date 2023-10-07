import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Data {
	label: string;
	data: number[];
}

interface Props {
	labels: string[];
	datasets: Data[];
}

const PieChart = ({ labels, datasets }: Props) => {
	const data = { labels, datasets };
	const options = {
		maintainAspectRatio: false,
		plugins: {
			legend: {
				display: false,
			},
		},
		interaction: {
			intersect: false,
		},
	};
	return (
		<div className="w-full h-full p-1">
			<Pie
				data={data}
				options={options}
			/>
		</div>
	);
};

export default PieChart;
