import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";

import { Home } from "./pages/Home/Index.jsx";
import { WishList } from "./pages/WishList/index.jsx";
import {ProfileSettings} from "./pages/Profile_Settings/index.jsx"
import "./styles.js";
import "./styles/global.css";
function App() {

  return (
    <>
      <Router>
        <Routes > 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/lista" element={<WishList/>} />
          <Route path="/profilesettings" element={<ProfileSettings/>} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
