import AuthPageLayout from '../components/layouts/authPage'
import LoginForm from '../components/loginform';
import { useAuth } from '../libs/auth';
import Router from 'next/router';
export default function LoginPage() {
    return (
        <>
        <AuthPageLayout >
            <LoginForm></LoginForm>
        </AuthPageLayout>
        </>
    )
}