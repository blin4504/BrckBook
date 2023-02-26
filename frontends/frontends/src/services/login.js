import axios from 'axios'

const baseUrl = '/api/login'

const logIn = async (user) => {
    return await axios.post(baseUrl, user)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { logIn }