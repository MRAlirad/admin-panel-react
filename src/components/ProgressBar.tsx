
// interface Props {
// 	remain?: number;
// 	total?: number;
// 	percent?: number;
// }

const ProgressBar = () => {

	return (
		<div className="prograss w-full h-2.5 rounded-full bg-purple-200">
			<div
				className={`bar h-full bg-delftBlue rounded-full w-[50%]`}
			></div>
		</div>
	);
};

export default ProgressBar;
