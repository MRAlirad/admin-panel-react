const Kanban = () => {
	const tasks = [
		{
			id: Math.random(),
			title: '1عنوان',
			desctiption: 'توضیحات',
			status: 0,
		},
		{
			id: Math.random(),
			title: 'عنو2ان',
			desctiption: 'توضیحات',
			status: 0,
		},
		{
			id: Math.random(),
			title: '3عنوان',
			desctiption: 'توضیحات',
			status: 1,
		},
		{
			id: Math.random(),
			title: '4عنوان',
			desctiption: 'توضیحات',
			status: 1,
		},
		{
			id: Math.random(),
			title: '5عنوان',
			desctiption: 'توضیحات',
			status: 2,
		},
	];

	function pendingTasks() {
		const pendingTasks = [];
		for (const task of tasks) if (task.status === 0) pendingTasks.push(task);
		return pendingTasks;
	}

	function runningTasks() {
		const runningTasks = [];
		for (const task of tasks) if (task.status === 1) runningTasks.push(task);
		return runningTasks;
	}

	function doneTasks() {
		const doneTasks = [];
		for (const task of tasks) if (task.status === 2) doneTasks.push(task);
		return doneTasks;
	}

	return (
		<div className="kanban-page grid grid-cols-[1fr_1fr_1fr] gap-[1%]">
			<div className="pending-tasks-container card px-9 py-6">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-[22px] text-delftBlue font-bold">در انتظار تایید</h2>
					<button className="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
						<i className="material-icons material-icons-round"> add </i>
					</button>
				</div>
				<div className="tasks-container">
					{pendingTasks().map(task => (
						<div key={task.id}>{task.title}</div>
					))}
				</div>
			</div>

			<div className="running-tasks-container card px-9 py-6">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-[22px] text-delftBlue font-bold">در حال انجام</h2>
					<button className="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
						<i className="material-icons material-icons-round"> add </i>
					</button>
				</div>
				<div className="tasks-container">
					{runningTasks().map(task => (
						<div key={task.id}>{task.title}</div>
					))}
				</div>
			</div>

			<div className="done-task-container card px-9 py-6">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-[22px] text-delftBlue font-bold">انجام شده</h2>
					<button className="btn w-[90px] h-[35px] text-blue bg-ghostWhite rounded-xl">
						<i className="material-icons material-icons-round"> add </i>
					</button>
				</div>
				<div className="tasks-container">
					{doneTasks().map(task => (
						<div key={task.id}>{task.title}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Kanban;
