import React, { useState, useEffect , useMemo} from 'react';
import './../admin_user/admin_user.css';
import './../../../App.css';

import search from '../../../img/search-admin.svg'

import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin.js"
import User from "../component/admin_user.js"

function AdminUser() {
   const [user, setUser] = useState([]);
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
      fetch('https://mehor-backend.herokuapp.com/api/users/userAll', optionsGet())
         .then(res => res.json())
         .then(res => {

            if (res) {
               setUser(res);
               // console.log(res);
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);
   const userList = useMemo(
      () => {
         if (user.users) {
            return (
               user.users.map(function (element, index) {
                  console.log(element, 'test');
                  return <User Data={element} />
               })
            )
         }
         return
      }, [user]
   )

   return (
      <div className="d-flex bg-admin">
         <div className="w-20 d-flex">
            <NavbarAdmin pages={2} />
         </div>
         <div className="d-flex flex-column w-100 color-main align-items-center">
            <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
               <span>ผู้ใช้ทั้งหมดในระบบ</span>
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

               <div className="user_all">
                  <div className="card border-light mt-1-v">
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

                     {userList}
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}


export default AdminUser;