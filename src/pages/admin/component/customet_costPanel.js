import React, { useState } from 'react';
import '../../customer_form/customer_form.css';
import './../../../App.css';

function CustomerCostPanel({ dateCostPanel }) {
    const checkNum = isNaN(dateCostPanel?.insurance_bill);
    const checkNumPrePaid = isNaN(dateCostPanel?.pre_paid);
    const checkNumElectric = isNaN(dateCostPanel?.electric_bill);
    const checkNumWater = isNaN(dateCostPanel?.water_bill);
    const checkNumInternet = isNaN(dateCostPanel?.internet_bill);
    const checkNumKey = isNaN(dateCostPanel?.keycard);
    return (
        <div className="cost w-100">
            <div className="card border-light panel_frame">
                <div className="card-header fs-1-v">ค่าใช้จ่ายเพิ่มเติม</div>

                <div className="form-group d-flex flex-wrap w-100 justify-content-center">
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">ค่าเงินมัดจำ/ค่าเงินประกัน</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                {checkNum === false ?
                                    <input type="radio" name="insurance_bill" className="radio_type" checked={true} value={dateCostPanel?.insurance_bill} />
                                    :
                                    <input type="radio" name="insurance_bill" className="radio_type" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                {checkNum === false ?
                                    <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.insurance_bill} />
                                    : <input type="number" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.insurance_bill === 'no_insurance_bill' ?
                                    <input type="radio" className="radio_type" name="insurance_bill" checked={true} value={dateCostPanel?.insurance_bill} />
                                    :
                                    <input type="radio" className="radio_type" name="insurance_bill" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">ไม่มีเงินค่ามัดจำ / ประกัน</span>
                            </div>

                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                {(checkNum === true && dateCostPanel?.insurance_bil !== "no_insurance_bill") ?
                                    <input type="text" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.insurance_bill} />
                                    :
                                    <input type="text" name="insurance_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">จ่ายล่วงหน้า</span>
                        <div className="ml-1-v">
                            {/* <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v mr-1-v">ระบุเดือน</span>
                                <select className="input_type fs-0-9-v pl-0-5-v" name="pre_paid">
                                    <option value={dateCostPanel?.pre_paid}>{dateCostPanel?.pre_paid} เดือน</option>
                                    <option value="1">1 เดือน</option>
                                    <option value="2">2 เดือน</option>
                                    <option value="3">3 เดือน</option>
                                    <option value="4">4 เดือน</option>
                                    <option value="5">5 เดือน</option>
                                    <option value="6">6 เดือน</option>
                                    <option value="7">1 ปี</option>
                                </select>
                            </div> */}
                            <div className="d-flex align-items-center mt-0-5-v">
                                {checkNumPrePaid === false ?
                                    <input type="radio" name="pre_paid" className="radio_type" value={dateCostPanel?.pre_paid} checked={true} />
                                    :
                                    <input type="radio" name="pre_paid" className="radio_type" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                {checkNumPrePaid === false ?
                                    <input type="number" name="pre_paid" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.pre_paid} />
                                    :
                                    <input type="number" name="pre_paid" className="input_type ml-0-5-v p-0-5-v" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.pre_paid === "จ่ายเท่าจำนวนค่าห้อง" ?
                                    <input type="radio" className="radio_type" name="pre_paid" value={dateCostPanel?.pre_paid} checked={true} />
                                    :
                                    <input type="radio" className="radio_type" name="pre_paid" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">จ่ายเท่าจำนวนค่าห้อง</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.pre_paid === "รวมในค่าห้องแล้ว" ?
                                    <input type="radio" className="radio_type" name="pre_paid" value={dateCostPanel?.pre_paid} checked={true} />
                                    :
                                    <input type="radio" className="radio_type" name="pre_paid" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">ไม่ต้องจ่ายล่วงหน้า</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                {(checkNumPrePaid === true && dateCostPanel?.pre_paid !== "รวมในค่าห้องแล้ว" && dateCostPanel?.pre_paid !== "จ่ายเท่าจำนวนค่าห้อง") ?
                                    <input type="text" name="pre_paid" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.pre_paid} />
                                    :
                                    <input type="text" name="pre_paid" className="input_type ml-0-5-v p-0-5-v" />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">ค่าไฟ</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                {checkNumElectric === false ?
                                    <input type="radio" name="electric" className="radio_type" value={dateCostPanel?.electric_bill} checked={true} />
                                    :
                                    <input type="radio" name="electric" className="radio_type" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">ตามยูนิตที่ใช้</span>
                                {checkNumElectric === false ?
                                    <input type="number" name="electric_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.electric_bill} />
                                    :
                                    <input type="number" name="electric_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.electric_bill === "รวมในค่าห้องแล้ว" ?
                                    <input type="radio" name="electric_bill" className="radio_type" value={dateCostPanel?.electric_bill} checked={true} />
                                    :
                                    <input type="radio" name="electric_bill" className="radio_type" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">รวมในค่าห้องแล้ว</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                {(checkNumElectric === true && dateCostPanel?.electric_bill !== "รวมในค่าห้องแล้ว") ?
                                    <input type="text" name="electric_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.electric_bill} />
                                    :
                                    <input type="text" name="electric_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }

                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">ค่าน้ำ</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                {checkNumWater === false ?
                                    <input type="radio" name="water_bill" className="radio_type" value={dateCostPanel?.water_bill} checked={true} />
                                    :
                                    <input type="radio" name="water_bill" className="radio_type" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">ตามยูนิตที่ใช้</span>
                                {checkNumWater === false ?
                                    <input type="number" name="water_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.water_bill} />
                                    :
                                    <input type="number" name="water_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">บาท/หน่วย</span>
                            </div>
                            {/* <div className="d-flex align-items-center mt-0-5-v">
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
                            </div> */}
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.water_bill === "รวมในค่าห้องแล้ว" ?
                                    <input type="radio" className="radio_type" name="water" value={dateCostPanel?.water_bill} checked={true} />
                                    :

                                    <input type="radio" className="radio_type" name="water" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">รวมในค่าห้องแล้ว</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                {(checkNumWater === true && dateCostPanel?.water_bill !== "รวมในค่าห้องแล้ว") ?
                                    <input type="text" name="water_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.water_bill} />
                                    :
                                    <input type="text" name="water_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }

                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">อินเทอร์เน็ต</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                {checkNumInternet === false ?
                                    <input type="radio" name="internet" className="radio_type" value={dateCostPanel?.internet_bill} checked={true} />
                                    :
                                    <input type="radio" name="internet" className="radio_type" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                {checkNumInternet === false ?
                                    <input type="number" name="internet_bill" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.internet_bill} />
                                    :
                                    <input type="number" name="internet_bill" className="input_type ml-0-5-v p-0-5-v" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">บาท/เดือน</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.internet_bill === "ฟรี" ?
                                    <input type="radio" name="internet_bill" className="radio_type" value={dateCostPanel?.internet_bill} checked={true} />
                                    :
                                    <input type="radio" name="internet_bill" className="radio_type" />
                                }
                                <span className="fs-0-9-v pl-0-5-v">ฟรี</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.internet_bill === "ไม่มีอินเทอร์เน็ต" ?
                                    <input type="radio" name="internet_bill" className="radio_type" value={dateCostPanel?.internet_bill} checked={true} />
                                    :
                                    <input type="radio" name="internet_bill" className="radio_type" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">ไม่มีอินเทอร์เน็ต</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                {(dateCostPanel?.internet_bill !== "ไม่มีอินเทอร์เน็ต" && dateCostPanel?.internet_bill !== "ฟรี" && checkNumInternet === true) ?
                                    <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.internet_bill} />
                                    :
                                    <input type="text" name="other" className="input_type ml-0-5-v p-0-5-v" />
                                }

                            </div>
                        </div>
                    </div>
                    <div className="w-30 p-1-v d-flex flex-column">
                        <span className="fs-1-v">คีย์การ์ด</span>
                        <div className="ml-1-v">
                            <div className="d-flex align-items-center mt-0-5-v">
                                {checkNumKey === false ?
                                    <input type="radio" name="ketcard" className="radio_type" value={dateCostPanel?.keycard} checked={true} />
                                    :
                                    <input type="radio" name="ketcard" className="radio_type" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">จำนวนเงิน</span>
                                {checkNumKey === false ?
                                    <input type="number" name="keycard" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.keycard} />
                                    :
                                    <input type="number" name="keycard" className="input_type ml-0-5-v p-0-5-v" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">บาท/ชุด</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.keycard === "ฟรี" ?
                                    <input type="radio" name="keycard" className="radio_type" value={dateCostPanel?.keycard} checked={true} />
                                    :
                                    <input type="radio" name="keycard" className="radio_type" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">ฟรี</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                {dateCostPanel?.keycard === "ไม่มีคีย์การ์ด" ?
                                    <input type="radio" name="keycard" className="radio_type" value={dateCostPanel?.keycard} checked={true} />
                                    :
                                    <input type="radio" name="keycard" className="radio_type" />
                                }

                                <span className="fs-0-9-v pl-0-5-v">ไม่มีคีย์การ์ด</span>
                            </div>
                            <div className="d-flex align-items-center mt-0-5-v">
                                <span className="fs-0-9-v">อื่นๆ</span>
                                {(checkNumKey === true && dateCostPanel?.keycard !== "ฟรี" && dateCostPanel?.keycard !== "ไม่มีคีย์การ์ด") ?
                                        <input type="text" name="keycard" className="input_type ml-0-5-v p-0-5-v" value={dateCostPanel?.keycard} />
                                        :
                                        <input type="text" name="keycard" className="input_type ml-0-5-v p-0-5-v" />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CustomerCostPanel;