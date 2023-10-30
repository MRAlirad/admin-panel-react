interface Props {
	icon: string;
	color?: string;
	size?: string;
}

const Icon = ({ icon, color = 'text-powderBlue', size = 'text-sm' }: Props) => {
	return (
		<span className={`flex items-center justify-center ${color} ${size}`}>
			<i className="material-icons material-icons-round">{icon}</i>
		</span>
	);
};

export default Icon;
