import TaskItem from './TaskItem';
import Button from '../Button';
import useFetchTasks from '../../hooks/tasks/useFetchTasks';
import Loader from '../Loader';
import Modal from '../Modal';
import AddTaskForm from './AddTaskForm';
import { useState } from 'react';
import { IsEmpty } from '../../helpers/DataType';
import useAddtask from '../../hooks/tasks/useAddTask';
import useEditTask from '../../hooks/tasks/useEditTask';
import useDeleteTask from '../../hooks/tasks/useDeleteTasks';

interface Props {
	title: string;
	status: number;
}

const TasksContainer = ({ title, status }: Props) => {
	const { data: tasks, error, isLoading } = useFetchTasks(status);
	const [addTaskModalDisplay, setAddTaskModalDisplay] = useState('hide');
	const [currentTask, setCurrentTask] = useState({
		id: Date.now(),
		title: '',
		description: '',
		status: status,
		img: '',
	});
	const addTask = useAddtask({
		onAdd: () => setAddTaskModalDisplay('hide'),
		onError: () => alert('مشکلی پیش آمده است. لطفا دوباره امتحان کنید!'),
	});

	const editTask = useEditTask({
		onEdit: () => setAddTaskModalDisplay('hide'),
		onError: () => alert('مشکلی پیش آمده است. لطفا دوباره امتحان کنید!'),
	});

	const deleteTask = useDeleteTask({
		onError: () => alert('مشکلی پیش آمده است. لطفا دوباره امتحان کنید!'),
	});

	return (
		<>
			<div className="tasks-container card grid gap-4 h-max px-5 py-4">
				<div className="title-box flex items-center justify-between">
					<h2 className="text-lg text-delftBlue font-bold">{title}</h2>
					<Button
						type="icon"
						text="add"
						color="blue"
						onClick={() => {
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
				{isLoading ? (
					<Loader />
				) : error ? (
					<p className="text-red text-lg text-center font-bold">{error.message}</p>
				) : tasks?.length > 0 ? (
					<div className="tasks-container grid gap-2">
						{tasks.map(task => (
							<TaskItem
								key={task.id}
								task={task}
								onEdit={data => {
									setCurrentTask(data);
									setAddTaskModalDisplay('show');
								}}
								onDelete={task => {
									deleteTask.mutate(task);
								}}
							/>
						))}
					</div>
				) : (
					<p className="no-task-text text-lg text-center font-bold">تسکی وجود ندارد</p>
				)}
			</div>
			{addTaskModalDisplay === 'show' && (
				<Modal
					title="افزودن کار"
					onClose={() => setAddTaskModalDisplay('hide')}
				>
					<AddTaskForm
						onAddTask={data => {
							addTask.mutate(data);
						}}
						onEditTask={data => {
							editTask.mutate(data);
						}}
						mode={IsEmpty(currentTask.title) ? 'ADD' : 'EDIT'}
						currentTask={currentTask}
						isAdding={addTask.isLoading}
						isEditing={editTask.isLoading}
					/>
				</Modal>
			)}
		</>
	);
};

export default TasksContainer;
