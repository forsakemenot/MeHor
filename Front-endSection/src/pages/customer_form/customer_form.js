import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CostPanel from '../../pages/admin/component/cost_panel'
import DetailTypeRoom from '../../pages/admin/component/detail_typeRoom'
import DormInfoPanel from '../../pages/admin/component/dormInfo_panel.js'
import ContactDormPanel from '../../pages/admin/component/contactDorm_panel'
// import MapPanel from '../../pages/admin/component/map_panel.js'
import ConInPanel from '../../pages/admin/component/conveninetIn_panel.js'
import ConOutPanel from '../../pages/admin/component/conveninetOut_panel.js'
import DocPanel from '../../pages/admin/component/doc_panel.js'
import DetailPanel from '../../pages/admin/component/detail_panel'

import bin from '../../img/metro-bin.svg';
function CustomerForm() {
   const { UserId } = useParams()
   const [roomType, setRoomType] = useState({});
   const [descDorm, setDescDorm] = useState({});
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
      fetch('http://103.13.231.22:5000/api/dorm/roomtypebyid/' + UserId, optionsGet())
         .then(res => res.json())
         .then(res => {
            if (res.DormType) {
               setRoomType(res.DormType);
               console.log(res.DormType);
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);


   useEffect(() => {
      fetch('http://103.13.231.22:5000/api/dorm/dormById/' + UserId, optionsGet())
         .then(res => res.json())
         .then(res => {
            if (res.Dorm) {
               setDescDorm(res.Dorm);
               console.log(res.Dorm);
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);
   
   return (
      <div className="d-flex bg-admin">
         <div className="d-flex flex-column w-100 color-main align-items-center">
            <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
               <span>รายการหอพักทั้งหมดในระบบ</span>
               <span>Welcome! - ADMIN POWER</span>
            </div>

            <div className="w-85 form_panel flex-column p-3 mt-2-v mb-2-v">
               <form>
                  <div className="d-flex flex-wrap">
                     <div className="card_size card-columns">
                        <DormInfoPanel dataInfo={descDorm} />
                        <ContactDormPanel dataContact={descDorm}/>
                        {/* <MapPanel /> */}
                        <DetailPanel dataDetail={descDorm}/>
                     </div>
                  </div>

                  {/* Type Room */}
                  <div className="type">
                     <div className="card border-light panel_frame">
                        <div className="card-header d-flex align-items-center justify-content-between">
                           <span className="fs-1-v">ประเภทห้องพัก</span>
                        </div>

                        <div className="form-group">
                           <DetailTypeRoom />
                        </div>
                     </div>
                  </div>

                  <div class="card-columns d-flex">
                     <CostPanel />
                  </div>
                  <div className="d-flex w-100">
                     <ConInPanel />
                     <ConOutPanel />
                  </div>

                  <div className="image mt-1-v">
                     <div className="card border-light panel_frame">
                        <div className="card-header d-flex align-items-center justify-content-between">
                           <span className="fs-1-v w-50">รูปภาพทั้งหมด</span>
                           <div className="d-flex align-items-center justify-content-end w-50">
                              <input type="checkbox" className="checkbox_panel mr-1-v" />
                              <span className="fs-1-v">เลือกทั้งหมด</span>
                              <img src={bin} className="ml-2-v w-5"></img>
                           </div>
                        </div>
                        <div className="form-group">
                           <img alt="" className="image_dorm_all" />
                        </div>
                     </div>
                  </div>

                  <DocPanel />
               </form>

               <div className="button line-top-gray">
                  <div className="d-flex justify-content-center mt-1-v">
                     <div className="btn_cancel bg-main d-flex justify-content-center align-items-center">
                        <p className="m-0 text-white">ยกเลิก</p>
                     </div>
                     <div className="btn_cancel bg-success d-flex justify-content-center align-items-center">
                        <p className="m-0 text-white">ตกลง</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>


   );
}


export default CustomerForm;