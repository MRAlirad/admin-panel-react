// import { useState } from 'react';
import TasksContainer from '../components/kanban/TasksContainer';
// import AddTaskForm from '../components/kanban/AddTaskForm';
// import Modal from '../components/Modal';
// import Task from '../entities/Task';

const Kanban = () => {
	// const [tasks, setTasks] = useState<Task[]>([]);

	// function addTask({ id, title, img, description, status }: Task) {
	// 	setTasks([{ id, title, img, description, status }, ...tasks]);
	// }

	return (
		<div className="kanban-page grid grid-cols-3 gap-x-[1%]">
			<TasksContainer
				title="در انتظار تایید"
				status={0}
			/>
			<TasksContainer
				title="در حال انجام"
				status={1}
			/>
			<TasksContainer
				title="انجام شده"
				status={2}
			/>
		</div>
	);
};

export default Kanban;
