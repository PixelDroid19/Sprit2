import { useEffect, useState } from 'react';
import {Link, Redirect} from "react-router-dom";


import { useHistory } from "react-router-dom";

import {
  Form, 
  AppBox, 
  Input, 
  FormLogo,
  BtnE,
  LinkCustom} from '../Styles/StyleLogin'

import Logo from '../assets/logo-blockBuster.png'
const url = "https://heroku-mini-backet.herokuapp.com/data";


function App() {
    let history = useHistory();

    const [usuario, setUsuario] = useState([]);

    const [values, setValues] = useState({
    Correo: '',
    Contrasena: ''
})

const {Correo, Contrasena} = values;

useEffect(() => {
  peticionGet()
},[Correo])


const peticionGet = async () => {
   const res =  await fetch(url);
   const data = await res.json();
   setUsuario(data)
}

const findUsers = (e) =>{
    const user =  e.find((a) => a.Correo === Correo)

   if(user.Correo === Correo && user.Contrasena === Contrasena){
    console.log('Usuario correcto');
    history.push("/Home")

   }else if(user.Correo === Correo && Contrasena !== user.Contrasena){
      console.log('Constraseña incorrecta') 
   }else if(user === undefined){
    console.log('error') 
}
   
}

const handleChange = ({target}) => {
      setValues({
        ...values,
        [target.name]: target.value
      })
      console.log(values);
}

  return (
    <AppBox>
        
        <Form>
        <FormLogo>
          <img src={Logo} alt="Logo" />
          <h3>inicial sesión</h3>
        </FormLogo>
          <label>Email</label>
          <Input id="Correo" name="Correo" value={Correo} onChange={handleChange}/>
          <br/><br/>
          <label>Contraseña</label>
          <Input id="Contrasena" name="Contrasena" value={Contrasena} onChange={handleChange}/>
          
          <br/><br/>
          <BtnE onClick={(e) => {e.preventDefault(); findUsers(usuario)}}> Entrar</BtnE>
          <br/><br/>
          <LinkCustom>
            <Link to="/Register" className="Link"> Crear cuenta!</Link>
            <Link to="/CRUD" className="Link"> Editar cuenta</Link>
          </LinkCustom>
        </Form>
    </AppBox>
  );
}

export default App