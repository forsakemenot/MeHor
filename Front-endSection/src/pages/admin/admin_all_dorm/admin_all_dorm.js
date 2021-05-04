import React, { useState, useEffect,useMemo } from "react";
import './../admin_all_dorm/admin_all_dorm.css';

import bin from './../../../img/metro-bin.svg'
import edit from './../../../img/edit.svg'
import search from '../../../img/search-admin.svg'

import AdminAllDorm from '../component/admin_dorm.js'
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin.js"

function AllDorm() {
   const [descDorm, setDescDorm] = useState([]);
   const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
   const optionsGet = data => {
      return {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
         },
         method: 'get',
         // body: JSON.stringify(data)
      };
   };
   useEffect(() => {
      console.log("useEffect");
      fetch('http://103.13.231.22:5000/api/dorm/alldorm', optionsGet())
          .then(res => res.json())
          .then(res => {
              if (res.dorm) {
                  setDescDorm(res.dorm);
                  // console.log(res.dorm);
              }
          })
          .catch(error => {
              console.log(error);
          })
  }, []);
   const dormListInWeb = useMemo(
      () => {
         if (descDorm[0]?.dorm_name) {
            return (
               descDorm.map(function (element, index) {
                  return <AdminAllDorm dataAllDorm={element} />
               })
            )
         }
         return
      }, [descDorm]
   )
   return (
      <div className="d-flex bg-admin">
         <div className="w-20 d-flex">
            <NavbarAdmin pages={0} />
         </div>
         <div className="d-flex flex-column w-100 color-main align-items-center">
            <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
               <span>รายการหอพักทั้งหมดในระบบ</span>
               <span>Welcome! - ADMIN POWER</span>
            </div>

            <div className="w-85 form_panel flex-column p-1-v mt-2-v mb-2-v">
               <div className="panel_bar w-100 line-bottom-gray">
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

               <div className="dorm_all">
                  <div className="card border-light mt-1-v">
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
                     {dormListInWeb}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default AllDorm;