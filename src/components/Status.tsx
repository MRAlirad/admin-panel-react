enum State {
	DEACTIVE = 1,
	FAIL = 0,
	CONFIRMED = 2,
}

interface Props {
	state: State;
}

interface StateProp {
	label: string;
	color: 'red' | 'hunyadiYellow' | 'jade';
	icon: 'check_circle' | 'cancel' | 'error';
}

const statusMap: Record<State, StateProp> = {
	[State.DEACTIVE]: { label: 'غیرفعال شده', color: 'red', icon: 'cancel' },
	[State.CONFIRMED]: { label: 'تایید شده', color: 'jade', icon: 'check_circle' },
	[State.FAIL]: { label: 'خطا', color: 'hunyadiYellow', icon: 'error' },
};

const Status = ({ state }: Props) => {
	return (
		<div className="status flex items-center justify-center gap-1.5">
			<span className={`icon-box text-xl text-${statusMap[state].color}`}>
				<i className="material-icons material-icons-round">{statusMap[state].icon}</i>
			</span>
			<span className="text-delftBlue text-sm font-bold">{statusMap[state].label}</span>
		</div>
	);
};

export default Status;
