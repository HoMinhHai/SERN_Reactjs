import actionTypes from "./actionTypes";
import { toast } from "react-toastify"
import {
    getAllCodeService, createNewUserService, getAllUsers, deleteUserService, editUserService
    , getTopDoctorHomeService,
    getAllDoctors, saveDetailDoctorService
} from "../../services/userServive";
import { act } from "react";
// export const fetchGenderStart = () => {
//     type: actionTypes.FETCH_GENDER_START
// }
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER")
            if (res && res.errCode === 0)
                dispatch(fetchGenderSuccess(res.data))
            else
                dispatch(fetchGenderFailed())
        }
        catch (e) {
            dispatch(fetchGenderFailed())
        }
    }

}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})


export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("POSITION")
            if (res && res.errCode === 0)
                dispatch(fetchPositionSuccess(res.data))
            else
                dispatch(fetchPositionFailed())
        }
        catch (e) {
            dispatch(fetchPositionFailed())
        }
    }

}

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("ROLE")
            if (res && res.errCode === 0)
                dispatch(fetchRoleSuccess(res.data))
            else
                dispatch(fetchRoleFailed())
        }
        catch (e) {
            dispatch(fetchRoleFailed())
        }
    }

}
export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Create an user succeed")
                dispatch(saveUserSuccess(res.data))
                dispatch(fetchAllUsersStart())
            }

            else
                dispatch(saveUserFailed())
        }
        catch (e) {
            dispatch(saveUserFailed())
        }
    }
}
export const saveUserSuccess = () => ({
    type: 'CREATE_USER_SUCCESS'
})

export const saveUserFailed = () => ({
    type: 'CREATE_USER_FAILED'
})


export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()))
            }

            else
                dispatch(fetchAllUsersFailed())
        }
        catch (e) {
            dispatch(fetchAllUsersFailed())
        }
    }

}
export const fetchAllUsersSuccess = (data) => ({
    type: 'FETCH_ALL_USERS_SUCCESS',
    users: data
})
export const fetchAllUsersFailed = (data) => ({
    type: 'FETCH_ALL_USERS_FAILED',
})


export const deleteAUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                toast.success("Delete the user succeed")
                dispatch(deleteUserSuccess(res.data))
                dispatch(fetchAllUsersStart())
            }

            else {
                toast.success("Error")
                dispatch(deleteUserFailed())
            }

        }
        catch (e) {
            dispatch(saveUserFailed())
        }
    }
}
export const deleteUserSuccess = () => ({
    type: 'DELETE_USER_SUCCESS'
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})


export const EditAUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            if (res && res.errCode === 0) {
                toast.success("Update the user succeed")
                dispatch(EditUserSuccess(res.data))
                dispatch(fetchAllUsersStart())
            }

            else {
                toast.success("Error")
                dispatch(EditUserFailed())
            }

        }
        catch (e) {
            dispatch(EditUserFailed())
        }
    }
}
export const EditUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const EditUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDoctorHomeService('')
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
                })
            }
        }
        catch (e) {
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED,
            })
        }
    }
}

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors()
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
                })
            }
        }
        catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED,
            })
        }
    }
}

export const saveDetailDoctor = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data)
            if (res && res.errCode === 0) {
                toast.success("Save info successfully")
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,

                })
            }
            else {
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
                })
            }
        }
        catch (e) {
            toast.success("An error has occured")
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED,
            })
        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME")
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            }
            else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
                })
            }
        }
        catch (e) {
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED,
            })
        }
    }
}