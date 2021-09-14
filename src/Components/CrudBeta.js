import React, { Component } from 'react';

import {TableCustom} from '../Styles/Style-CRUD'
import axios from "axios";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Iconos de fontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
//reactstrap
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
//Url de la Api
const url="https://heroku-mini-backet.herokuapp.com/data/";

class App extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
    id: '',
    Nombre: '',
    Apellido: '',
    Correo: '',
    Contrasena: '',
    tipoModal: ''
  }
}

peticionGet=()=>{
axios.get(url).then(response=>{
  //Enviar repuesta del API al estado
  this.setState({data: response.data});
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
  delete this.state.form.id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarUsuario=(Usuario)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
      id: Usuario.id,
      Nombre: Usuario.Nombre,
      Apellido: Usuario.Apellido,
      Correo: Usuario.Correo,
      Contrasena: Usuario.Contrasena
    }
  })
}

handleChange=async e=>{
e.persist();
await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <br /><br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Usuario</button>
  <button className="btn btn-danger m-2" onClick={()=>{window.location.assign('/')}}>Login</button>
  <br /><br />
    <TableCustom className="table ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(Usuario=>{
          return(
            <tr>
          <td>{Usuario.id}</td>
          <td>{Usuario.Nombre}</td>
          <td>{Usuario.Apellido}</td>
          <td>{Usuario.Correo}</td>
          <td>{Usuario.Contrasena}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarUsuario(Usuario); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarUsuario(Usuario); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
          </tr>
          )
        })}
      </tbody>
    </TableCustom>



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                    <br />
                    <label htmlFor="Nombre">Nombre</label>
                    <input className="form-control" type="text" name="Nombre" id="Nombre" onChange={this.handleChange} value={form?form.Nombre: ''}/>
                    <br />
                    <label htmlFor="Nombre">Apellido</label>
                    <input className="form-control" type="text" name="Apellido" id="Apellido" onChange={this.handleChange} value={form?form.Apellido: ''}/>
                    <br />
                    <label htmlFor="Correo">Correo</label>
                    <input className="form-control" type="text" name="Correo" id="Correo" onChange={this.handleChange} value={form?form.Correo:''}/>
                    <br />
                    <label htmlFor="Contrasena">Contraseña</label>
                    <input className="form-control" type="text" name="Contrasena" id="Contrasena" onChange={this.handleChange} value={form?form.Contrasena:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal==='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar el usuario {form && form.Nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default App;
