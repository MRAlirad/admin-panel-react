import { FieldValues, useForm } from 'react-hook-form';
import Button from '../Button';
import Member from '../../entities/Member';

interface Props {
	onClose: () => void;
	onAddMember: (data: Member) => void;
	onEditMember: (data: Member) => void;
	currentMember: Member;
	mode?: 'ADD' | 'EDIT';
	isAdding?: boolean;
	isEditing?: boolean;
}

const AddEditMemberForm = ({
	onClose,
	onAddMember,
	onEditMember,
	currentMember,
	mode = 'ADD',
	isAdding = false,
	isEditing = false,
}: Props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Member>();

	const onSubmit = (data: FieldValues) => {
		const member = {
			id: currentMember.id,
			name: data.name,
			role: data.role,
			img: data.img,
		};

		if (mode === 'ADD') onAddMember(member);
		else onEditMember(member);
	};
	return (
		<form
			className="form-section absolute w-full h-full top-0 right-0"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div
				className="dimmer absolute w-full h-full top-0 right-0 overflow-hidden bg-[#000b]"
				onClick={onClose}
			></div>
			<div className="absolute w-full h-max bottom-0 right-0 grid gap-2 bg-white rounded-lg p-4">
				<div className="name-form-control grid gap-1 w-full ">
					<label className="text-sm text-delftBlue">نام و نام خانوادگی</label>
					<input
						defaultValue={currentMember.name ?? ''}
						type="text"
						placeholder="نام را وارد کنید"
						className={`border !border-solid  p-1 text-sm rounded-md focus:border-delftBlue ${
							errors.name ? 'border-red' : 'border-[#E0E5F2]'
						}`}
						{...register('name', { required: true })}
					/>
				</div>
				<div className="role-form-control grid gap-1 w-full ">
					<label className="text-sm text-delftBlue">سمت</label>
					<input
						defaultValue={currentMember.role ?? ''}
						type="text"
						placeholder="سمت را وارد کنید"
						className={`border !border-solid  p-1 text-sm rounded-md focus:border-delftBlue ${
							errors.role ? 'border-red' : 'border-[#E0E5F2]'
						}`}
						{...register('role', { required: true })}
					/>
				</div>
				<div className="img-form-control grid gap-1 w-full ">
					<label className="text-sm text-delftBlue">آدرس عکس</label>
					<input
						defaultValue={currentMember.img ?? ''}
						type="text"
						placeholder="آدرس عکس را وارد کنید"
						className={
							'border !border-solid p-1 text-sm border-[#E0E5F2] rounded-md focus:border-delftBlue'
						}
						{...register('img')}
					/>
				</div>
				{mode === 'ADD' ? (
					<Button
						type="primary"
						color="delftBlue"
						text="افزودن"
						loading={isAdding}
						className="mx-auto"
					/>
				) : mode === 'EDIT' ? (
					<Button
						type="primary"
						color="jade"
						text="ویرایش"
						loading={isEditing}
						className="mx-auto"
					/>
				) : null}
			</div>
		</form>
	);
};

export default AddEditMemberForm;
