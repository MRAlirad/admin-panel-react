import TaskItem from './TaskItem';
import Task from '../../entities/Task';
import Button from '../Button';
import useTasks from '../../hooks/useTasks';
import Loader from '../Loader';

interface Props {
	onAddTask: () => void;
	onEditTask: (data: Task) => void;
	onDeleteTask: (id: number) => void;
	title: string;
	status : number;
}

const TasksContainer = ({ title, status, onAddTask, onEditTask, onDeleteTask }: Props) => {
	const {tasks, error, isLoading} = useTasks(status)


	return (
		<div className="tasks-container card grid gap-4 h-max px-5 py-4">
			<div className="title-box flex items-center justify-between">
				<h2 className="text-lg text-delftBlue font-bold">{title}</h2>
				<Button
					type="icon"
					text="add"
					color="blue"
					onClick={onAddTask}
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
								onEdit={data => onEditTask(data)}
								onDelete={taskId => onDeleteTask(taskId)}
							/>
						))}
					</div>
				:
				<p className="no-task-text text-lg text-center font-bold">تسکی وجود ندارد</p>
			}
		</div>
	);
};

export default TasksContainer;
