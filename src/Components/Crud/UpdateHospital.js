import React, { Component } from 'react'
import axios from 'axios';
import Global from './../../Global';
import {NavLink, Redirect} from 'react-router-dom';

export default class UpdateHospital extends Component {
    cajaNumeroRef= React.createRef();
    cajaNombreRef = React.createRef();
    cajaDireccionRef = React.createRef();
    cajaTelefonoRef= React.createRef();
    cajaCamasRef= React.createRef();
    modificarHospital= (e) =>{
        e.preventDefault();
        var num= parseInt(this.cajaNumeroRef.current.value);
        var nom= this.cajaNombreRef.current.value;
        var dir= this.cajaDireccionRef.current.value;
        var tel= this.cajaTelefonoRef.current.value;
        var cam= this.cajaCamasRef.current.value;

        var hosp = {
            numero:num,nombre:nom,direccion:dir,telefono:tel,camas:cam
        };
        var request = "/webresources/hospitales/put";
        var url = Global.urlhospital + request;
        axios.put(url,hosp).then(res => {
            this.setState({status:true});
        });
        
    }
    state= {status:false}
    render() {
        if(this.state.satus == true){return <Redirect to="/"/>;}
        return (
            <div>
                <h1>Modificar hospitales</h1>
                    
                    <form onSubmit={this.modificarHospital} style={{width:"500px",margin:"0 auto"}}>
                        <label>Número:</label>
                        <input type="number" name="cajanumero" className="form-control" ref={this.cajaNumeroRef} defaultValue={this.props.idhospital} readOnly></input><br/>
                        <label>Nombre:</label>
                        <input type="text" name="cajanombre" className="form-control" ref={this.cajaNombreRef} defaultValue={this.props.nombre} readOnly></input><br/>
                        <label>Direccion:</label>
                        <input type="text" name="cajalocalidad" className="form-control" ref={this.cajaDireccionRef} defaultValue={this.props.direccion} readOnly></input><br/>
                        <label>Teléfono:</label>
                        <input type="text" name="cajatelefono" className="form-control" ref={this.cajaTelefonoRef} defaultValue={this.props.telefono} readOnly></input><br/>
                        <label>Camas:</label>
                        <input type="text" name="cajacamas" className="form-control" ref={this.cajaCamasRef} defaultValue={this.props.camas} readOnly></input><br/>
                        <button className="btn-info">Modificar</button>
                    </form>
                
            </div>
        )
    }
}
