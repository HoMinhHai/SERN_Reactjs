import axios from "../axios"
const handleLogin = (email, password) => {

    return axios.post('/api/login', { email, password })
}
const getAllUsers = (inputid) => {
    return axios.get(`/api/get-all-users?id=${inputid}`)
}
const createNewUserService = (data) => {
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
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailDoctorService = (data) => {
    return axios.post("/api/save-info-doctors", data)
}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post(`/api/bulk-create-schedule`, data)
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}

export {
    handleLogin, getAllUsers, createNewUserService, deleteUserService, editUserService, getAllCodeService, getTopDoctorHomeService, getAllDoctors, saveDetailDoctorService
    , getDetailInforDoctor, saveBulkScheduleDoctor, getScheduleDoctorByDate
}