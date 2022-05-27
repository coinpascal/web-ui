import { useSession, signOut} from 'next-auth/react';
import useAuth from '../hooks/useAuth'
function DashboardPage() {
    const { data: session } = useSession()
    const isAuthenticated = useAuth(true);
    if(isAuthenticated){
        console.log(session);
    }
    return(
        <>Dashboard Index {session.user.name} <button onClick={()=>{signOut()}}>Signout</button></>
    )
}

export default DashboardPage