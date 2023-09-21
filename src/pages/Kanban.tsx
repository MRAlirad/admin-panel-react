import TaskItem from '../components/kanban/TaskItem';

const Kanban = () => {
	const tasks = [
		{
			id: Math.random(),
			title: 'لورم  با تولید سادگی',
			desctiption:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
			status: 0,
		},
		{
			id: Math.random(),
			title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
			desctiption:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت و متون بلکه روزنامه و مجله در ستون و سطر',
			status: 0,
		},
		{
			id: Math.random(),
			title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
			desctiption: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم ا مجله در ستون و سطر',
			status: 1,
		},
		{
			id: Math.random(),
			title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
			desctiption:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفااپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
			status: 1,
		},
		{
			id: Math.random(),
			title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
			desctiption:
				'لورم ایپسوم متن ساختگی با تولید سادگی نایک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
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
			<div className="pending-tasks-container card grid gap-5 h-max px-5 py-4">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-lg text-delftBlue font-bold">در انتظار تایید</h2>
					<button className="btn w-14 h-7 text-blue bg-ghostWhite rounded-md">
						<i className="material-icons material-icons-round"> add </i>
					</button>
				</div>
				<div className="tasks-container grid gap-5">
					{pendingTasks().map(task => (
						<TaskItem
							key={task.id}
							title={task.title}
							description={task.desctiption}
							status={task.status}
						/>
					))}
				</div>
			</div>

			<div className="pending-tasks-container card grid gap-5 h-max px-5 py-4">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-lg text-delftBlue font-bold">در انتظار تایید</h2>
					<button className="btn w-14 h-7 text-blue bg-ghostWhite rounded-md">
						<i className="material-icons material-icons-round"> add </i>
					</button>
				</div>
				<div className="tasks-container grid gap-5">
					{runningTasks().map(task => (
						<TaskItem
							key={task.id}
							title={task.title}
							description={task.desctiption}
							status={task.status}
						/>
					))}
				</div>
			</div>

			<div className="pending-tasks-container card grid gap-5 h-max px-5 py-4">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-lg text-delftBlue font-bold">در انتظار تایید</h2>
					<button className="btn w-14 h-7 text-blue bg-ghostWhite rounded-md">
						<i className="material-icons material-icons-round"> add </i>
					</button>
				</div>
				<div className="tasks-container grid gap-5">
					{doneTasks().map(task => (
						<TaskItem
							key={task.id}
							title={task.title}
							description={task.desctiption}
							status={task.status}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Kanban;
