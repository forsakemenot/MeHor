import React, { useState } from 'react';
import './../admin_approve/admin_approve.css';
import './../../../App.css';

import check from './../../../img/check.svg'
import cross from './../../../img/cross.svg'

import DormApprove from '../component/dorm_approve'

function AdminApprove() {
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

                    <DormApprove />
                </div>
            </div>
        </div>
    );
}
export default AdminApprove;