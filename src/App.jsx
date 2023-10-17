import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Landing_Page/index.jsx";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx";

import { WishList } from "./pages/WishList/index.jsx";
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
        </Routes>
      </Router>
    </>

  );
}

export default App;
