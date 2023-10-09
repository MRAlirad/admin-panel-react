import TaskItem from './TaskItem';
// import Task from '../../entities/Task';
import Button from '../Button';
import useTasks from '../../hooks/useTasks';
import Loader from '../Loader';
// import tasksService from '../../services/tasks-service';
import Modal from '../Modal';
import AddTaskForm from './AddTaskForm';
import { useState } from 'react';
import { IsEmpty } from '../../helpers/DataType';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Task from '../../entities/Task';
import apiClient from '../../services/api-client';

interface Props {
	title: string;
	status : number;
}

const TasksContainer = ({ title, status }: Props) => {
	const {data:tasks, error, isLoading} = useTasks(status);
	const queryClient = useQueryClient();
	const [addTaskModalDisplay, setAddTaskModalDisplay] = useState('hide');
	const [currentTask, setCurrentTask] = useState({
		id: Date.now(),
		title: '',
		description: '',
		status: status,
		img: '',
	});

	const addTask = useMutation({
		mutationFn : async (task: Task)=> {
			return apiClient
				.post<Task>('/tasks', task)
				.then(res => res.data)
			;
		},
		onSuccess: ()=> {
			queryClient.invalidateQueries({
				queryKey: ['tasks'],
			});
			// queryClient.setQueriesData<Task[]>(['tasks'], totalTasks => [addedTask, ...(totalTasks || [])])
		},
	});

	// const editTask = (task: Task)=> {
	// 	tasksService
	// 		.update<Task>(task)
	// 		.then(() => setTasks(tasks.map(t => (t.id === task.id ? task : t))))
	// 		.catch((error)=> alert(error))
	// 	;
	// }

	// const deleteTask = (id : number)=> {
	// 	tasksService
	// 		.delete(id)
	// 		.then(()=> {
	// 			setTasks(tasks.filter(task => task.id !== id))
	// 		})
	// 		.catch((error)=> {
	// 			alert(error);
	// 		})
	// 	;
	// }

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
							setAddTaskModalDisplay('show');
							setCurrentTask({
								id: Date.now(),
								title: '',
								description: '',
								status: status,
								img: '',
							});
						}}
						className="!w-14 h-7 bg-ghostWhite rounded-md"
					/>
				</div>
				{
					isLoading ?
						<Loader />
					:
					error ?
						<p className="text-red text-lg text-center font-bold">{error.message}</p>
					:
					tasks?.length > 0 ?
						<div className="tasks-container grid gap-2">
							{tasks.map(task => (
								<TaskItem
									key={task.id}
									task={task}
									onEdit={data => {
										setCurrentTask(data);
										setAddTaskModalDisplay('show');
									}}
									onDelete={taskId => {
										console.log(taskId);
										// deleteTask(taskId)
									}}
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
							addTask.mutate(data);
							setAddTaskModalDisplay('hide');
						}}
						onEditTask={data => {
							console.log(data);
							// editTask(data);
							setAddTaskModalDisplay('hide');
						}}
						mode={IsEmpty(currentTask.title) ? 'ADD' : 'EDIT'}
						currentTask={currentTask}
					/>
				</Modal>
			)}
		</>
	);
};

export default TasksContainer;
