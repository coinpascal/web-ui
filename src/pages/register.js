import AuthPageLayout from '../components/layouts/authPage'
import CreateAccountForm from '../components/createaccountform'
export default function RegisterPage() {
    return(
        <>
        <AuthPageLayout>
        <CreateAccountForm></CreateAccountForm>
        </AuthPageLayout>
        </>
    )
}