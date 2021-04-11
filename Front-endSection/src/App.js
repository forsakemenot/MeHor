import logo from './img/MeHorWhite.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './home/home.js';
import AddDom from './add_dom/add_dom.js';
import LoginRegister from './login_register/login_register.js';
import RoomType from './room_type/room_type.js';
import FurnitureDom from './furniture_dom/furniture_dom.js';
import ConfirmDoc from './confirm_doc/confirm_doc.js';

function App() {
  return (
    <Router>
      <div className="bg-main d-flex">
        <div className="d-flex left-nav">
          <ul>
          <Link to="/"><img alt="" src={logo} /></Link>
            <li>
              <Link to="/">หน้าแรก</Link>
            </li>
            <li>
              <Link>ค้นหาที่พัก</Link>
            </li>
            <li>
              <Link>เว็บบอร์ด</Link>
            </li>
            <li>
              <Link>ลงโฆษณา</Link>
            </li>
            <li>
              <Link>เกี่ยวกับเว็บไซต์</Link>
            </li>
          </ul>
        </div>
        <div className="d-flex right-nav align-center">
          <Link to="/LoginRegister">เข้าสู่ระบบ/สมัครสมาชิก</Link>
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
      </Switch>
    </Router>

  );
}

export default App;
