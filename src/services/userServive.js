import axios from "../axios"
const handleLogin = (email, password) => {

    return axios.post('/api/login', { email, password })
}
const getAllUsers = (inputid) => {
    return axios.get(`/api/get-all-users?id=${inputid}`)
}
const createNewUser = (data) => {
    console.log('data cua toi = ', data)
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (id) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: id
        }
    })
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData)
}
export { handleLogin, getAllUsers, createNewUser, deleteUserService, editUserService }