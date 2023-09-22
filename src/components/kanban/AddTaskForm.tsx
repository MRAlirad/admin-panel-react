const AddTaskForm = () => {
	return (
		<div className="add-task-form flex flex-col items-center justify-center gap-3.5 min-w-[500px]">
			<div className="title-form-control grid gap-1.5 w-full ">
				<label >عنوان</label>
				<input
					type="text"
					name="title"
					className="border !border-solid border-[#E0E5F2] rounded-xl py-3 px-4 focus:border-delftBlue"
				/>
			</div>
			<div className="title-form-control grid gap-1.5 w-full">
				<label>توضیحات</label>
				<textarea
					name="description"
					className="border !border-solid border-[#E0E5F2] rounded-xl outline-none py-3 px-4 focus:border-delftBlue"
					rows={5}
				></textarea>
			</div>
			<button className="submit-btn">ثبت</button>
		</div>
	);
};

export default AddTaskForm;
