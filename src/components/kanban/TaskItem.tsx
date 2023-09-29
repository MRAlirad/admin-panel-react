import Task from '../../entities/Task';
import Button from '../Button';

interface Props {
	task: Task;
	onEdit: (data: Task) => void;
	onDelete: (id: number) => void;
}

const TaskItem = ({ task, onEdit, onDelete }: Props) => {
	return (
		<div
			className="task-item card py-2.5 px-4 grid gap-3"
			data-id={task.id}
		>
			<div className="title-box flex items-center justify-between gap-2">
				<h3 className="title text-sm font-bold line-clamp-1">{task.title}</h3>
				<div className="actions-box flex items-ceter gap-1">
					<Button
						type="icon"
						text="edit"
						color="powderBlue"
						onClick={() => onEdit(task)}
					/>
					<Button
						type="icon"
						text="delete outlined"
						color="red"
						onClick={() => onDelete(task.id)}
					/>
				</div>
			</div>
			{task.img ? (
				<div className="img-box rounded-md w-full h-max max-h-[200px]">
					<img
						src={task.img}
						alt={task.title}
					/>
				</div>
			) : null}
			<p className="description text-xs text-powderBlue text-justify line-clamp-3">{task.description}</p>
			<div className="status-user-box">
				<span
					className={`
						staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white
						${task.status === 0 ? 'bg-hunyadiYellow' : task.status === 1 ? 'bg-neonBlue' : task.status === 2 ? 'bg-jade' : ''}
					`}
				>
					{task.status === 0
						? 'در انتظار تایید'
						: task.status === 1
						? 'در حال انجام'
						: task.status === 2
						? 'انجام شده'
						: ''}
				</span>
				<div className="users"></div>
			</div>
		</div>
	);
};

export default TaskItem;
