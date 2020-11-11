import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const create = (newObject ) => {
    return axios.post(baseUrl, newObject)
}

const getAll = () => {
    return axios.get(baseUrl)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteRes = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {create, getAll, update, deleteRes}