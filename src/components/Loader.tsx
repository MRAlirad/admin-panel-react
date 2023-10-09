interface Props {
	size?: 'MINI'| 'TINY' | 'SMALL' | 'MEDIUM' | 'LARGE' | 'BIG' | 'HUGE' | 'MASSIVE';
}

const Loader = ({size = 'BIG'}: Props) => {
	return (
		<div className="flex items-center justify-center w-full h-full">
			<span className={`
				flex border-solid border-ghostWhite border-t-delftBlue rounded-full animate-spin
				${
					size === 'MINI' ?
						'w-[10px] h-[10px] border-[1px]'
					:
					size === 'TINY' ?
						'w-[20px] h-[20px] border-[2px]'
					:
					size === 'SMALL' ?
						'w-[30px] h-[30px] border-[3px]'
					:
					size === 'MEDIUM' ?
						'w-[40px] h-[40px] border-[4px]'
					:
					size === 'LARGE' ?
						'w-[50px] h-[50px] border-[5px]'
					:
					size === 'BIG' ?
						'w-[60px] h-[60px] border-[6px]'
					:
					size === 'HUGE' ?
						'w-[70px] h-[70px] border-[7px]'
					:
					size === 'MASSIVE' ?
						'w-[80px] h-[80px] border-[8px]'
					:
						''
				}
			`}></span>
		</div>
	);
};

export default Loader;