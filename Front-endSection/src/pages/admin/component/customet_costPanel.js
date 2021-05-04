import React, { useState } from 'react';
import '../../customer_form/customer_form.css';
import './../../../App.css';

function CustomerCostPanel({dateCostPanel}) {
    return (
        <div className="cost w-100">
            <div className="card border-light panel_frame">
                <div className="card-header fs-1-v">ค่าใช้จ่ายเพิ่มเติม</div>

                <div className="form-group d-flex flex-wrap w-100 justify-content-center">
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">ค่าเงินมัดจำ/ค่าเงินประกัน</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="cost" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.insurance_bill}/>
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" className="radio_type" name="cost" />
                                <span className="fs-0-9-v pl-0-5-v">ไม่มีเงินค่ามัดจำ / ประกัน</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">จ่ายล่วงหน้า</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v mr-1-v">ระบุเดือน</span>
                                <select className="input_type fs-0-9-v pl-0-5-v" name="pre_paid">
                                    <option>-- เลือกเดือน --</option>
                                    <option value="1">1 เดือน</option>
                                    <option value="2">2 เดือน</option>
                                    <option value="3">3 เดือน</option>
                                    <option value="4">4 เดือน</option>
                                    <option value="5">5 เดือน</option>
                                    <option value="6">6 เดือน</option>
                                    <option value="7">1 ปี</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="payment" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" className="radio_type" name="payment" />
                                <span className="fs-0-9-v pl-0-5-v">จ่ายเท่าจำนวนค่าห้อง</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" className="radio_type" name="payment" />
                                <span className="fs-0-9-v pl-0-5-v">ไม่ต้องจ่ายล่วงหน้า</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">ค่าไฟ</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="electric" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ตามยูนิตที่ใช้</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="electric" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">รวมในค่าห้องแล้ว</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">ค่าน้ำ</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="water" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ตามยูนิตที่ใช้</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="water" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ตามยูนิตที่ใช้</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาทต่อ<u>คน</u>/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="water" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ตามยูนิตที่ใช้</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาทต่อ<u>ห้อง</u>/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" className="radio_type" name="water" />
                                <span className="fs-0-9-v pl-0-5-v">รวมในค่าห้องแล้ว</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">อินเทอร์เน็ต</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="internet" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาท/เดือน</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="internet" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ฟรี</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="internet" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ไม่มีอินเทอร์เน็ต</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">คีย์การ์ด</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="ketcard" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                <span className="fs-0-9-v pl-0-5-v">บาท/ชุด</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="ketcard" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ฟรี</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <input type="radio" name="ketcard" className="radio_type" />
                                <span className="fs-0-9-v pl-0-5-v">ไม่มีคีย์การ์ด</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CustomerCostPanel;