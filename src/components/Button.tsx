interface Props {
	type: 'icon' | 'btn-primary' | 'btn-outline-primary' | 'btn-white';
	color?: string;
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
					type !== 'icon' ?
						'py-2.5 px-10 border border-solid rounded-lg'
					:
						''
				}
				${
					type === 'icon' ?
						`border-none outline-none p-1 text-${color}`
					:
					type === 'btn-primary' ?
						'bg-delftBlue text-white py-2.5 border-delftBlue'
					:
					type === 'btn-outline-primary' ?
						"bg-white text-delftBlue py-2.5 border-delftBlue"
					:
					type === 'btn-white' ?
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
