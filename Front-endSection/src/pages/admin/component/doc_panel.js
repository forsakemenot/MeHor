import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

import bin from '../../../img/metro-bin.svg';

function doc_panel() {
    return (
        <div className="doc mt-1-v">
            <div className="card border-light panel_frame">
                <div className="card-header d-flex fs-1-v">เอกสารยืนยัน</div>

                <div className="form-group p-2-v m-0">
                    <div className="card border-dark mb-2-v">
                        <div className="card-header">
                            <div className="row align-items-center text-center">
                                <div className="col-1">
                                    <input type="checkbox" className="checkbox_panel" />
                                </div>
                                <div className="col-2">
                                    <span className="fs-1-v">รูปภาพ</span>
                                </div>
                                <div className="col-2">
                                    <span className="fs-1-v">เอกสาร</span>
                                </div>
                                <div className="col-4">
                                    <span className="fs-1-v">สถานะ</span>
                                </div>
                                <div className="col-2">
                                    <span className="fs-1-v">วันที่</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body text-dark">
                            <div className="row align-items-center text-center">
                                <div className="col-1">
                                    <input type="checkbox" className="checkbox_panel" />
                                </div>
                                <div className="col-2">
                                    <img class="img_doc_admin"></img>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">ทะเบียนบ้าน</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <input type="radio" name="house_regis" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-success text_label">ผ่านการอนุมัติ</p>
                                    <input type="radio" name="house_regis" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-danger text_label">ไม่ผ่านการอนุมัติ</p>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">04/22/2021</p>
                                </div>
                                <div className="col-1">
                                    <img src={bin} className="w-45"></img>
                                </div>
                                <hr></hr>
                            </div>

                            <div className="row align-items-center text-center">
                                <div className="col-1">
                                    <input type="checkbox" className="checkbox_panel" />
                                </div>
                                <div className="col-2">
                                    <img class="img_doc_admin"></img>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">รูปถ่ายที่พัก</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <input type="radio" name="photo_dorm" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-success text_label">ผ่านการอนุมัติ</p>
                                    <input type="radio" name="photo_dorm" className="checkbox_panel mx-3" />
                                    <p className="m-0 text-danger text_label">ไม่ผ่านการอนุมัติ</p>
                                </div>
                                <div className="col-2">
                                    <p className="m-0 text_label">04/22/2021</p>
                                </div>
                                <div className="col-1">
                                    <img src={bin} className="w-45"></img>
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