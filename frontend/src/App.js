import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topnav from './components/layouts/topnav'
import EMPSideNav from './components/layouts/EMPsidenav'

import CusNavigation from './components/layouts/Navbar'
import RMsidenav from './components/layouts/Roomsidenav'
import AddRoom from './components/room/AddRoom'
import ViewRooms from './components/room/ViewAllRooms'
import ViewOneRoom from './components/room/ViewOneRoom'
import AddInventory from "./components/inventory/AddInventory";
import Inventorysidenav from "./components/layouts/InventorySideNav";
import ViewAllInventory from "./components/inventory/ViewAllInventory";
import ViewOneInventory from "./components/inventory/ViewOneInventory";






function App() {
  return (
    <BrowserRouter>

      <Route path = "/"><CusNavigation/></Route>

      

      {/* Room Management Routes */}
      <Route path = "/roommanager"><RMsidenav/></Route>
      <Route exact path = "/roommanager/add"><AddRoom/></Route>
      <Route exact path = "/roommanager/view"><ViewRooms/></Route>
      <Route exact path = "/roomManager/view/:id"><ViewOneRoom/></Route>

      {/* Inventory Management Routes */}
      <Route path = "/inventorymanager"><Inventorysidenav/></Route>
      <Route exact path = "/inventorymanager/add"><AddInventory/></Route>
      <Route exact path = "/inventorymanager/view"><ViewAllInventory/></Route>
      <Route exact path = "/inventorymanager/view/:id"><ViewOneInventory/></Route>


    </BrowserRouter>
  );
}

export default App;
