import useAuth from "../libs/auth"
function AccountPage() {
    const { user } = useAuth({ middleware: 'auth' })

    return(
        <>Dashboard Index</>
    )
}

export default AccountPage