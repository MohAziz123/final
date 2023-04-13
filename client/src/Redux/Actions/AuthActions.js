import { CURRENT, FAIL, LOGIN, LOGOUT, REGISTER } from "../ActionsTypes/AuthActions"
import axois from 'axios'
import axios from "axios"
import { handleError } from "./ErrorActions"
import {GETONEUSER, GETUSER} from "../ActionsTypes/UserTypes"

export const register=(signUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axois.post('/api/users/signup/',signUser)
        dispatch(
            {
                type : REGISTER,
                payload : res.data
            }
        )
        navigate('/profile')
    } catch (error) {
   
        error.response.data.errors.forEach(el => {
            dispatch(handleError(el.msg))
            
        });
    }
}

export const login=(logUser,navigate)=>async(disptach)=>{
    try {
        const res = await axois.post("/api/users/signin",logUser)
        disptach(
            {
                type : LOGIN,
                payload :res.data
            }
        )
        navigate('/profile')
    } catch (error) {
     
        error.response.data.errors.forEach(el => {
            disptach(handleError(el.msg))
            
        });
    }
}

export const current=()=>async(dispatch)=>{
    const config = {
        headers :{
            Authorzied : localStorage.getItem("token")
        }
    }
    try {
        const res = await axios.get("/api/users/currentUser",config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type : FAIL,
                payload : error.response.data
            }
        )
        
    }
}

export const logout=()=>{
    return(
        {
            type : LOGOUT
        }
    )
}


export const getusers=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/users/readUsers")
        dispatch(
            {
              type : GETUSER,
              payload : res.data.users
            }
        ) 
    } catch (error) {
        console.log(error)
    }
} 

// export const adduser=(newUser,navigate)=>async(dispatch)=>{
//     try {
//         await axios.post("/api/users/addusers",newUser)
//         dispatch(getusers())
//         navigate('/listUser')
//     } catch (error) {
//         console.log(error)
//     }
// }

export const getOneuser=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/users/redUser/${id}`)

        dispatch(
            {
                type : GETONEUSER,
                payload : res.data.oneUser
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const updateusers=(edUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/users/updateusers/${id}`,edUser)
        dispatch(getusers())
        navigate('/ListUser')
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile=(edUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/users/updateusers/${id}`,edUser)
        dispatch(current())
        navigate('/profile')
    } catch (error) {
        console.log(error)
    }
}

export const deleteusers=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/users/deleteusers/${id}`)
        dispatch(getusers())
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfile=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/users/deleteusers/${id}`)
        dispatch(logout())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}