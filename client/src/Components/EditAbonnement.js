import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import {Form} from "react-bootstrap"
import { etoneAbonnement, updateabonnement } from "../Redux/Actions/AbonnementActions"

const EditAbonnement=()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(etoneAbonnement(id))
    },[])

    const abonnement = useSelector(state=>state.AbonnementReducer.abonnement)

    const [namedepack,setNamedepack] = useState(abonnement.namedepack)
    const [prix,setPrix] = useState(abonnement.prix)
    const [date,setDate] = useState(abonnement.date)


    useEffect(()=>{
        setNamedepack(abonnement.namedepack)
        setPrix(abonnement.prix)
        setDate(abonnement.date)
    },[abonnement])

    const navigate = useNavigate()

    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateabonnement({namedepack,prix,date},id,navigate))
    }

    return(
        <div>
               <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>namedepack</Form.Label>
                <Form.Control value={namedepack} onChange={(e)=> setNamedepack(e.target.value)} type="text" placeholder="Enter name de pack " />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>prix</Form.Label>
                <Form.Control value={prix} onChange={(e)=> setPrix(e.target.value)} type="number" placeholder="Enter prix" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>date</Form.Label>
                <Form.Control value={date} onChange={(e)=> setDate(e.target.value)} type="number" placeholder="Enter date" />
            </Form.Group>

        <button onClick={(e)=>handleEdit(e)} variant="primary" type="submit" > Edit</button>

            </Form>

        </div>
    )
}

export default EditAbonnement 