import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from './components/layouts/topnav'
import EMPSideNav from './components/layouts/EMPsidenav'
import React, { Component }  from 'react';

import CusNavigation from './components/layouts/Navbar'
import RMsidenav from './components/layouts/Roomsidenav'
import AddRoom from './components/room/AddRoom'
import ViewRooms from './components/room/ViewAllRooms'
import ViewOneRoom from './components/room/ViewOneRoom'
import AddInventory from "./components/inventory/AddInventory";
import Inventorysidenav from "./components/layouts/InventorySideNav";
import ViewAllInventory from "./components/inventory/ViewAllInventory";
import ViewOneInventory from "./components/inventory/ViewOneInventory";
import RestockInventory from "./components/inventory/RestockInventory";
import CusLogin from "./components/auth/cusLogin";
import CusReg from "./components/auth/CusRegister";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

<<<<<<< HEAD
import EmpDetailsSideNav from './components/layouts/EmpDetailsSideNav'
import ViewEmployee from './components/employee/ViewEmployee'
import AddEmployee from './components/employee/AddEmployee'
import ViewOneEmployee from './components/employee/ViewOneEmployee'
=======
import Bookings from './components/room/RoomBookings';
import AllBookings from './components/room/ViewAllRoomBookings';
>>>>>>> main

import ViewPaidSalary from './components/employee/ViewPaidSalary'
import AddPaidSalary from './components/employee/AddPaidSalary'


function App() {
  return (
    <BrowserRouter>

      <Route path = "/"><CusNavigation/></Route>

      {/* User Login and Reg*/}
      <Route path = "/cuslogin"><CusLogin/></Route>
      <Route path = "/cusreg"><CusReg/></Route>
      {/* Room Booking Routes */}
      <Route exact path = "/home"><Home/></Route>
      <Route exact path = "/rooms"><Rooms/></Route>
      <Route exact path="/rooms/:slug" component={SingleRoom} />

      

      

      {/* Room Management Routes */}
      <Route path = "/roommanager"><RMsidenav/></Route>
      <Route exact path = "/roommanager/add"><AddRoom/></Route>
      <Route exact path = "/roommanager/view"><ViewRooms/></Route>
      <Route exact path = "/roomManager/view/:id"><ViewOneRoom/></Route>

<<<<<<< HEAD

      {/* Employee Management Routes */}
      <Route path = "/empManager"><EmpDetailsSideNav/></Route>
      <Route exact path = "/empManager/add"><AddEmployee/></Route>
      <Route exact path = "/empManager/view"><ViewEmployee/></Route>
      <Route exact path = "/empManager/view/:id"><ViewOneEmployee/></Route>
      
      <Route exact path = "/paidsalManager/view"><EmpDetailsSideNav/><ViewPaidSalary/></Route>
      <Route exact path = "/paidsalManager/add"><EmpDetailsSideNav/><AddPaidSalary/></Route>
      

=======
      {/* Room Booking Routes */}
      <Route exact path = "/bookings"><Bookings/></Route>
      <Route exact path = "/viewbookings"><AllBookings/></Route>
      

      {/* Inventory Management Routes */}
      <Route path = "/inventorymanager"><Inventorysidenav/></Route>
      <Route exact path = "/inventorymanager/add"><AddInventory/></Route>
      <Route exact path = "/inventorymanager/view"><ViewAllInventory/></Route>
      <Route exact path = "/inventorymanager/view/:id"><ViewOneInventory/></Route>
      <Route exact path = "/inventorymanager/restock"><RestockInventory/></Route>

      
>>>>>>> main
    </BrowserRouter>
  );
}

export default App;
