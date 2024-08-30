import Profile from '/images/profile.jpg'

const ProfileImage = () => {
    return (
        <div className="profile-image">
            <img src={Profile} alt="Profile" />
        </div>
    )
}

export default ProfileImage