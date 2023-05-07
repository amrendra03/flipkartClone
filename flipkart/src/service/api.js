import axios from 'axios'
const url = 'http://localhost:8000'

export const authenticateSignup = async (data) => {

    try {
        return await axios.post(`${url}/signup`, data)
    } catch (error) {
        console.log('Error while calling singup api', error)
    }
}

export const authenticateLogin = async (user) => {

    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login api', error)
        return error.response;
    }
}

export const payUsingPaytm = async (data) => {
    try {

        let respone = await axios.post(`${URL}/payment`, data)
        return respone.data;
    } catch (error) {
        console.log('Error while calling payment', error)
    }
}



