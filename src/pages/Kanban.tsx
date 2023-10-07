import TasksContainer from '../components/kanban/TasksContainer';

const Kanban = () => {
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
