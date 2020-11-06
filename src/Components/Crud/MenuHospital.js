import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';

export default class MenuHospital extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink class="navbar-brand" to="#">Navbar</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <NavLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/create">Nuevo Hospital</NavLink>
      </li>
      <li class="nav-item dropdown">
        <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </NavLink>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink class="dropdown-item" to="#">Action</NavLink>
          <NavLink class="dropdown-item" to="#">Another action</NavLink>
          <div class="dropdown-divider"></div>
          <NavLink class="dropdown-item" to="#">Something else here</NavLink>
        </div>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link disabled" to="#">Disabled</NavLink>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}
