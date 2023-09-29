import { useState, useEffect } from 'react';
import TasksContainer from '../components/kanban/TasksContainer';
import AddTaskForm from '../components/kanban/AddTaskForm';
import Modal from '../components/Modal';
import Task from '../entities/Task';
import apiClient from '../services/api-client';

const Kanban = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [taskStatus, setTaskStatus] = useState(0);
	const [showAddTaskModal, setAddTaskModalDisplay] = useState('hide');

	useEffect(() => {
		apiClient.get<Task[]>('/tasks').then(response => setTasks(response.data));
	}, []);

	function addTask({ id, title, img, description, status }: Task) {
		setTasks([{ id, title, img, description, status }, ...tasks]);
	}

	function deleteTask(taskId: number) {
		setTasks(tasks.filter(task => task.id !== taskId));
	}

	return (
		<div className="kanban-page grid grid-cols-3 gap-x-[1%]">
			<TasksContainer
				title="در انتظار تایید"
				status={0}
				onAddTask={() => {
					setAddTaskModalDisplay('show');
					setTaskStatus(0);
				}}
				onEditTask={data => {
					console.log(data);
				}}
				onDeleteTask={taskId => deleteTask(taskId)}
			/>
			<TasksContainer
				title="در حال انجام"
				status={1}
				onAddTask={() => {
					setAddTaskModalDisplay('show');
					setTaskStatus(1);
				}}
				onEditTask={data => {
					console.log(data);
				}}
				onDeleteTask={taskId => deleteTask(taskId)}
			/>
			<TasksContainer
				title="انجام شده"
				status={2}
				onAddTask={() => {
					setAddTaskModalDisplay('show');
					setTaskStatus(2);
				}}
				onEditTask={data => {
					console.log(data);
				}}
				onDeleteTask={taskId => deleteTask(taskId)}
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
								img: data.img,
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
