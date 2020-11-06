import Axios from 'axios';
import React, { Component } from 'react'
import Global from './../../Global';
import {NavLink} from 'react-router-dom';

export default class DetallesHospital extends Component {
    constructor(props){
        super(props);
        this.setState({
            idhospital: props.idhospital
        });

    }
    state= {
        hospital: {},
        status: false,
        idhospital:0
    }
    buscarHospital = () => {
        var request= "/webresources/hospitales/" + this.state.idhospital;
        var url = Global.urlhospital + request;
        Axios.get(url).then(res => {
            this.setState({
                hospital: res.data,status:true
            });
        });
    }
    componentDidMount = () => {
        this.buscarHospital();
    }
    render() {
        return (
            <div>
                <h1>Detalles Hospital</h1>
                {this.state.status == true && (
                    <React.Fragment>
                        <NavLink to="/">Volver al listado</NavLink>
                <h1>Numero: {this.state.hospital.idhospital}</h1>
                <h1>Nombre:{this.state.hospital.nombre} </h1>
                <h1>Direccion:{this.state.hospital.direccion} </h1>
                <h1>Telefono:{this.state.hospital.telefono} </h1>
                <h1>Camas:{this.state.hospital.camas} </h1>
                <NavLink to={"/update/" + this.state.hospital.idhospital + "/"+ this.state.hospital.nombre+ "/"+ this.state.hospital.direccion+ "/"+ this.state.hospital.telefono+ "/"+ this.state.hospital.camas} className="btn btn-info">Modificar</NavLink>
                <NavLink to={"/delete/"+ this.state.hospital.idhospital} className="btn btn-danger">Eliminar departamento</NavLink><hr/>
                <NavLink to={"/delete/" + this.state.hospital.idhospital} className="btn btn-success">Eliminar NavLink</NavLink>
                </React.Fragment>
                )}
                
            </div>
            
        )
    }
}