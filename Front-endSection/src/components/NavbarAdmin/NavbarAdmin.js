import React, { useState } from 'react';
import './NavbarAdmin.css';
import '../../App.css';

import LogoHome from '../../img/MeHorWhite.png';

function NavbarAdmin() {
    return (
        <div className="navbar_admin text-white text-center">
            <img src={LogoHome} className="logo_admin w-60 m-0"></img>
            <p className="text-uppercase m-0">admin panel</p>
            <div className="menu_panel mt-2-v">
                <p className="pt-2-v">รายการหอพักทั้งหมดในระบบ</p>
                <p className="pt-2-v">รายการหอรอการอนุมัติ</p>
                <p className="pt-2-v">ผู้ใช้ทั้งหมดในระบบ</p>
            </div>
            <div className="back_to_home">
                <p className="m-0 p-0-5-v">กลับไปยังหน้าเว็บไซต์หลัก</p>
            </div>
            <hr className="w-95 bg-white"></hr>
        </div>
    );
}


export default NavbarAdmin;