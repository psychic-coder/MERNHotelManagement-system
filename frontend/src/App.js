import React from "react";
import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from './components/layouts/topnav'
import EMPSideNav from './components/layouts/EMPsidenav'

import CusNavigation from './components/layouts/Navbar'
import RMsidenav from './components/layouts/Roomsidenav'
import AddRoom from './components/room/AddRoom'
import ViewRooms from './components/room/ViewAllRooms'
import ViewOneRoom from './components/room/ViewOneRoom'

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";





function App() {
  return (
    <BrowserRouter>

      <Route path = "/"><CusNavigation/></Route>

      {/* Room Booking Routes */}
      <Route exact path = "/home"><Home/></Route>
      <Route exact path = "/rooms"><Rooms/></Route>

      <Route component={Error} />

      

      {/* Room Management Routes */}
      <Route path = "/roommanager"><RMsidenav/></Route>
      <Route exact path = "/roommanager/add"><AddRoom/></Route>
      <Route exact path = "/roommanager/view"><ViewRooms/></Route>
      <Route exact path = "/roomManager/view/:id"><ViewOneRoom/></Route>

    </BrowserRouter>
  );
}

export default App;
