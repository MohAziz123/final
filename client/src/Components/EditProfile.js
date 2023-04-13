import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getOneuser, updateProfile, updateusers } from "../Redux/Actions/AuthActions"
import { Button , Form } from "react-bootstrap"
const EditProfile=()=>{
    const {id} = useParams()

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneuser(id))
    },[])

    const user = useSelector(state=>state.AuthReducers.oneUser)
    
    const [name,setName] = useState(user.name)
    const [prenon,setPrenon] = useState(user.prenon)
    const [phone,setPhone] = useState(user.phone)
    const [cp,setCp] = useState(user.cp)
    const [pic,setPic] = useState(user.pic)

    useEffect(()=>{
        setName(user.name)
        setPrenon(user.prenon)
        setPhone(user.phone)
        setCp(user.cp)
        setPic(user.pic)
 
    },[user])

    const navigate = useNavigate()
    const handleEdit=(a)=>{
        a.preventDefault()
        dispatch(updateProfile({name,prenon,phone,cp,pic},id,navigate))
    }
    return(
        <div className="edit">
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'white'}}>name</Form.Label>
        <Form.Control value={name} type="string"  onChange={(e)=> setName(e.target.value)} placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{color:'white'}}>prenon</Form.Label>
        <Form.Control value={prenon} type="string"  onChange={(e)=> setPrenon(e.target.value)} placeholder="Enter prenon" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'white'}}>phone</Form.Label>
        <Form.Control value={phone} type="Number"  onChange={(e)=> setPhone(e.target.value)} placeholder="enter your phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'white'}}>cp</Form.Label>
        <Form.Control value={cp} type="number"  onChange={(e)=> setCp(e.target.value)} placeholder="enter your phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{color:'white'}}>Picture</Form.Label>
        <Form.Control value={pic}   onChange={(e)=> setPic(e.target.value)} placeholder="enter your picture" />
      </Form.Group>
      
      <Button  onClick={(e)=>handleEdit(e)} variant="primary" type="submit">Submit</Button>
    </Form>

        </div>
    )
}

export default EditProfile