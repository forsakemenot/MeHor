import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function cost_panel() {
    return (
        <div className="cost w-70">
            <div className="">
                <div className="card border-light panel_frame">
                    <div className="card-header">ค่าใช้จ่ายเพิ่มเติม</div>

                    <div className="row1 d-flex">
                        <div className="deposit card-body d-flex flex-column">
                            <p className="m-0">ค่าเงินมัดจำ/ค่าเงินประกัน</p>
                            <div className="ml-3">
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="deposit" className="input_radio_cost" />
                                    <p className="ml-3 text_label">จำนวนเงิน</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาท</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="deposit" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">ไม่มีเงินค่ามัดจำ/ค่าเงินประกัน</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="deposit" className="input_radio_cost" />
                                    <p className="ml-3 text_label">อื่นๆ</p>
                                    <input className="input_panel_cost" />
                                </div>
                            </div>
                        </div>

                        <div className="adv_payment card-body d-flex flex-column">
                            <p className="m-0">จ่ายล่วงหน้า</p>
                            <div className="ml-3">
                                <div className="d-flex align-items-center">
                                    <p className="text_label">ระบุเดือน</p>
                                    <select class="form-control form-control-sm input_panel_adv">
                                        <option>Small select</option>
                                    </select>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="adv_paynemt" className="input_radio_cost" />
                                    <p className="ml-3 text_label">จำนวนเงิน</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาท</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="adv_paynemt" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">จ่ายเท่าจำนวนค่าห้อง</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="adv_paynemt" className="input_radio_cost" />
                                    <p className="ml-3 text_label">ไม่ต้องจ่ายล่วงหน้า</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="adv_paynemt" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">อื่นๆ</p>
                                    <input className="input_panel_cost" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row2 d-flex">
                        <div className="elec card-body d-flex flex-column">
                            <p className="m-0">ค่าไฟ</p>
                            <div className="ml-3">
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="elec" className="input_radio_cost" />
                                    <p className="ml-3 text_label">ตามยูนิตที่ใช้</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาท</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="elec" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">รวมในค่าห้องแล้ว</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="elec" className="input_radio_cost" />
                                    <p className="ml-3 text_label">อื่นๆ</p>
                                    <input className="input_panel_cost" />
                                </div>
                            </div>
                        </div>

                        <div className="water card-body d-flex flex-column">
                            <p className="m-0">ค่าน้ำ</p>
                            <div className="ml-3">
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="water" className="input_radio_cost" />
                                    <p className="ml-3 text_label">ตามยูนิตที่ใช้</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาท</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="water" className="input_radio_cost" />
                                    <p className="ml-3 text_label">เหมาจ่าย</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาทต่อ<u>คน</u>/หน่วย</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="water" className="input_radio_cost" />
                                    <p className="ml-3 text_label">เหมาจ่าย</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาทต่อ<u>ห้อง</u>/หน่วย</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="water" className="input_radio_cost" />
                                    <p className="ml-3 text_label">รวมในค่าห้องแล้ว</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="water" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">อื่นๆ</p>
                                    <input className="input_panel_cost" />
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="checkbox" className="input_checkbox_cost" />
                                    <p className="ml-3 text_label">จ่ายขั้นต่ำ</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาทต่อ/เดือน</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row3 d-flex">
                        <div className="internet card-body d-flex flex-column">
                            <p className="m-0">อินเทอร์เน็ต</p>
                            <div className="ml-3">
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="internet" className="input_radio_cost" />
                                    <p className="ml-3 text_label">จำนวนเงิน</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาท</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="internet" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">ฟรี</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="internet" className="input_radio_cost" />
                                    <p className="ml-3 text_label">ไม่มีอินเทอร์เน็ต</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="internet" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">อื่นๆ</p>
                                    <input className="input_panel_cost" />
                                </div>
                            </div>
                        </div>

                        <div className="keycard card-body d-flex flex-column">
                            <p className="m-0">คีย์การ์ด</p>
                            <div className="ml-3">
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="keycard" className="input_radio_cost" />
                                    <p className="ml-3 text_label">จำนวนเงิน</p>
                                    <input className="input_panel_cost" />
                                    <p className="text_label">บาท</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="keycard" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">ฟรี</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="keycard" className="input_radio_cost" />
                                    <p className="ml-3 text_label">ไม่มีคีย์การ์ด</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <input type="radio" name="keycard" className="input_radio_cost" />
                                    <p className="m-0 ml-3 text_label">อื่นๆ</p>
                                    <input className="input_panel_cost" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default cost_panel;