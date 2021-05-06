import React, { useState } from 'react';
import './admin_form.css';
import './../../../App.css';

import CostPanel from '../component/cost_panel.js'
import DetailTypeRoom from '../component/detail_typeRoom'
import DormInfoPanel from '../component/dormInfo_panel.js'
import ContactDormPanel from '../component/contactDorm_panel.js'
import MapPanel from '../component/map_panel.js'
import ConInPanel from '../component/conveninetIn_panel.js'
import ConOutPanel from '../component/conveninetOut_panel.js'
import DetailPanel from '../component/detail_panel'

import bin from '../../../img/metro-bin.svg';

import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin.js"

function AdminForm() {
   return (
      <div className="d-flex bg-admin">
         <div className="w-20  d-flex">
            <NavbarAdmin pages={1} />
         </div>
         <div className="d-flex flex-column w-100 color-main align-items-center">
            <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
               <span>รายการหอพักทั้งหมดในระบบ</span>
               <span>Welcome! - ADMIN POWER</span>
            </div>

            <div className="w-85 form_panel flex-column p-3 mt-2-v mb-2-v">
               <form>
                  <div className="d-flex flex-wrap">
                     <div className="card_size card-columns">
                        <DormInfoPanel />
                        <ContactDormPanel />
                        <MapPanel />
                        <DetailPanel />
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

                  <div className="image mt-1-v">
                     <div className="card border-light panel_frame">
                        <div className="card-header d-flex align-items-center justify-content-between">
                           <span className="fs-1-v w-50">เอกสารยืนยัน</span>
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


export default AdminForm;