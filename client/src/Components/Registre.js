import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { register } from "../Redux/Actions/AuthActions"

const Register=()=>{

    const [name,setName] = useState('')
    const [prenon,setPrenon] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')
    const [phone,setPhone] = useState('')
    const [cp,setCp] = useState('')



    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAdd=(a)=>{
        a.preventDefault()
        dispatch(register({name,prenon,phone,cp,password,email,pic : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",role :"client"},navigate))
    }


    return(
        <div className="Registre">
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="res">Last name</Form.Label>
                <Form.Control className="Registeraze" onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="res">First name</Form.Label>
                <Form.Control onChange={(e)=>setPrenon(e.target.value)} type="text" placeholder="Enter name" />  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="res">Phone</Form.Label>
                <Form.Control onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Enter your phone" />  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="res">ZIP code</Form.Label>
                <Form.Control onChange={(e)=>setCp(e.target.value)} type="text" placeholder="Enter your cp " />  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="res">Email address</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />  
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="res">Password</Form.Label>
                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />  
            </Form.Group>

            <Button onClick={(e)=>handleAdd(e)} variant="light" type="submit">Submit</Button>
        </Form>
        </div>
    )
}

export default Register