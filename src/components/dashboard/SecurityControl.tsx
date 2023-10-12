import Button from '../Button';

const SecurityControl = () => {
	return (
		<div className="sucurity-control-section card col-[10/13] gap-4 flex flex-col items-center justify-between py-6 px-3">
			<span className="flex text-delftBlue text-7xl">
				<i className="material-icons material-icons-round">fingerprint</i>
			</span>
			<h2 className="text-delftBlue text-xl">کنترل امنیت کارت، لمس کنید</h2>
			<p className=" text-powderBlue text-sm">مزایای کارت های ما را امتحان کنید.</p>
			<Button
				fluid={true}
				text="کارت ها"
				className="mt-auto"
			/>
		</div>
	);
};

export default SecurityControl;
