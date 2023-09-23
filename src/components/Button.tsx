interface Props {
	type?: 'icon' | 'primary' | 'outline-primary' | 'white' | 'simple';
	color?: string;
	text: string;
	onClick: () => void;
	fluid?: boolean;
	disabled?: boolean;
}

const Button = ({ type = 'primary', color, text, onClick, fluid = false, disabled = false}: Props) => {
	return (
		<button
			className={`
				flex items-center justify-center
				${fluid ? 'w-full' : 'w-max'}
				${
					type !== 'icon' ?
						'py-1.5 px-6 border border-solid rounded-lg'
					:
						'border-none outline-none p-1'
				}
				${
					type === 'icon' ?
						`text-${color}`
					:
					type === 'simple' ?
						''
					:
					type === 'primary' ?
						'bg-delftBlue text-white py-2.5 border-delftBlue'
					:
					type === 'outline-primary' ?
						"bg-white text-delftBlue py-2.5 border-delftBlue"
					:
					type === 'white' ?
						'bg-white text-delftBlue py-2.5 border-white'
					:
						''
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
