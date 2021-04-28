import React, { useState } from 'react';
import '../admin_form.css';
import './../../../../App.css';

import bin from '../../../../img/metro-bin.svg'

function doc_panel() {
    return (
        <div className="doc mt-3">
            <div className="card border-light panel_frame">
                <div className="card-header d-flex">เอกสารยืนยัน</div>

                <div className="form-group p-3 m-0">
                    <div className="card border-dark mb-3">
                        <div className="card-header">
                            <div className="row align-items-center text-center">
                                <div className="col-1">
                                    <input type="checkbox" className="checkbox_panel" />
                                </div>
                                <div className="col-2">
                                    <p className="m-0">รูปภาพ</p>
                                </div>
                                <div className="col-2">
                                    <p className="m-0">เอกสาร</p>
                                </div>
                                <div className="col-4">
                                    <p className="m-0">สถานะ</p>
                                </div>
                                <div className="col-2">
                                    <p className="m-0">วันที่</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <div className="row align-items-center text-center">
                                <div className="col-1">
                                    <input type="checkbox" className="checkbox_panel" />
                                </div>
                                <div className="col-2">
                                    <img id="img_doc_admin"></img>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">ทะเบียนบ้าน</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <input type="radio" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-success text_label">ผ่านการอนุมัติ</p>
                                    <input type="radio" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-danger text_label">ไม่ผ่านการอนุมัติ</p>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">04/22/2021</p>
                                </div>
                                <div className="col-1">
                                    <img src={bin}></img>
                                </div>
                                <hr></hr>
                            </div>

                            <div className="row align-items-center text-center">
                                <div className="col-1">
                                    <input type="checkbox" className="checkbox_panel" />
                                </div>
                                <div className="col-2">
                                    <img id="img_doc_admin"></img>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">รูปถ่ายที่พัก</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <input type="radio" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-success text_label">ผ่านการอนุมัติ</p>
                                    <input type="radio" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-danger text_label">ไม่ผ่านการอนุมัติ</p>
                                </div>
                                <div className="col-2">
                                    <p className="m-0">04/22/2021</p>
                                </div>
                                <div className="col-1">
                                    <img src={bin}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default doc_panel;