import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from './components/layouts/topnav'
import EMPSideNav from './components/layouts/EMPsidenav'

import CusNavigation from './components/layouts/Navbar'
import RMsidenav from './components/layouts/Roomsidenav'
import AddRoom from './components/room/AddRoom'
import ViewRooms from './components/room/ViewAllRooms'
import ViewOneRoom from './components/room/ViewOneRoom'

import Supsidenav from './components/layouts/Supsidenav'
import AddSupplier from './components/supplier/AddSupplier'






function App() {
  return (
    <BrowserRouter>

      <Route path = "/"><CusNavigation/></Route>

      

      {/* Room Management Routes */}
      <Route path = "/roommanager"><RMsidenav/></Route>
      <Route exact path = "/roommanager/add"><AddRoom/></Route>
      <Route exact path = "/roommanager/view"><ViewRooms/></Route>
      <Route exact path = "/roomManager/view/:id"><ViewOneRoom/></Route>

       {/* Supplier Management Routes */}
       <Route path = "/supmanager"><Supsidenav/></Route>
       <Route exact path = "/supmanager/add"><AddSupplier/></Route>



    </BrowserRouter>
  );
}

export default App;
