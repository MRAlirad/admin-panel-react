import { useState } from 'react';
import useFetchMember from '../../hooks/members/useFetchMembers';
import Button from '../Button';
import Loader from '../Loader';
import AddEditMemberForm from './AddEditMemberForm';
import MemberItem from './MemberItem';
import useAddMember from '../../hooks/members/useAddMember';
import useDeleteMember from '../../hooks/members/useDeleteMember';

const MemberSection = () => {
	const { data: members, error, isLoading } = useFetchMember();
	const [formDisplay, setFormDisplay] = useState('hide');

	const addMember = useAddMember({});
	const deleteMember = useDeleteMember({});
	return (
		<div className="members-section relative overflow-hidden card col-[7/10] grid grid-rows-[max-content_1fr] gap-4 p-4">
			<div className="title-box flex items-center justify-between">
				<h3 className="text-base text-delftBlue font-bold">اعضای تیم</h3>
				<Button
					type="icon"
					text="add_circle"
					color="delftBlue"
					size="text-xl"
					className="bg-ghostWhite"
					onClick={() => setFormDisplay('show')}
				/>
			</div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<p className="text-red text-lg text-center font-bold">{error.message}</p>
			) : members?.length > 0 ? (
				<div className="members-container flex flex-col gap-3 max-h-[250px] overflow-y-auto">
					{members?.map(member => (
						<MemberItem
							key={member.id}
							member={member}
							onDelete={data => {
								deleteMember.mutate(data);
							}}
						/>
					))}
				</div>
			) : (
				<p className="no-task-text text-lg text-center font-bold">اعضایی وجود ندارد</p>
			)}
			{formDisplay === 'show' && (
				<AddEditMemberForm
					onClose={() => setFormDisplay('hide')}
					onAddMember={data => {
						addMember.mutate(data);
						setFormDisplay('hide');
					}}
				/>
			)}
		</div>
	);
};

export default MemberSection;
