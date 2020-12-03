import * as axios from "axios";

// @ts-ignore
const instanse = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "fe58a20b-6990-4fee-a414-1ab0afb5a9c0"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
});


export const usersAPI = {
    getUsers(currentPage= 1, pageSize=10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: { data: any; }) => response.data)
    },
    follow(userId: number) {

        return instanse.post(`follow/${userId}`, {},)
    },
    unfollow(userId: number) {

        return instanse.delete(`follow/${userId}`, {},)
    },
    getAuth() {
        return instanse.get(`auth/me`)
    },
    getProfile( userId: number) {
        return instanse.get(`profile/` + userId)

        }
   }
