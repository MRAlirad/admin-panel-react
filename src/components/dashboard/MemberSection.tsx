import useFetchMember from '../../hooks/members/useFetchMembers';
import Button from '../Button';
import Loader from '../Loader';
import MemberItem from './MemberItem';

const MemberSection = () => {
	const { data: members, error, isLoading } = useFetchMember();
	return (
		<div className="members-section card col-[7/10] grid grid-rows-[max-content_1fr] gap-4 p-4">
			<div className="title-box flex items-center justify-between">
				<h3 className="text-base text-delftBlue font-bold">اعضای تیم</h3>
				<Button
					type="icon"
					text="add_circle"
					color="delftBlue"
					size="text-xl"
					className="bg-ghostWhite"
				/>
			</div>
			{isLoading ? (
				<Loader />
			) : error ? (
				<p className="text-red text-lg text-center font-bold">{error.message}</p>
			) : members?.length > 0 ? (
				<div className="members-container flex flex-col gap-3">
					{members?.map(member => (
						<MemberItem
							key={member.id}
							member={member}
						/>
					))}
				</div>
			) : (
				<p className="no-task-text text-lg text-center font-bold">اعضایی وجود ندارد</p>
			)}
		</div>
	);
};

export default MemberSection;
