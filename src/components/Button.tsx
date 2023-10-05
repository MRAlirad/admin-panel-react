interface Props {
	type ?: 'primary' | 'outline' | 'icon' | 'simple',
	text: string;
	color?: string;
	onClick?: () => void;
	fluid?: boolean;
	disabled?: boolean;
	className ?: string;
	size ?: string;
}

const Button = ({ type = 'primary', text, color = 'delftBlue', onClick, fluid = false, disabled = false, className = '', size = 'text-sm'}: Props) => {
	return (
		<button
			className={`
				flex items-center justify-center outline-none ${size}
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
					type === 'icon' || type === 'simple' ?
						`text-${color}`
					:
						''
				}
				${disabled ? 'opacity-60' : 'opacity-95 hover:opacity-100'}
				${className}
			`}
			onClick={onClick}
			disabled={disabled}
		>
			{
				type === 'icon' ?
					<i className={`material-icons material-icons-${text.split(' ')[1] ?? 'round'}`}>{text.split(' ')[0]}</i>
				: 
					text
			}
		</button>
	);
};

export default Button;
