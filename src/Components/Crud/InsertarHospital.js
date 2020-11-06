import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global';
import {Redirect} from 'react-router-dom';

export default class InsertarHospital extends Component {
    cajaNumeroRef= React.createRef();
    cajaNombreRef = React.createRef();
    cajaDireccionRef = React.createRef();
    cajaTelefonoRef= React.createRef();
    cajaCamasRef= React.createRef();
    state = {
        mensaje:"",status:false
    }
    nuevoHospital = (e) => {
        e.preventDefault();
        var num= parseInt(this.cajaNumeroRef.current.value);
        var nom= this.cajaNombreRef.current.value;
        var dir= this.cajaDireccionRef.current.value;
        var tel= this.cajaTelefonoRef.current.value;
        var cam= this.cajaCamasRef.current.value;
        var hosp = {
            numero:num,nombre:nom,direccion:dir,telefono:tel,camas:cam
        };
        var request = "/webresources/hospitales/post";
        var url = Global.urlhospital + request;
        axios.post(url,hosp).then(res => {
            this.setState({
                mensaje:"Nuevo Hospital" + num,
                status:true
            });
        });
    }
    render() {
        if(this.state.status==true){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1>Nuevo Hospital</h1>
                <form onSubmit={this.nuevoHospital}>
                    <label>Número</label>
                    <input type="number" name="cajanumero" className="form_control" ref={this.state.cajaNumeroRef}/><br/>
                    <label>Nombre</label>
                    <input type="text" name="cajanombre" className="form_control" ref={this.state.cajaNombreRef}/><br/>
                    <label>Dirección</label>
                    <input type="text" name="cajadireccion" className="form_control" ref={this.state.cajaDireccionRef}/><br/>
                    <label>Teléfono</label>
                    <input type="number" name="cajatelefono" className="form_control" ref={this.state.cajaTelefonoRef}/><br/>
                    <label>Camas</label>
                    <input type="number" name="cajacamas" className="form_control" ref={this.state.cajaCamasRef}/><br/>
                    <button className="btn-success">Insertar Hospital</button>
                </form>
                <h3 style={{color:"red"}}>{this.state.mensaje}</h3>
            </div>
        )
    }
}
