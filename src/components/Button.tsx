interface Props {
	type: 'primary' | 'secondary' | 'icon';
	color: string;
	text: string;
	onClick: () => void;
	fluid?: boolean;
	disabled?: boolean;
}

const Button = ({ type, color, text, onClick, fluid = false, disabled = false}: Props) => {
	return (
		<button
			className={`
				flex items-center justify-center
				${fluid ? 'w-full' : 'w-max'}
				${
					type === 'icon'
						? `border-none outline-none p-1 text-${color} text-red`
						: type === 'primary'
						? `bg-${color} bg-delftBlue text-white py-2.5 px-10 border border-solid border-${color} rounded-lg`
						: type === 'secondary'
						? `bg-white text-${color} py-2.5 px-10 border border-solid border-${color} rounded-lg`
						: ''
				}
				${disabled ? 'opacity-60' : 'opacity-95 hover:opacity-100'}
			`}
			onClick={onClick}
			disabled={disabled}
		>
			{type === 'icon' ? <i className="material-icons material-icons-round">{text}</i> : text}
		</button>
	);
};

export default Button;
