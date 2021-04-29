import React, { useState } from 'react';
import './../admin_approve/admin_approve.css';
import './../../../App.css';

import check from './../../../img/check.svg'
import cross from './../../../img/cross.svg'

function DormApprove() {
    return (
        <div className="approve_component card-body">
            <div className="row dorm_box align-items-center color-main">
                <div className="col-3 d-flex justify-content-center">
                    <img id="img_admin_approve"></img>
                </div>
                <div className="col-7 d-flex p-0">
                    <div className="col-2 text-right p-0">
                        <p className="">ชื่อหอพัก:</p>
                        <p className="">สถานะ:</p>
                        <p className="">ส่งคำขอเมื่อ:</p>
                    </div>
                    <div className="col-5">
                        <p className="">หอพักสันติ</p>
                        <p className="text-warning">รอการตรวจสอบ</p>
                        <p className="">14 / 2 / 2564</p>
                    </div>
                </div>
                <div className="col-2">
                    <div className="approve_check d-flex align-items-center justify-evenly text-white">
                        <p className="h6 text-uppercase">approve</p>
                        <img src={check}></img>
                    </div>
                    <div className="approve_denine d-flex align-items-center justify-evenly text-white">
                        <p className="h6 text-uppercase">denine</p>
                        <img src={cross}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DormApprove;