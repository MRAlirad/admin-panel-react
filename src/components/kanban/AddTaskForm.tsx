import Button from '../Button';
import Task from '../../entities/Task';
import { FieldValues, useForm } from 'react-hook-form';

interface Props {
	onAddTask: (data: Task) => void;
	onEditTask: (data: Task) => void;
	currentTask: Task;
	mode?: 'ADD' | 'EDIT';
}

interface FormData {
	title: string;
	description: string;
	img: string;
}

const AddTaskForm = ({ onAddTask, onEditTask, currentTask, mode = 'ADD' }: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit = (data: FieldValues) => {
		const task = {
			id: currentTask.id,
			title : data.title,
			description: data.description,
			status: currentTask.status,
			img: data.img,
		};
		if(mode === 'ADD')
			onAddTask(task);
		else
			onEditTask(task);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="add-task-form flex flex-col items-center justify-center gap-3.5 min-w-[500px]"
		>
			<div className="title-form-control grid gap-1.5 w-full ">
				<label className="text-sm text-delftBlue">عنوان</label>
				<input
					defaultValue={currentTask.title ?? ''}
					type="text"
					placeholder="عنوان را وارد کنید"
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
					defaultValue={currentTask.description ?? ''}
					className={`
						border !border-solid rounded-xl outline-none py-3 px-4 focus:border-delftBlue
						${errors.description ? 'border-red' : 'border-[#E0E5F2]'}
					`}
					placeholder="توضیحات را وارد کنید"
					rows={5}
					{...register('description', { required: true })}
				></textarea>
			</div>
			<div className="img-form-control grid gap-1.5 w-full ">
				<label className="text-sm text-delftBlue">آدرس عکس</label>
				<input
					defaultValue={currentTask.img ?? ''}
					type="text"
					className="border !border-solid border-[#E0E5F2] rounded-xl py-3 px-4 focus:border-delftBlue"
					placeholder="آدرس عکس را وارد کنید"
					{...register('img')}
				/>
			</div>
			{mode === 'ADD' ? (
				<Button
					type="primary"
					color="delftBlue"
					text="ثبت"
				/>
			) : mode === 'EDIT' ? (
				<Button
					type="primary"
					color="jade"
					text="ویرایش"
				/>
			) : null}
		</form>
	);
};

export default AddTaskForm;
