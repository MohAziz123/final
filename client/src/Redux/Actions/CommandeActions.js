import axios from "axios"
import { GETCOMMANDES, GETMYCOMMANDES, GETONECOMMANDE } from "../ActionsTypes/CommandeTypes"


export const getcommande=()=>async(dispatch)=>{
    try {
        const res = await axios.get('/api/commande/getAllCommandes')
        dispatch(
           {
            type : GETCOMMANDES,
            payload : res.data.commandes
           }
        )
    } catch (error) {
        console.log(error)
    }
}

export const getMyCommande=(id)=>async(dispatch)=>{
    const config = {
        headers :{
            Authorzied : localStorage.getItem("token")
        }
    }
    try {
       const res = await axios.get(`/api/commande/getMyCommande`,config)  
       dispatch(
        {
            type : GETMYCOMMANDES,
            payload : res.data.commandes
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const addcommande=(newUser,navigate)=>async(dispatch)=>{
    const config = {
        headers :{
            Authorzied : localStorage.getItem("token")
        }
    }
    try {
        await axios.post("/api/commande/addCommande",newUser,config)
        dispatch(getMyCommande())
        navigate('/listmycommande')
    } catch (error) {
        console.log(error)
    }

}

export const getoneCommande=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/commande/getOneCommande/${id}`)  
       dispatch(
        {
            type : GETONECOMMANDE,
            payload : res.data.commande
        }
       )
    } catch (error) {
        console.log(error)
    }
}




export const updatecommande=(stat,id)=>async(dispatch)=>{
    try {
        await axios.put(`/api/commande/updatecommande/${id}`,stat)
        dispatch(getcommande())
  
    } catch (error) {
        console.log(error)
    }

}

export const deletecommande=(id,role)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/commande/deletecommande/${id}`)
        if(role == "admin"){
            dispatch(getcommande())
        }else{
            dispatch(getMyCommande())
        }
        
    } catch (error) {
        console.log(error)
    }
}

