import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
function NavBar({ logo }) {
  return (
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

  );
}


export default NavBar;