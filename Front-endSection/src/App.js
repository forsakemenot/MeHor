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
function App() {
  return (
    <Router>
      <div className="bg-main d-flex">
        <div className="d-flex left-nav">
          <ul>
            <img alt="" src={logo} />
            <li>
              <Link to="/">หน้าแรก</Link>
            </li>
            <li>
              <Link>ค้นหาที่พัก</Link>
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
      </Switch>
    </Router>

  );
}

export default App;
