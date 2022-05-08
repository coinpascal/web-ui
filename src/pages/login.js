import AuthPageLayout from '../components/layouts/authPage'
import LoginForm from '../components/loginform';
export default function LoginPage() {
    return (
        <>
        <AuthPageLayout >
            <LoginForm></LoginForm>
        </AuthPageLayout>
        </>
    )
}