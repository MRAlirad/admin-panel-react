import { useState } from 'react';
import Button from '../Button';
import Task from '../../entities/Task';
import apiClient from '../../services/api-client';
import { FieldValues, useForm } from 'react-hook-form';

interface Props {
	onAddTask: (data: Task) => void;
	status: number;
}

interface FormData {
	title: string;
	description: string;
	img: string;
}

const AddTaskForm = ({ onAddTask, status }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const [selectedStatus, setSelectedStatus] = useState(status);
	console.log(errors);

	const onSubmit = (data: FieldValues) => {
		const newTask = {
			id: Date.now(),
			title: data.title,
			description: data.description,
			status: selectedStatus,
			img: data.img,
		};

		apiClient.post('/tasks', newTask).then(res => onAddTask(res.data));
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="add-task-form flex flex-col items-center justify-center gap-3.5 min-w-[500px]"
		>
			<div className="title-form-control grid gap-1.5 w-full ">
				<label className="text-sm text-delftBlue">عنوان</label>
				<input
					type="text"
					className={`
						border !border-solid rounded-xl py-3 px-4 focus:border-delftBlue
						${errors.title ? 'border-red' : 'border-[#E0E5F2]'}
					`}
					{...register('title', { required: true })}
				/>
			</div>
			<div className="desc-form-control grid gap-1.5 w-full">
				<label className="text-sm text-delftBlue">توضیحات</label>
				<textarea
					className={`
						border !border-solid rounded-xl outline-none py-3 px-4 focus:border-delftBlue
						${errors.description ? 'border-red' : 'border-[#E0E5F2]'}
					`}
					rows={5}
					{...register('description', { required: true })}
				></textarea>
			</div>
			<div className="img-form-control grid gap-1.5 w-full ">
				<label className="text-sm text-delftBlue">آدرس عکس</label>
				<input
					type="text"
					className="border !border-solid border-[#E0E5F2] rounded-xl py-3 px-4 focus:border-delftBlue"
					{...register('img')}
				/>
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
			/>
		</form>
	);
};

export default AddTaskForm;
