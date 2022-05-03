import { useAuth } from "../libs/auth";
function DashboardPage() {
    const { user } = useAuth({ middleware: 'auth' })

    return(
        <>Dashboard Index</>
    )
}

export default DashboardPage