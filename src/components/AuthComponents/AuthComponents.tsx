import { useGlobalContext } from "../../contexts/GlobalContext"
import { useLocation, Navigate} from "react-router"

const RequireAuth = ({ children }: { children: JSX.Element }): JSX.Element => {
    let { currentUser } = useGlobalContext()
    let location = useLocation()
    console.log(location);
    
    if(!currentUser){
        return <Navigate to="/" state={{ from: location }} replace />
    }
    return children
}

export default RequireAuth