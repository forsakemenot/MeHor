import React, { useState } from 'react';
import './admin_form.css';
import './../../../App.css';

import CostPanel from '../component/cost_panel.js'
import TypePanel from '../component/type_panel.js'
import DormInfoPanel from '../component/dormInfo_panel.js'
import ContactDormPanel from '../component/contactDorm_panel.js'
import MapPanel from '../component/map_panel.js'
import ConInPanel from '../component/conveninetIn_panel.js'
import ConOutPanel from '../component/conveninetOut_panel.js'
import ImagePanel from '../component/image_panel'
import DocPanel from '../component/doc_panel.js'
import DetailPanel from '../component/detail_panel'

import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin.js"

function AdminForm() {
   return (
      <div className="d-flex">
         <NavbarAdmin />

         <div className="d-flex flex-column w-100 color-main align-items-center bg-admin">
            <div className="navigation bg-white d-flex align-items-center justify-content-between px-3-v">
               <p className="m-0">รายการหอพักทั้งหมดในระบบ</p>
               <p className="m-0">Welcome! - ADMIN POWER</p>
            </div>
            <div className="form_panel flex-column p-3 mt-2-v mb-2-v">
               <form>
                  <div className="panel_dorm">
                     <div className="card-columns">
                        <DormInfoPanel />
                        <ContactDormPanel />
                        <MapPanel />
                        <DetailPanel />
                     </div>
                  </div>
                  <TypePanel />

                  <div className="">
                     <div class="card-columns d-flex justify-content-between">
                        <CostPanel />
                        <div className="d-flex flex-column">
                           <ConInPanel />
                           <ConOutPanel />
                        </div>
                     </div>
                  </div>
                  <ImagePanel />
                  <DocPanel />
               </form>

               <hr className="w-100"></hr>
               <div className="d-flex justify-content-center">
                  <div className="button d-flex">
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