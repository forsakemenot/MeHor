import React, { useState } from 'react';
import './admin_form.css';
import './../../../App.css';

import bin from './../../../img/metro-bin.svg'

import CostPanel from './component/cost_panel.js'
import TypePanel from './component/type_panel.js'
import DormInfoPanel from './component/dormInfo_panel.js'
import ContactDormPanel from './component/contactDorm_panel.js'
import MapPanel from './component/map_panel.js'
import ConInPanel from './component/conveninetIn_panel.js'
import ConOutPanel from './component/conveninetOut_panel.js'
import ImagePanel from './component/image_panel'
import DocPanel from './component/doc_panel.js'
import DetailPanel from './component/detail_panel'

function AdminForm() {
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