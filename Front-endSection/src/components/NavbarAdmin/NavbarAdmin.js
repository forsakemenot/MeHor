import React, { useState } from 'react';
import './NavbarAdmin.css';
import { Link } from "react-router-dom";
function NavbarAdmin({ pages }) {
    const [page, setPage] = useState(pages);
    function handleNavBar(e) {
        setPage(e);
    }
    return (
        <div className="navbar_admin text-white d-flex flex-wrap justify-content-start flex-column w-100">
            <div className="d-flex w-100 flex-column justify-content-start h-40">
                <div className="d-flex w-100 flex-column">
                    <span className="fs-3-5-v font-weight-bold w-100 text-center">MeHor</span>
                    <span className="text-uppercase w-100 text-center fs-0-9-v font-weight-bold">admin panel</span>
                </div>
                <Link to="AdminDorm" className="nav-admin">
                    <div className={`d-flex w-100 justify-content-center py-1-v fs-0-9-v mt-2-v ${page === 0 && "bg-active-nav-bar-admin"}`} onClick={() => handleNavBar(0)}>
                        <span>รายการหอพักทั้งหมดในระบบ</span>
                    </div>
                </Link>
                <Link to="/AdminApprove" className="nav-admin">
                    <div className={`d-flex w-100 justify-content-center py-1-v fs-0-9-v ${page === 1 && "bg-active-nav-bar-admin"}`} onClick={() => handleNavBar(1)}>
                        <span>รายการหอรอการอนุมัติ</span>
                    </div>
                </Link>
                <Link to="AdminUser" className="nav-admin">
                    <div className={`d-flex w-100 justify-content-center py-1-v fs-0-9-v ${page === 2 && "bg-active-nav-bar-admin"}`} onClick={() => handleNavBar(2)}>
                        <span>ผู้ใช้ทั้งหมดในระบบ</span>
                    </div>
                </Link>
            </div>
            <div className="d-flex w-95 mx-auto flex-column justify-content-end h-50 line-bottom-white py-1-v">
                <div className="back_to_home w-80 mx-auto d-flex justify-content-center py-0-4-v">
                    <span className="fs-0-9-v">กลับไปยังหน้าเว็บไซต์หลัก</span>
                </div>
            </div>
        </div>
    );
}


export default NavbarAdmin;