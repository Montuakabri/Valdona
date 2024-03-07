import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";

// Admin navbar
import AdminNavbar from "./admin/adminheader/AdminNavbar";
import {AminHeaderdata} from "./admin/dataofadmin/AdminHeaderdata"
import Dashboard from "./admin/pages/Dashboard";
import Order from "./admin/pages/Order";
import Prodect from "./admin/pages/Prodect";

// User navbar
import UserNavbar from "./user/userheader/UserNavbar";
import UserHome from "./user/pages/UserHome";
import Kurta from "./user/pages/Kurta";
import Dress from "./user/pages/Dress";
import Sale from "./user/pages/Sale";
import {UserHeaderdata} from "./user/dataofuser/UserHeaderdata"

function App() {
  // role
  const role = "user";

  if (role === "admin") {
    //  Render admin components
    return (
      <>
        <AdminNavbar AminHeaderdata={AminHeaderdata}/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/Order" element={<Order/>}/>
          <Route path="/Prodect" element={<Prodect/>}/>
        </Routes>
      </>
    );
  } else if (role === "user") {
    // Render user components
    return (
      <>
        <UserNavbar UserHeaderdata = {UserHeaderdata}/>
        <Routes>
          <Route path="/" element={<UserHome/>}/>
          <Route path="/Kurta" element={<Kurta/>}/>
          <Route path="/Dress" element={<Dress/>}/>
          <Route path="/Sale" element={<Sale/>}/>
        </Routes>
      </>
    );
  }
}

export default App;
