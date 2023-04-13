import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getoneCommande, updatecommande } from "../Redux/Actions/CommandeActions"

const EditCommande=()=>{

    const {id} = useParams
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getoneCommande())
    },[])
    
    const commande = useSelector(state=>state.CommandeReducer.commande)
    const [status,setStatus] = useState(commande.status)


    useEffect(()=>{
        setStatus(commande.status)
       
    },[])

    const navigate = useNavigate()


    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updatecommande({status},id,navigate))
    }
    return(
        <div>
              <button onClick={(e)=>handleEdit(e)} variant="primary" type="submit" > Edit</button>

        </div>
    )
}

export default EditCommande