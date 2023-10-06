import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Data {
	label: string;
	data: number[];
	borderColor: string;
	backgroundColor: string;
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
		responsive: true,
		plugins: {
			legend: {
				position: 'top' as const,
			},
			title: {
				display: true,
				text: 'Chart.js Line Chart',
			},
		},
	};
	return (
		<Line
			data={data}
			options={options}
		/>
	);
};

export default LineChart;
