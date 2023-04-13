import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { login } from '../Redux/Actions/AuthActions';


const Login=()=>{
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(a)=>{
        a.preventDefault()
        dispatch(login({email,password},navigate))
    }
    return(
        <div className='Login'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='nav' style={{color:'white'}}>Email address</Form.Label>
                <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='nav' style={{color:'white'}}>Password</Form.Label>
                <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter passsword" />
                </Form.Group>

                <Button onClick={(e)=>handleLogin(e)}  variant="light" type="submit"> Submit</Button>
            </Form>
        </div>
    )
}
export default Login