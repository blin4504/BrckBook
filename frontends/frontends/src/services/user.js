import axios from 'axios'

const baseUrl = '/api/user'

const createUser = (user) => {
    console.log(user)
    return axios.post(baseUrl, user)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    createUser
}