import { useState } from 'react';
import TasksContainer from '../components/kanban/TasksContainer';
import AddTaskForm from '../components/kanban/AddTaskForm';
import Modal from '../components/Modal';
import { Task } from '../components/kanban/TasksContainer';

const Kanban = () => {
	const [tasks, setTasks] = useState([
		{
			id: Math.random(),
			title: 'لورم  با تولید تولید تولید سادگی لورم  با تولید تولید تولید سادگی لورم  با تولید تولید تولید سادگی لورم  با تولید تولید تولید سادگی لورم  با تولید تولید تولید سادگی لورم  با تولید تولید تولید سادگی',
			desctiption:
				'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
			img: '/src/assets/pics/DragDrop.png',
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
			img: '/src/assets/pics/DragDrop.png',
			status: 2,
		},
	]);
	const [taskStatus, setTaskStatus] = useState(0);
	const [showAddTaskModal, setShowAddTaskModal] = useState(false);

	function pendingTasks(): Array<Task> {
		const pendingTasks = [];
		for (const task of tasks) if (task.status === 0) pendingTasks.push(task);
		return pendingTasks;
	}

	function runningTasks(): Array<Task> {
		const runningTasks = [];
		for (const task of tasks) if (task.status === 1) runningTasks.push(task);
		return runningTasks;
	}

	function doneTasks(): Array<Task> {
		const doneTasks = [];
		for (const task of tasks) if (task.status === 2) doneTasks.push(task);
		return doneTasks;
	}

	function addTask({ id, title, desctiption, status }: Task) {
		setTasks([
			{
				id: id,
				title: title,
				desctiption: desctiption,
				status: status,
			},
			...tasks,
		]);
	}

	return (
		<div className="kanban-page grid grid-cols-[1fr_1fr_1fr] gap-[1%]">
			<TasksContainer
				title="در انتظار تایید"
				taskItems={pendingTasks()}
				onAddTask={() => {
					setShowAddTaskModal(true);
					setTaskStatus(0)
				}}
			/>
			<TasksContainer
				title="در حال انجام"
				taskItems={runningTasks()}
				onAddTask={() => {
					setShowAddTaskModal(true);
					setTaskStatus(1)
				}}
			/>
			<TasksContainer
				title="انجام شده"
				taskItems={doneTasks()}
				onAddTask={() => {
					setShowAddTaskModal(true);
					setTaskStatus(2)
				}}
			/>
			{showAddTaskModal ? (
				<Modal
					title="افزودن کار"
					onClose={() => setShowAddTaskModal(false)}
				>
					<AddTaskForm
						onAddTask={(data) => {
							addTask({
								id: data.id,
								title: data.title,
								desctiption: data.desctiption,
								status: data.status,
							});
							setShowAddTaskModal(false);
						}}
						status={taskStatus}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default Kanban;
