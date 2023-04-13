import axios from "axios"
import { GETABONNEMENTS, GETONEABONNEMENT} from "../ActionsTypes/AbonnementTypes"

export const getabonnements=()=>async(dispatch)=>{
    try {
        const res = await axios.get("/api/abonnement/getAll")
        dispatch(
            {
                type : GETABONNEMENTS,
                payload : res.data.abonnements
            }
        )
    } catch (error) {
        console.log(error)
    }
}

export const addabonnement=(newUser,navigate)=>async(dispatch)=>{
    try {
        await axios.post("api/abonnement/add",newUser)
        dispatch(getabonnements())
        navigate('/listabonnement')
    } catch (error) {
        console.log(error)
    }
}

export const etoneAbonnement=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/abonnement/getone/${id}`)  
       dispatch(
        {
            type : GETONEABONNEMENT,
            payload : res.data.abonnement
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const updateabonnement=(edUser,id,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/abonnement/updateAbon/${id}`,edUser)
        dispatch(getabonnements())
        navigate('/Listabonnement')
    } catch (error) {
        console.log(error)
    }

}

export const deleteAbonnemet=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/abonnement/delete/${id}`)
        dispatch(getabonnements())
    } catch (error) {
        console.log(error)
    }
}