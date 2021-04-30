import React, { useState } from 'react';
import './../admin_user/admin_user.css';
import './../../../App.css';

import search from '../../../img/search-admin.svg'

import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin.js"
import User from "../component/admin_user.js"

function AdminUser() {
   return (
      <div className="d-flex">
         <NavbarAdmin />

         <div className="d-flex flex-column w-100 color-main align-items-center bg-admin">
            <div className="navigation bg-white d-flex align-items-center justify-content-between px-3-v">
               <p className="m-0">ผู้ใช้ทั้งหมดในระบบ</p>
               <p className="m-0">Welcome! - ADMIN POWER</p>
            </div>
            <div className="form_panel flex-column p-3 mt-2-v mb-2-v">
               <div className="panel_bar w-100">
                  <div className="row align-items-center">
                     <div className="col-4">
                        <div className="d-flex align-items-center justify-content-end">
                           <input className="search_dorm_admin fs-1-v px-0-5-v" type="text" placeholder="รายการหอพักทั้งหมดในระบบ"></input>
                           <img src={search} className="position-absolute px-1-v w-13"></img>
                        </div>
                     </div>
                     <div className="col-5 d-flex justify-content-end align-items-center">
                        <p className="text-dark">ประเภทผู้ใช้ :</p>
                        <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                           <option>ทั้งหมด</option>
                           <option>ผู้เช่า</option>
                           <option>ผู้ประกอบการ</option>
                        </select>
                     </div>
                     <div className="col-3 d-flex justify-content-start align-items-center">
                        <p className="text-dark">แสดงโดย :</p>
                        <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                           <option>วันที่เพิ่ม (ล่าสุด)</option>
                           <option>วันที่เพิ่ม (เก่าสุด)</option>
                        </select>
                     </div>
                  </div>
               </div>
               <hr className="w-95"></hr>

               <div>
                  <div className="card border-light">
                     <div className="card-header">
                        <div className="row align-items-center">
                           <div className="col-1">
                              <p className="m-0">NO.</p>
                           </div>
                           <div className="col-3">
                              <p className="m-0 pl-0-5-v">ชื่อผู้ใช้</p>
                           </div>
                           <div className="col-3">
                              <p className="m-0 pl-0-5-v">ประเภทผู้ใช้</p>
                           </div>
                           <div className="col-2">
                              <p className="m-0 pl-0-5-v">วันเข้าระบบ</p>
                           </div>
                        </div>
                    </div>

                    <User />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default AdminUser;