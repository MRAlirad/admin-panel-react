interface Props {
	icon: string;
	color?: string;
	size?: string;
}

const Icon = ({ icon, color = 'text-powderBlue', size = 'text-sm' }: Props) => {
	return (
		<span className={`flex items-center justify-center ${color} ${size}`}>
			<i className={`material-icons material-icons-${icon.split(' ')[1] ?? 'round'}`}>{icon.split(' ')[0]}</i>
		</span>
	);
};

export default Icon;
