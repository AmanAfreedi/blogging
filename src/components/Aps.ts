import axios from "axios"

export const signUp = (name : string, email: string, password: string) => {
    return axios.post('https://yourdomain.com/api/v1/api/health', {
        name,
        email,
        password
    })

};