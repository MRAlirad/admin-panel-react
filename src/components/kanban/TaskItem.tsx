interface Props {
	title: string;
	img?: string;
	description: string;
	status: number;
}

const TaskItem = ({ title, description, status, img }: Props) => {
	return (
		<div className="task-item card py-2.5 px-4 grid gap-3">
			<div className="title-box flex items-center justify-between gap-2">
				<h3 className="title text-sm font-bold line-clamp-1">{title}</h3>
				<button className="edit-btn btn icon rounded-lg text-lg text-powderBlue hover:bg-ghostWhite">
					<i className="material-icons material-icons-round"> edit </i>
				</button>
			</div>
			{
				img ?
					<div className="img-box rounded-md w-full h-max max-h-[200px]">
						<img src={img} alt={title} />
					</div>
				:
					null
			}
			<p className="description text-xs text-powderBlue text-justify line-clamp-3">{description}</p>
			<div className="status-user-box">
				<span
					className={`staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white ${
						status === 0 ? 'bg-hunyadiYellow' : status === 1 ? 'bg-neonBlue' : 'bg-jade'
					}`}
				>
					{status === 0 ? 'در انتظار تایید' : status === 1 ? 'در حال انجام' : 'انجام شده'}
				</span>
				<div className="users"></div>
			</div>
		</div>
	);
};

export default TaskItem;
