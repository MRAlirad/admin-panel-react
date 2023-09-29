interface Props {
	type ?: 'primary' | 'outline' | 'icon' | 'simple',
	text: string;
	color: string;
	onClick?: () => void;
	fluid?: boolean;
	disabled?: boolean;
	classes ?: string;
}

const Button = ({ type = 'primary', text, color, onClick, fluid = false, disabled = false, classes = ''}: Props) => {
	return (
		<button
			className={`
				flex items-center justify-center outline-none
				${fluid ? 'w-full' : 'w-max'}
				${
					type === 'primary' || type === 'outline' ?
						`py-1.5 px-6 border border-solid border-${color} rounded-lg`
					:
					type === 'icon' || type === 'simple' ?
						'border-none p-1'
					:
						''
				}
				${
					type === 'primary' ?
						`bg-${color} text-white`
					:
					type === 'outline' ?
						`bg-white text-${color}`
					:
					type === 'icon' ?
						`text-${color}`
					:
						''
				}
				${disabled ? 'opacity-60' : 'opacity-95 hover:opacity-100'}
				${classes}
			`}
			onClick={onClick}
			disabled={disabled}
		>
			{type === 'icon' ? <i className="material-icons material-icons-round">{text}</i> : text}
		</button>
	);
};

export default Button;
