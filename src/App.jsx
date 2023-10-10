import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./pages/Login/index.jsx";
import { Register } from "./pages/Register/index.jsx"
import { Home } from "./pages/Landing_Page/index.jsx"

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
        </Routes>
      </Router>
    </>

  );
}

export default App;
