import { useState, useEffect } from 'react';
import TasksContainer from '../components/kanban/TasksContainer';
import AddTaskForm from '../components/kanban/AddTaskForm';
import Modal from '../components/Modal';
import Task from '../entities/Task';
import axios from 'axios';

const Kanban = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskStatus, setTaskStatus] = useState(0);
	const [showAddTaskModal, setAddTaskModalDisplay] = useState('hide');

	useEffect(()=> {
		axios.get<Task[]>('http://localhost:3500/tasks')
			.then((response)=> setTasks(response.data))
		;
	}, []);

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

	function addTask({ id, title, img, description, status }: Task) {
		setTasks([{id,title,img ,description,status}, ...tasks]);
	}

	return (
		<div className="kanban-page grid grid-cols-3 gap-[1%]">
			<TasksContainer
				title="در انتظار تایید"
				taskItems={pendingTasks()}
				onAddTask={() => {
					setAddTaskModalDisplay('show');
					setTaskStatus(0);
				}}
				onEditTask={(data)=> {console.log(data)}}
			/>
			<TasksContainer
				title="در حال انجام"
				taskItems={runningTasks()}
				onAddTask={() => {
					setAddTaskModalDisplay('show');
					setTaskStatus(1);
				}}
				onEditTask={(data)=> {console.log(data)}}
			/>
			<TasksContainer
				title="انجام شده"
				taskItems={doneTasks()}
				onAddTask={() => {
					setAddTaskModalDisplay('show');
					setTaskStatus(2);
				}}
				onEditTask={(data)=> {console.log(data)}}
			/>
			{showAddTaskModal === 'show' ? (
				<Modal
					title="افزودن کار"
					onClose={() => setAddTaskModalDisplay('hide')}
				>
					<AddTaskForm
						onAddTask={data => {
							addTask({
								id: data.id,
								title: data.title,
								img : data.img,
								description: data.description,
								status: data.status,
							});
							setAddTaskModalDisplay('hide');
						}}
						status={taskStatus}
					/>
				</Modal>
			) : null}
		</div>
	);
};

export default Kanban;
