import axios from 'axios'

const baseUrl = '/api/login'

const logIn = (user) => {
    console.log(user)
    return axios.post(baseUrl, user)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { logIn }