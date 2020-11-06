import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Global from './../../Global';
import axios from 'axios';


export default class Hospital extends Component {
    state = {
        hospitales: [],status:false
    }
    cargarHospitales = () => {
        var request = "/webresources/hospitales"
        var url = Global.urlhospital + request;
        axios.get(url).then(res => {
            this.setState({
                hospitales: res.data,
                status:true
            });
        });
    }
    componentDidMount = () =>{
        this.cargarHospitales();
    }

    render() {
        return (
            <div>
                <h1>Hospitales</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>DIRECCION</th>
                        <th>TELEFONO</th>
                        <th>CAMAS</th>
                        <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.status == true && (this.state.hospitales.map((hosp,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{hosp.idhospital}</td>
                                    <td>{hosp.nombre}</td>
                                    <td>{hosp.direccion}</td>
                                    <td>{hosp.telefono}</td>
                                    <td>{hosp.camas}</td>
                                    <td><NavLink to={"/details/" + hosp.idhospital}>Detalles</NavLink></td>
                                </tr>

                            );
                        }))}
                    </tbody>
                </table>
                
            </div>
        )
    }
}
