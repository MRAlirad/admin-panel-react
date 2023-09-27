import { useRef, useState } from 'react';
import Button from '../Button';
import Task from '../../entities/Task';
import axios from 'axios';

interface Props {
	onAddTask: (data: Task) => void;
	status: number;
}

const AddTaskForm = ({ onAddTask, status }: Props) => {
	const [selectedStatus, setSelectedStatus] = useState(status);
	const [titleValidation, setTitleValidation] = useState(true);
	const [descValidation, setDescValidation] = useState(true);
	const titleRef = useRef<HTMLInputElement>(null);
	const descRef = useRef<HTMLTextAreaElement>(null);

	return (
		<div className="add-task-form flex flex-col items-center justify-center gap-3.5 min-w-[500px]">
			<div className="title-form-control grid gap-1.5 w-full ">
				<label className="text-sm text-delftBlue">عنوان</label>
				<input
					type="text"
					name="title"
					className={`
						border !border-solid border-[#E0E5F2] rounded-xl py-3 px-4 focus:border-delftBlue
						${titleValidation ? 'border-[#E0E5F2]' : 'border-red'}
					`}
					ref={titleRef}
					onFocus={()=> setTitleValidation(true)}
				/>
			</div>
			<div className="desc-form-control grid gap-1.5 w-full">
				<label className="text-sm text-delftBlue">توضیحات</label>
				<textarea
					name="description"
					className={`
						border !border-solid rounded-xl outline-none py-3 px-4 focus:border-delftBlue
						${descValidation ? 'border-[#E0E5F2]' : 'border-red'}
					`}
					rows={5}
					ref={descRef}
					onFocus={()=> setDescValidation(true)}
				></textarea>
			</div>
			<div className="status-form-control flex items-center w-full gap-1.5">
				<label className="text-sm text-delftBlue">وضعیت</label>
				<span
					className={`
							staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white bg-hunyadiYellow cursor-pointer
							${selectedStatus !== 0 ? 'opacity-50 hover:opacity-70' : 'opacity-100'}
						`}
					onClick={() => setSelectedStatus(0)}
				>
					در انتظار تایید
				</span>
				<span
					className={`
							staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white bg-neonBlue cursor-pointer
							${selectedStatus !== 1 ? 'opacity-50 hover:opacity-70' : 'opacity-100'}
						`}
					onClick={() => setSelectedStatus(1)}
				>
					در حال انجام
				</span>
				<span
					className={`
							staus flex items-center justify-center w-max py-1 px-2 rounded-md text-[9px] text-white bg-jade cursor-pointer
							${selectedStatus !== 2 ? 'opacity-50 hover:opacity-70' : 'opacity-100'}
						`}
					onClick={() => setSelectedStatus(2)}
				>
					انجام شده
				</span>
			</div>
			<Button
				type="primary"
				text="ثبت"
				onClick={() => {
					if(!titleRef.current?.value)
						setTitleValidation(false);

					if(!descRef.current?.value)
						setDescValidation(false);

					if(!titleRef.current?.value || !descRef.current?.value)
						return;

					const newTask = {
						id: Math.random(),
						title: titleRef.current?.value ?? '',
						description: descRef.current?.value ?? '',
						status: selectedStatus,
						img: '/src/assets/pics/DragDrop.png',
					}

					axios.post('http://localhost:3500/tasks', newTask)
						.then((res)=> onAddTask(res.data))
					;
				}}
			/>
		</div>
	);
};

export default AddTaskForm;
