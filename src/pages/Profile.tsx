import ProfileInfo from '../components/profile/ProfileInfo'
import Space from '../components/profile/Space';
const Profile = () => {
	return(
		<div className="profile-page">
			<div className="profile-space-upload-segment grid grid-cols-[38%_24%_34%] gap-[2%] w-full">
				<ProfileInfo />
				<Space />
			</div>
		</div>
	);
};

export default Profile;
