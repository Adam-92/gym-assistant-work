import './ProfileSidebar.css'
import picture from '../../img/profile.jpg'
const ProfileSidebar = () => { 
    /* To Do:
        - Icon (Maybe Pick your own icon from the offered kit?)
        - Add achievements
        - Add your current level and system to it
            https://dribbble.com/shots/8515264-Workout-Statistics-Profile
    */
    return(
        <div className="container-profile-sidebar">
            <header>
                <h1>Good Morning,</h1>
            </header>
            <div className="img-profile-sidebar">
                <img src={picture} alt="profile-picture" />
            </div>
        </div>
    )
}
export default ProfileSidebar