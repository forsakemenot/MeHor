import LogoHome from './img/MeHorWhite.svg';
import './App.css';
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home/home.js';
import AddDom from './pages/add_dom/add_dom.js';
import LoginRegister from './pages/login_register/login_register.js';
import RoomType from './pages/room_type/room_type.js';
import FurnitureDom from './pages/furniture_dom/furniture_dom.js';
import DomMe from './pages/dom_me/dom_me.js';
import ConfirmDoc from './pages/confirm_doc/confirm_doc.js';
import NavBar from "./components/NavBar/NavBar.js";
import jwt from 'jsonwebtoken';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
  const [email, setEmail] = useState((token && jwt.decode(token).email) || '');

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
  }

  return (
    <Router>

      <div className="bg-main d-flex">
        <div className="d-flex left-nav">
          <NavBar logo={LogoHome} />

        </div>
        <div className="d-flex right-nav align-center">
          {
            email ?
              <div>
                <div>{email}</div>
                <form onSubmit={handleLogout}>
                  <button className="btn_login">Logout</button>
                </form>
              </div>
              :
              <Link to="/LoginRegister">เข้าสู่ระบบ/สมัครสมาชิก</Link>
          }

        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AddDom">
          <AddDom />
        </Route>
        <Route path="/LoginRegister">
          <LoginRegister />
        </Route>
        <Route path="/RoomType">
          <RoomType />
        </Route>
        <Route path="/FurnitureDom">
          <FurnitureDom />
        </Route>
        <Route path="/ConfirmDoc">
          <ConfirmDoc />
        </Route>
        <Route path="/DomMe">
          <DomMe />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
