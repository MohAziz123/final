
import './App.css';
import AuthNav from './Components/AuthNav';
import Home from './Components/Home';
import {Routes , Route} from 'react-router-dom'
import Login from './Components/Login';

import Profile from './Components/Profile';
import Register from './Components/Registre';
import PrivateRoute from './Components/PrivateRoute';
import ErrorComponent from './Components/ErrorComponent';

import ListUser from './Components/ListUser';
import EditUser from './Components/EditUser';
import ListAbonnement from './Components/ListAbonnement';
import EditAbonnement from './Components/EditAbonnement';
import EditProfile from './Components/EditProfile';
import ListCommande from './Components/ListCommande';
import EditCommande from './Components/EditCommande';
import ListMyCommandes from './Components/ListMyCommandes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from './Redux/Actions/AuthActions';

function App() {

  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])
  return (
   <div>
    <AuthNav></AuthNav>
    <ErrorComponent></ErrorComponent>
  

    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/registre' element={<Register></Register>}></Route>
      <Route path='/profile' element={<PrivateRoute> <Profile/></PrivateRoute>}></Route>
      <Route path='/ListUser' element={<ListUser></ListUser>} ></Route>
      <Route path='/edituser/:id' element={<EditUser></EditUser>} ></Route>
      <Route path='/editProfile/:id' element={<EditProfile/>} ></Route>
      <Route path='/Listabonnement' element={<ListAbonnement></ListAbonnement>} ></Route>
      <Route path='/editabonnement/:id'  element={<EditAbonnement></EditAbonnement>} ></Route>
      <Route  path='/listcommande' element={<ListCommande></ListCommande>} ></Route>
      <Route  path='/listmycommande' element={<ListMyCommandes/>} ></Route>
      <Route path='/editcommande/:id' element={<EditCommande></EditCommande>} ></Route>

    </Routes>
   </div>
  );
}

export default App;
