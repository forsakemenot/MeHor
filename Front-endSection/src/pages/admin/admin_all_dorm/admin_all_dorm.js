import React, { useState } from 'react';
import './../admin_all_dorm/admin_all_dorm.css';
import './../../../App.css';

import bin from './../../../img/metro-bin.svg'
import edit from './../../../img/edit.svg'

import AdminAllDorm from '../component/admin_dorm.js'

function AllDorm() {
   return (
      <div className="d-flex">
         <div className="navbar_admin">

         </div>

         <div className="d-flex justify-center w-100 color-main">
            <div className="form_panel justify-center flex-column p-3 mb-5">
               <div className="panel_bar w-100">
                  <div className="row align-items-center">
                     <div className="col-6">
                        <div className="d-flex">
                           <input className="kanit" type="text" placeholder=" ค้นหา ชื่อที่พัก, ชื่อโซน"></input>
                        </div>
                     </div>
                     <div className="col-6 d-flex justify-end">
                        <p>แสดงโดย:</p>
                        <select className="ml-1-v">
                           <option>เพิ่มเมื่อเร็วๆ นี้</option>
                        </select>
                     </div>
                  </div>
               </div>
               <hr></hr>

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