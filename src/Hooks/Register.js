import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

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
    const Swal = require('sweetalert2')
    const [usuario, setUsuario] = useState([]);
    const [values, setValues] = useState({
    Nombre: '',
    Apellido: '',
    Correo: '',
    Contrasena: '',
    imagen: ''
})
const {Nombre, Apellido, Correo, Contrasena, imagen} = values;

useEffect(() => {
   peticionGet();
},[Nombre])

const peticionGet = async () => {
   const res =  await fetch(url);
   const data = await res.json();
   console.log(data)
   setUsuario(data)
}
const peticionPost = async () => {
    if(Nombre !== '' && Apellido !== '' && Correo !== '' && Contrasena !== ''){
   await axios.post(url,values)
   .then(response => {
     console.log(response);
     Swal.fire({
        title: 'Registro!',
        text: 'Usuario registrado existosamente',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
     peticionGet();
    
   })
   .catch(error => {
      console.log(error.message)
   })
}else{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rellene todos los campos!...',
      })
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
        <FormLogo className="Form-Logo">
          <img src={Logo} alt="Logo" />
          <h3>Registro</h3>
        </FormLogo>
          <label>Nombres</label>
          <Input id="Nombre" name="Nombre" value={Nombre} onChange={handleChange}/>
          <br/><br/>
          <label>Apellidos</label>
          <Input id="Apellido" name="Apellido" value={Apellido} onChange={handleChange}/>
          <br/><br/>
          <label>Email</label>
          <Input id="Correo" name="Correo" value={Correo} onChange={handleChange}/>
          <br/><br/>
          <label>Contraseña</label>
          <Input id="Contrasena" name="Contrasena" value={Contrasena} onChange={handleChange}/>
          
          <br/><br/>
          <BtnE className="btnE"
          onClick={(e) => {e.preventDefault(); peticionPost()}}>Registrar</BtnE>

            <LinkCustom>
           <Link to="/" className="Link">
            <br/><br/>
            ¿Ya tienes una cuenta?
          </Link>
          </LinkCustom>
        </Form>
    </AppBox>
  );
}

export default App