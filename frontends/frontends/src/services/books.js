import axios from "axios";

const baseUrl = '/api/books'

const getAll = () => {
    return axios.get(baseUrl)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll}