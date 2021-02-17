import * as axios from "axios";

// @ts-ignore
const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "fe58a20b-6990-4fee-a414-1ab0afb5a9c0"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


export const usersAPI = {
    getUsers(currentPage= 1, pageSize=10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: { data: any; }) => response.data)
    },
    follow(userId: number) {

        return instance.post(`follow/${userId}`, {},)
    },
    unfollow(userId: number) {

        return instance.delete(`follow/${userId}`, {})
    },
    getAuth() {
        return instance.get(`auth/me`)
    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)

    }
}

export const profileAPI = {

    getProfile( userId: number) {
        return instance.get(`profile/` + userId)

    },

    getStatus( userId: number) {
        return instance.get(`profile/status/`  + userId)
    },
    updateStatus(status: string | number) {
        return instance.put(`profile/status/`, {status} )
    }
}

export const authAPI = {
    login(email: string , password:string , rememberMe:boolean) {
        return instance.post(`/auth/login`, {email, password, rememberMe} )
    },
    logout() {
        return instance.delete(`/auth/login`)
    }
}
