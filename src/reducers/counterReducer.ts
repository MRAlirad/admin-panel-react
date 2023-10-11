interface Action {
	type: 'INCREMENT' | 'DECREMENT' | 'RESET';
}

const counterReducer = (state: number, action: Action):number => {
	if (action.type === 'INCREMENT') return state + 1;
	else if (action.type === 'DECREMENT') return state - 1;
	else if (action.type === 'RESET') return 0;
	return state;
};

export default counterReducer;
