import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MenuHospital from './Crud/MenuHospital';
import Hospital from './Crud/Hospital';
import InsertarHospital from './Crud/InsertarHospital';
import UpdateHospital from './Crud/UpdateHospital';
import DetallesHospital from './Crud/DetallesHospital';


export default class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <MenuHospital/>
                <Switch>
                    <Route exact path="/" component={Hospital} />
                    <Route exact path="/create" component={InsertarHospital} />
                    <Route exact path="/update/:id/:nombre/:direccion/:telefono/:camas" render = {props => {
                        var num = props.match.params.num;
                        var nom = props.match.params.nom;
                        var dir = props.match.params.dir;
                        var tel = props.match.params.tel;
                        var cam = props.match.params.cam;

                        return <UpdateHospital idhospital={num} nombre={nom} direccion={dir} telefono={tel} camas={cam} />;
                    }}/>
                     <Route exact path="details/id" render={props => {
                        var id = props.match.params.num;
                        return <DetallesHospital idhospital={id}/>
                    }} />
                </Switch>
                
                </BrowserRouter>
                
            </div>
        )
    }
}
