import Button from '../Button';
import Member from '../../entities/Member';

interface Props {
	member: Member;
}

const MemberItem = ({ member }: Props) => {
	return (
		<div className="member-item card grid grid-cols-[max-content_1fr_max-content] items-center gap-2 rounded-xl py-2.5 pl-1 pr-3">
			<div className="img-box w-10 h-10 rounded-full">
				<img
					src={member.img ? member.img : '/src/assets/pics/User.png'}
					alt={member.name}
				/>
			</div>
			<div className="desc-box flex flex-col">
				<h4 className="name text-delftBlue text-sm font-bold line-clamp-1">{member.name}</h4>
				<span className="role text-powderBlue text-xs line-clamp-1">{member.role}</span>
			</div>
			<div className="actions-box">
				<Button
					type="icon"
					text="edit"
					color="delftBlue"
				/>
				<Button
					type="icon"
					text="delete"
					color="red"
				/>
			</div>
		</div>
	);
};

export default MemberItem;
