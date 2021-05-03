import React, { useState } from 'react';
import './../admin_approve/admin_approve.css';
import './../../../App.css';

import check from './../../../img/check.svg'
import cross from './../../../img/cross.svg'
import search from '../../../img/search-admin.svg'

import DormApprove from '../component/dorm_approve'
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin.js'

function AdminApprove() {
    return (
        <div className="d-flex bg-admin">
            <div className="w-20  d-flex">
                <NavbarAdmin />
            </div>
            <div className="d-flex flex-column w-100 color-main align-items-center">
                <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
                    <span>รายการหอพักรออนุมัติ</span>
                    <span>Welcome! - ADMIN POWER</span>
                </div>
                <div className="form_panel flex-column px-1-v mt-2-v mb-2-v">
                    <div className="d-flex align-items-center w-100 py-0-5-v">
                        <div className="d-flex align-items-center justify-content-start w-50 position-relative">
                            <input className="search_dorm_admin fs-1-v px-0-5-v" type="text" placeholder="รายการหอพักทั้งหมดในระบบ"></input>
                            <img alt="" src={search} className="position-absolute image-search-admin-approve" />
                        </div>
                        <div className="d-flex w-50 justify-content-end">
                            <div className="d-flex justify-content-end align-items-center w-50">
                                <span className="text-dark fs-1-v">โซน :</span>
                                <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                                    <option>ทั้งหมด</option>
                                    <option>วีคอนโด</option>
                                    <option>เกกี</option>
                                    <option>RNP</option>
                                    <option>FBT</option>
                                    <option>จินดา</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <p className="text-dark fs-1-v">แสดงโดย :</p>
                                <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                                    <option>วันที่เพิ่ม (ล่าสุด)</option>
                                    <option>วันที่เพิ่ม (เก่าสุด)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <DormApprove />
                </div>
            </div>
        </div>
    );
}
export default AdminApprove;