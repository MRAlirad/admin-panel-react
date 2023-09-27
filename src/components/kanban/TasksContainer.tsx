import TaskItem from './TaskItem';
import Task from '../../entities/Task';

interface Props {
	onAddTask: () => void;
	onEditTask: (data: Task) => void;
	onDeleteTask: (id: number) => void;
	title: string;
	taskItems: Array<Task>;
}

const TasksContainer = ({ title, taskItems, onAddTask, onEditTask, onDeleteTask }: Props) => {
	return (
		<div className="tasks-container card grid gap-4 h-max px-5 py-4">
			<div className="title-box flex items-center justify-between">
				<h2 className="text-lg text-delftBlue font-bold">{title}</h2>
				<button
					className="btn w-14 h-7 text-blue bg-ghostWhite rounded-md"
					onClick={onAddTask}
				>
					<i className="material-icons material-icons-round"> add </i>
				</button>
			</div>
			{taskItems.length > 0 ? (
				<div className="tasks-container grid gap-2">
					{taskItems.map(task => (
						<TaskItem
							key={task.id}
							task={task}
							onEdit={data => onEditTask(data)}
							onDelete={taskId => onDeleteTask(taskId)}
						/>
					))}
				</div>
			) : (
				<p className="no-task-text">No task found!</p>
			)}
		</div>
	);
};

export default TasksContainer;
