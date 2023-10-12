import Button from '../Button';
import ProgressBar from '../ProgressBar';

const Space = () => {
	return (
		<div className="space-section card relative flex flex-col items-center p-4 pb-6">
			<Button
				type="icon"
				text="more_horiz"
				className="bg-ghostWhite mr-auto"
			/>
			<span className="icon-box flex items-center justify-center h-20 w-20 text-4xl text-delftBlue bg-ghostWhite rounded-full">
				<i className="material-icons material-icons-outlined">cloud_done</i>
			</span>
			<h3 className="text-delftBlue text-xl font-bold mt-3 mb-1">فضای شما</h3>
			<p className="text-powderBlue text-sm text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
			<div className="progress-box mt-auto w-full">
				<ProgressBar />
			</div>
		</div>
	);
};

export default Space;
