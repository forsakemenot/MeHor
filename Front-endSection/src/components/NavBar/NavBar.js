import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
function NavBar({ logo }) {
  return (
    <ul className="nav-bar">
      <Link to="/"><img alt="" src={logo} /></Link>
      <li>
        <Link to="/">หน้าแรก</Link>
      </li>
      <li>
        <Link>ค้นหาที่พัก</Link>
      </li>
      <li>
        <Link to="/WebBoard">เว็บบอร์ด</Link>
      </li>
      <li>
        <Link to="/Advertise">ลงโฆษณา</Link>
      </li>
      <li>
        <Link>เกี่ยวกับเว็บไซต์</Link>
      </li>
    </ul>

  );
}


export default NavBar;