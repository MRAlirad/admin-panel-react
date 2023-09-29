import TaskItem from './TaskItem';
import Task from '../../entities/Task';
import Button from '../Button';
import useTasks from '../../hooks/useTasks';
import Loader from '../Loader';
import tasksService from '../../services/tasks-service';
import Modal from '../Modal';
import AddTaskForm from './AddTaskForm';
import { useState } from 'react';

interface Props {
	title: string;
	status : number;
}

const TasksContainer = ({ title, status }: Props) => {
	const {tasks, setTasks, error, isLoading} = useTasks(status);
	const [addTaskModalDisplay, setAddTaskModalDisplay] = useState('hide');
	const [taskStatus, setTaskStatus] = useState(0);

	const addTask = (task: Task)=> {
		console.log(task);
		tasksService
			.post(task)
			.then(()=> {
				setTasks([task, ...tasks])
			})
			.catch((error)=> {
				alert(error)
			})
		;
	}

	const onDeleteTask = (id : number)=> {
		tasksService
			.delete(id)
			.then(()=> {
				setTasks(tasks.filter(task => task.id !== id))
			})
			.catch(()=> {
				alert('موردی پیش آمد. لطفا دوباره امتحان کنید');
			})
		;
	}

	return (
		<>
			<div className="tasks-container card grid gap-4 h-max px-5 py-4">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-lg text-delftBlue font-bold">{title}</h2>
					<Button
						type="icon"
						text="add"
						color="blue"
						onClick={()=> {
							setTaskStatus(status);
							setAddTaskModalDisplay('show');
						}}
						className="!w-14 h-7 bg-ghostWhite rounded-md"
					/>
				</div>
				{
					isLoading ?
						<Loader />
					:
					error ?
						<p className="text-red text-lg text-center font-bold">{error}</p>
					:
					tasks.length > 0 ?
						<div className="tasks-container grid gap-2">
							{tasks.map(task => (
								<TaskItem
									key={task.id}
									task={task}
									onEdit={data => console.log(data)}
									onDelete={taskId => onDeleteTask(taskId)}
								/>
							))}
						</div>
					:
					<p className="no-task-text text-lg text-center font-bold">تسکی وجود ندارد</p>
				}
			</div>
			{addTaskModalDisplay === 'show' && (
				<Modal
					title="افزودن کار"
					onClose={() => setAddTaskModalDisplay('hide')}
				>
					<AddTaskForm
						onAddTask={data => {
							addTask(data);
							setAddTaskModalDisplay('hide');
						}}
						status={taskStatus}
					/>
				</Modal>
			)}
		</>
	);
};

export default TasksContainer;
