import TaskItem from './TaskItem';
import Task from '../../entities/Task';

interface Props {
	onAddTask: () => void;
	title: string;
	taskItems: Array<Task>;
}

const TasksContainer = ({ title, taskItems, onAddTask }: Props) => {
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
			<div className="tasks-container grid gap-2">
				{taskItems.map(task => (
					<TaskItem
						key={task.id}
						task={task}
					/>
				))}
			</div>
		</div>
	);
};

export default TasksContainer;
