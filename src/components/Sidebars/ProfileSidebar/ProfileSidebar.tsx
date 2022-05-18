import { useGlobalContext } from "../../../contexts/GlobalContext"
import "./ProfileSidebar.css"

const ProfileSidebar = () => {
    const { choosenFigure } = useGlobalContext()
    
    return(
        <article className="profile-sidebar">
           <div className="profile-condition">
               <img src={"http://localhost:3000/assets/bodybuilder.png"} alt="bodybuilder"/>
               {/* <img src={`http://localhost:3000/assets/${choosenFigure}.png`}/> */}
           </div>
        </article>
    )
}

export default ProfileSidebar