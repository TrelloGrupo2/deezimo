import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home } from "./pages/Home/Index.jsx";
import { Lp } from "./pages/Landing_Page/index.jsx";
import { Login } from "./pages/Login/index.jsx";
import { ProfileSettings } from "./pages/Profile_Settings/index.jsx";
import { Register } from "./pages/Register/index.jsx";
import { WishListComplete } from "./pages/WhisListComplete/index.jsx";
import { WishList } from "./pages/WishList/index.jsx";
import "./styles.js";
import "./styles/global.css";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Lp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lista" element={<WishList />} />
          <Route path="/profilesettings" element={<ProfileSettings />} />
          <Route path="/complete" element={<WishListComplete />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
