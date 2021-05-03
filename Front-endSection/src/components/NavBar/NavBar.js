import React, { useState } from "react";
import "./NavBar.css"
import arrow from "../../img/Icon-arrow-drop-down.svg"
import jwt from 'jsonwebtoken';
import { Link } from "react-router-dom";
function NavBar() {
  const [isOpen, setOpen] = useState(false);
  const [dropDownProfile, setDropDownProfile] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
  const [email, setEmail] = useState((token && jwt.decode(token).email) || '');

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
  }

  function toggleDropdown() {
    setOpen(!isOpen);
  }
  function toggleDropdownProfile() {
    setDropDownProfile(!dropDownProfile)
  }
  return (
    <div className="bg-main d-flex">
      <div className="d-flex left-nav">
        <ul className="nav-bar">
          <Link to="/" className="color-white fs-2-5-v font-weight-bold logo-home">MeHor</Link>
          <li>
            <Link to="/">หน้าแรก</Link>
          </li>
          <li className="d-flex position-relative color-white align-items-center" onClick={toggleDropdown}>
            ค้นหาที่พัก<img className="image_search_arrow" src={arrow} />
            <ul className={`dropdown-body position-absolute color-white bg-main  ${isOpen && 'open'}`}>
              <li><Link to="/zone">โซน วีคอนโด</Link></li>
              <li><Link to="/zone">โซน เกกี</Link></li>
              <li><Link to="/zone">โซน RNP</Link></li>
              <li><Link to="/zone">โซน FBT</Link></li>
              <li><Link to="/zone">โซน จินดา</Link></li>
            </ul>
          </li>
          {/* <li>
        <Link to="/WebBoard" >เว็บบอร์ด</Link>

      </li> */}
          <li>
            <Link to="/Advertise">ลงโฆษณา</Link>
          </li>
          <li>
            <Link to="/AboutWeb">เกี่ยวกับเว็บไซต์</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex right-nav align-center">
        {email ?
          <div className="d-flex flex-column align-items-center w-20">
            <div className="color-white position-relative w-100">
              <span className="fs-0-9-v">{email}</span>
              <img alt="" src={arrow} className="image_search_arrow" onClick={toggleDropdownProfile} />
              {dropDownProfile === true &&
                <div className="d-flex bg-white position-absolute align-items-center flex-column z-index-2 box-drop-down-profile rounded w-100">
                  <Link to="/Profile" className="py-0-5-v" onClick={toggleDropdownProfile}><span className="text-dark fs-0-8-v">จัดการบัญชี</span></Link>
                  <Link to="/AdminApprove" onClick={() => window.location.href = '/AdminDorm'}><span className="text-dark py-0-5-v fs-0-8-v">ประกาศหอพักของฉัน</span></Link>
                  <form onSubmit={handleLogout} className="py-0-5-v w-90 mx-auto">
                    <button className="w-100 color-main bg-white rounded fs-0-8-v">ออกจากระบบ</button>
                  </form>
                </div>
              }
            </div>
          </div>
          :
          <Link to="/LoginRegister">เข้าสู่ระบบ/สมัครสมาชิก</Link>
        }
      </div>
    </div>

  );
}


export default NavBar;