import ProfileInfo from '../components/profile/ProfileInfo'
import Space from '../components/profile/Space';
import Upload from '../components/profile/Upload';
const Profile = () => {
	return(
		<div className="profile-page">
			<div className="profile-space-upload-segment grid grid-cols-[33%_24%_41%] gap-[1%] w-full">
				<ProfileInfo />
				<Space />
				<Upload />
			</div>
		</div>
	);
};

export default Profile;
