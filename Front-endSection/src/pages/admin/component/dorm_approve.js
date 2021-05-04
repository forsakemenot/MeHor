import React, { useState } from 'react';
import './../admin_approve/admin_approve.css';
import './../../../App.css';

import check from './../../../img/check.svg'
import cross from './../../../img/cross.svg'

function DormApprove({dataAllDorm}) {
    return (
        <div className="approve_component">
            <div className="d-flex dorm_box align-items-center color-main">
                <div className="d-flex w-60">
                    <div className=" d-flex justify-content-center">
                        <img alt="" className="img_admin_approve" />
                    </div>
                    <div className="d-flex w-40 align-items-center ">
                        <div className="d-flex flex-column align-items-end w-45 mx-auto">
                            <span className="fs-1-v ">ชื่อหอพัก:</span>
                            <span className="fs-1-v ">สถานะ:</span>
                            <span className="fs-1-v ">ส่งคำขอเมื่อ:</span>
                        </div>
                        <div className="d-flex flex-column align-items-start w-45 mx-auto">
                            <span className="fs-1-v ">{dataAllDorm?.dorm_name}</span>
                            <span className="fs-1-v text-warning">รอการตรวจสอบ</span>
                            <span className="fs-1-v ">14 / 2 / 2564</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex w-35 mx-auto flex-column align-items-end">
                    <div className="approve_check d-flex align-items-center justify-evenly text-white pointer">
                        <span className="fs-1-v text-uppercase">approve</span>
                        <img alt="" src={check} className="btn-dorm-approve"/>
                    </div>
                    <div className="approve_denine d-flex align-items-center justify-evenly text-white pointer">
                        <span className="fs-1-v text-uppercase">denine</span>
                        <img alt="" src={cross} className="btn-dorm-approve"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DormApprove;