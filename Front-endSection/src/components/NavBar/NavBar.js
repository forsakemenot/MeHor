import React, { useState } from "react";
import "./NavBar.css"
import arrow from "../../img/Icon-arrow-drop-down.svg"
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setOpen] = useState(false);

  function toggleDropdown() {
    setOpen(!isOpen);
  }
  return (
    <ul className="nav-bar">
      <Link to="/" className="color-white fs-2-5-v font-weight-bold">MeHor</Link>
      <li>
        <Link to="/">หน้าแรก</Link>
      </li>
      <li className="d-flex position-relative color-white align-items-center" onClick={toggleDropdown}>
        ค้นหาที่พัก<img className="image_search_arrow" src={arrow} />
        <ul className={`dropdown-body position-absolute color-white bg-main  ${isOpen && 'open'}`}>
          <li><Link to="#">โซน วีคอนโด</Link></li>
          <li><Link to="#">โซน เกกี</Link></li>
          <li><Link to="#">โซน RNP</Link></li>
          <li><Link to="#">โซน FBT</Link></li>
          <li><Link to="#">โซน จินดา</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/WebBoard" >เว็บบอร์ด</Link>

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