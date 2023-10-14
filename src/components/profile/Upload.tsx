import Button from '../Button';

const Upload = () => {
	return (
		<div className="upload-section grid grid-cols-2 card grid-col-[3/4] p-5">
			<div className="flex flex-col gap-3 p-5 pl-7">
				<h5 className="text-delftBlue text-sm font-bold">لورم ایپسوم متن </h5>
				<p className="text-powderBlue text-sm text-justify">
					مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصن را می طلبد،
				</p>
				<Button
					text="انتشار"
					className="mt-auto mr-auto"
				/>
			</div>
			<div
				className="upload flex flex-col items-center justify-center gap-2 bg-ghostWhite h-full w-full border border-dashed border-powderBlue rounded-lg p-2 cursor-pointer"
				// onClick={}
			>
				<span className="flex text-delftBlue text-7xl">
					<i className="material-icons material-icons-round">upload</i>
				</span>
				<h4 className="title text-delftBlue text-lg font-bold">آپلود کنید</h4>
				<p className="desc text-powderBlue text-sm text-center">لورم ایپسوم متن ساختگی با تولید سادگی </p>
			</div>
		</div>
	);
};

export default Upload;
