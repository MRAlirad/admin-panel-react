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

	function addPendingTask() {
		setTasks([
			{
				id: Math.random(),
				title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
				desctiption:
					'لورم ایپسوم متن ساختگی با تولید سادگی نایک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
				status: 0,
			},
			...tasks,
		]);
	}

	function addRunningTask() {
		setTasks([
			{
				id: Math.random(),
				title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
				img: '/src/assets/pics/ProfileBg.png',
				desctiption:
					'لورم ایپسوم متن ساختگی با تولید سادگی نایک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
				status: 1,
			},
			...tasks,
		]);
	}

	function addDoneTask() {
		setTasks([
			{
				id: Math.random(),
				title: 'لورم ایپسوم متن ساختگی با تولید سادگی',
				desctiption:
					'لورم ایپسوم متن ساختگی با تولید سادگی نایک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر',
				status: 2,
			},
			...tasks,
		]);
	}

	return (
		<div className="kanban-page grid grid-cols-[1fr_1fr_1fr] gap-[1%]">
			<TasksContainer
				title="در انتظار تایید"
				taskItems={pendingTasks()}
				onAddTask={addPendingTask}
			/>
			<TasksContainer
				title="در حال انجام"
				taskItems={runningTasks()}
				onAddTask={addRunningTask}
			/>
			<TasksContainer
				title="انجام شده"
				taskItems={doneTasks()}
				onAddTask={addDoneTask}
			/>
			<Modal title='افزودن کار' onClose={()=> console.log('wow')}>
				<AddTaskForm />
			</Modal>
		</div>
	);
};

export default Kanban;
