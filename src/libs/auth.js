import useSWR from 'swr'
import axios from '../libs/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export const useAuth = ({ middleware, redirectIfAuthenticated } = {}) => {
    const router = useRouter()

    const { data: user, error, revalidate } = useSWR('/user/me', () =>
        axios
            .get('/user/me',{headers:{'x-auth-token': localStorage.getItem("token")}})
            .then(res => res.data)
            .catch(error => {})
    )

    const logout = async () => {
        axios
        .get('/auth/logout',{headers:{'x-auth-token': localStorage.getItem("token")}})
        .then(res => {
            if (res.data.loggedout === true){
                localStorage.removeItem("token")
                router.push('/')
            }
        })
        .catch(error => {

        })
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
        if (middleware === 'auth' && error) logout()
    }, [user, error])

    return {
        user,
        logout
    }
}
