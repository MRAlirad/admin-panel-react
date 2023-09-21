interface Props {
	title: string;
	description: string;
	status: number;
}

const TaskItem = ({ title, description, status }: Props) => {
	return (
		<div className="task-item card p-5 grid gap-5">
			<div className="title-box flex items-center justify-between">
				<h3 className="title text-sm font-bold">{title}</h3>
				<button className="edit-btn btn icon rounded-lg text-lg text-powderBlue hover:bg-ghostWhite">
					<i className="material-icons material-icons-round"> edit </i>
				</button>
			</div>
			<p className="description text-sm text-powderBlue text-justify">{description}</p>
			<div className="status-user-box">
				<span className={`staus flex items-center justify-center w-24 h-7 rounded-[10px] text-[10px] text-white ${status === 0 ? 'bg-hunyadiYellow' : status === 1 ? 'bg-neonBlue' : 'bg-jade'}`}>{status === 0 ? 'در انتظار تایید' : status === 1 ? 'در حال انجام' : 'انجام شده'}</span>
				<div className="users"></div>
			</div>
		</div>
	);
};

export default TaskItem;
