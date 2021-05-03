import React, { useState } from 'react';
import './NavbarAdmin.css';
import '../../App.css';
function NavbarAdmin() {
    return (
        <div className="navbar_admin text-white d-flex flex-wrap justify-content-start flex-column w-100">
            <div className="d-flex w-100 flex-column justify-content-start h-40">
                <div className="d-flex w-100 flex-column">
                    <span className="fs-3-5-v font-weight-bold w-100 text-center">MeHor</span>
                    <span className="text-uppercase w-100 text-center fs-0-9-v font-weight-bold">admin panel</span>
                </div>
                <div className="d-flex w-100 justify-content-center py-1-v fs-0-9-v bg-info mt-2-v">
                    <span>รายการหอพักทั้งหมดในระบบ</span>
                </div>
                <div className="d-flex w-100 justify-content-center py-1-v fs-0-9-v">
                    <span>รายการหอรอการอนุมัติ</span>
                </div>
                <div className="d-flex w-100 justify-content-center py-1-v fs-0-9-v">
                    <span>ผู้ใช้ทั้งหมดในระบบ</span>
                </div>
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