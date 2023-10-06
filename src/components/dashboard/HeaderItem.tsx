interface Props {
	icon: string;
	title: string;
	value: string;
}

const HeaderItem = ({ icon, title, value }: Props) => {
	return (
		<div className="item card flex items-center gap-2.5 px-2.5 py-4">
			<span className="flex items-center justify-center text-blue bg-ghostWhite text-3xl w-10 h-10 rounded-full">
				<i className={`material-icons material-icons-${icon.split(' ')[1] ?? 'round'}`}>{icon.split(' ')[0]}</i>
			</span>
			<div className="flex flex-col">
				<h4 className="title text-powderBlue text-xs">{title}</h4>
				<span className="value text-delftBlue text-base font-bold">{value}</span>
			</div>
		</div>
	);
};

export default HeaderItem;
