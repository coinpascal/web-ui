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
            .then()
            .catch(error => {
                if(middleware === 'auth'){
                    router.push('/login')
                }
            })
    )

    const logout = () => {
        axios
        .get('/auth/logout',{headers:{'x-auth-token': localStorage.getItem("token")}})
        .then(res => {
            if (res.data.loggedout === true){
                localStorage.removeItem("token")
                router.push('/login')
            }
        })
        .catch(error => {

        })
    }

    useEffect(() => {
        if (middleware === 'guest' && redirectIfAuthenticated && user) router.push(redirectIfAuthenticated)
    }, [user, error])

    return {
        user,
        logout
    }
}
