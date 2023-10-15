interface Props {
	remain?: number;
	total?: number;
	percent?: number;
}

const ProgressBar = ({ remain = 0, total = 0, percent = 0 }: Props) => {
	let barWidth = '0%';
	if (percent) barWidth = `${percent}%`;
	else barWidth = `${Math.round((remain / total) * 100)}%`;
	console.log(barWidth);

	return (
		<div className="prograss w-full h-2.5 rounded-full bg-purple-200">
			<div
				className="bar h-full bg-delftBlue rounded-full"
				style={{ width: barWidth }}
			></div>
		</div>
	);
};

export default ProgressBar;
