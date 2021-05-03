import React, { useState } from 'react';
import './../admin_all_dorm/admin_all_dorm.css';
import './../../../App.css';

import bin from './../../../img/metro-bin.svg'
import edit from './../../../img/edit.svg'
import search from '../../../img/search-admin.svg'

import AdminAllDorm from '../component/admin_dorm.js'
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin.js"

function AllDorm() {
   return (
      <div className="d-flex">
         <NavbarAdmin pages={0}/>

         <div className="d-flex flex-column w-100 color-main align-items-center bg-admin">
            <div className="navigation bg-white d-flex align-items-center justify-content-between px-3-v">
               <p className="m-0">รายการหอพักทั้งหมดในระบบ</p>
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
                        <p className="text-dark">โซน :</p>
                        <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                           <option>ทั้งหมด</option>
                           <option>วีคอนโด</option>
                           <option>เกกี</option>
                           <option>RNP</option>
                           <option>FBT</option>
                           <option>จินดา</option>
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
                           <div className="col-2">
                              <p className="m-0">หมายเลขหอพัก</p>
                           </div>
                           <div className="col-3">
                              <p className="m-0">ชื่อหอพัก</p>
                           </div>
                           <div className="col-2">
                              <p className="m-0">โซน</p>
                           </div>
                           <div className="col-2">
                              <p className="m-0">อัพเดตข้อมูลล่าสุด</p>
                           </div>
                        </div>
                     </div>

                     <AdminAllDorm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default AllDorm;