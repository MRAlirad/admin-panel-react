interface Props {
	type: 'primary' | 'secondary' | 'icon';
	color: string;
	text: string;
	onClick: () => void;
	fluid?: boolean;
}

const Button = ({ type, color, text, onClick, fluid = false }: Props) => {
	return(
		<button
			className={`flex items-center justify-center ${fluid ? 'w-full' : 'w-max'} ${
				type === 'icon'
					? `border-none outline-none p-1 text-${color}`
					: type === 'primary'
					? `bg-${color} text-white py-2.5 px-10 border border-solid border-${color} rounded-lg`
					: type === 'secondary'
					? `bg-white text-${color} py-2.5 px-10 border border-solid border-${color} rounded-lg`
					: ''
			} opacity-95 hover:opacity-100`}
			onClick={onClick}
		>
			{type === 'icon' ? <i className="material-icons material-icons-round">{text}</i> : text}
		</button>
	);
};

export default Button;
