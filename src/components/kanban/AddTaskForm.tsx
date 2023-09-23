import { useRef, useState } from 'react';
import Button from '../Button';
import { Task } from './TasksContainer';

interface Props {
	onAddTask: (data:Task) => void;
	status: number;
}

const AddTaskForm = ({ onAddTask, status }: Props) => {
	const [selectedStatus, setSelectedStatus] = useState(status);
	const titleRef = useRef<HTMLInputElement>(null);
	const descRef = useRef<HTMLTextAreaElement>(null);

	return (
		<div className="add-task-form flex flex-col items-center justify-center gap-3.5 min-w-[500px]">
			<div className="title-form-control grid gap-1.5 w-full ">
				<label className="text-sm text-delftBlue">عنوان</label>
				<input
					type="text"
					name="title"
					className="border !border-solid border-[#E0E5F2] rounded-xl py-3 px-4 focus:border-delftBlue"
					ref={titleRef}
				/>
			</div>
			<div className="desc-form-control grid gap-1.5 w-full">
				<label className="text-sm text-delftBlue">توضیحات</label>
				<textarea
					name="description"
					className="border !border-solid border-[#E0E5F2] rounded-xl outline-none py-3 px-4 focus:border-delftBlue"
					rows={5}
					ref={descRef}
				></textarea>
			</div>
			<div className="status-form-control flex items-center w-full gap-1">
				<label className="text-sm text-delftBlue">وضعیت</label>
				<div className="status-container flex items-center gap-1.5">
					<span
						className={`
							staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white bg-hunyadiYellow cursor-pointer
							${selectedStatus !== 0 ? 'opacity-50' : 'opacity-100'}
						`}
						onClick={() => setSelectedStatus(0)}
					>
						در انتظار تایید
					</span>
					<span
						className={`
							staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white bg-neonBlue cursor-pointer
							${selectedStatus !== 1 ? 'opacity-50' : 'opacity-100'}
						`}
						onClick={() => setSelectedStatus(1)}
					>
						در حال انجام
					</span>
					<span
						className={`
							staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white bg-jade cursor-pointer
							${selectedStatus !== 2 ? 'opacity-50' : 'opacity-100'}
						`}
						onClick={() => setSelectedStatus(2)}
					>
						انجام شده
					</span>
				</div>
			</div>
			<Button
				type="primary"
				text="ثبت"
				color="delftBlue"
				onClick={()=> {
					onAddTask({
						id: Math.random(),
						title: titleRef.current?.value ?? '',
						desctiption: descRef.current?.value ?? '',
						status: selectedStatus,
					});
				}}
			/>
		</div>
	);
};

export default AddTaskForm;
