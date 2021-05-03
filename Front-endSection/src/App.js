import LogoHome from './img/MeHorWhite.png';

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
import DormMe from './pages/dom_me/dom_me.js';
import ConfirmDoc from './pages/confirm_doc/confirm_doc.js';
import WebBoard from './pages/web_board/web_board.js';
import NavBar from "./components/NavBar/NavBar.js";
import Profile from "./pages/profile/profile.js";
import Details from "./pages/details/details.js";
import Advertise from "./pages/advertise/advertise.js";
import Zone from "./pages/zone/zone.js"
import AboutWeb from "./pages/about_web/about_web"
import jwt from 'jsonwebtoken';
import AdminForm from './pages/admin/admin_form/admin_form.js'
import AdminDorm from './pages/admin/admin_all_dorm/admin_all_dorm.js'
import AdminApprove from './pages/admin/admin_approve/admin_approve.js'
import AdminUser from './pages/admin/admin_user/admin_user.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  // const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
  // const [email, setEmail] = useState((token && jwt.decode(token).email) || '');

  // const handleLogout = () => {
  //   localStorage.removeItem('jwtToken');
  // }

  return (
    <Router>
      {window.location.pathname !== "/AdminDorm" &&
            <>
            <NavBar logo={LogoHome} />
            {window.scrollTo(0, 0)}
            </>

      }
          {/* <div className="d-flex right-nav align-center">
            email ?
              <div className="d-flex flex-column align-items-center">
              <div className="color-white">{email}</div>
              <div className="d-flex mt-0-5-v">
                <form>
                  <Link to="AdminApprove" onClick={() => window.location.href = '/AdminApprove'}><button className="btn btn-warning mr-1-v">Admin Panel</button></Link>
                </form>
                <form onSubmit={handleLogout}>
                  <button className="btn btn-outline-light">Logout</button>
                </form>
              </div>
            </div>
              :
              <Link to="/LoginRegister">เข้าสู่ระบบ/สมัครสมาชิก</Link>

          </div> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/AddDorm">
          <AddDom />
        </Route>
        <Route path="/LoginRegister">
          <LoginRegister />
        </Route>
        <Route path="/RoomType">
          <RoomType />
        </Route>
        <Route path="/FurnitureDorm">
          <FurnitureDom />
        </Route>
        <Route path="/ConfirmDoc">
          <ConfirmDoc />
        </Route>
        <Route path="/DormMe">
          <DormMe />
        </Route>
        <Route path="/WebBoard">
          <WebBoard />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/details/:dormId">
          <Details />
        </Route>
        <Route path="/Advertise">
          <Advertise />
        </Route>
        <Route path="/zone">
          <Zone />
        </Route>
        <Route path="/aboutWeb">
          <AboutWeb />
        </Route>
        <Route path="/AdminForm">
          <AdminForm />
        </Route>
        <Route path="/AdminDorm">
          <AdminDorm />
        </Route>
        <Route path="/AdminApprove">
          <AdminApprove />
        </Route>
        <Route path="/AdminUser">
          <AdminUser />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
