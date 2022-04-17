import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from './components/layouts/topnav'
import EMPSideNav from './components/layouts/EMPsidenav'
import React, { Component }  from 'react';

import CusNavigation from './components/layouts/Navbar'
import RMsidenav from './components/layouts/Roomsidenav'
import AddRoom from './components/room/AddRoom'
import ViewRooms from './components/room/ViewAllRooms'
import ViewOneRoom from './components/room/ViewOneRoom'


import EmpDetailsSideNav from './components/layouts/EmpDetailsSideNav'
import ViewEmployee from './components/employee/ViewEmployee'
import AddEmployee from './components/employee/AddEmployee'
import ViewOneEmployee from './components/employee/ViewOneEmployee'




function App() {
  return (
    <BrowserRouter>

      <Route path = "/"><CusNavigation/></Route>

      

      {/* Room Management Routes */}
      <Route path = "/roommanager"><RMsidenav/></Route>
      <Route exact path = "/roommanager/add"><AddRoom/></Route>
      <Route exact path = "/roommanager/view"><ViewRooms/></Route>
      <Route exact path = "/roomManager/view/:id"><ViewOneRoom/></Route>


      {/* Employee Management Routes */}
      <Route path = "/empManager"><EmpDetailsSideNav/></Route>
      <Route exact path = "/empManager/add"><AddEmployee/></Route>
      <Route exact path = "/empManager/view"><ViewEmployee/></Route>
      {<Route exact path = "/empManager/view/:id"><ViewOneEmployee/></Route>}

    </BrowserRouter>
  );
}

export default App;
