import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function CostPanel() {
    return (
        <div className="cost w-100">
            <div className="card border-light panel_frame">
                <div className="card-header fs-1-v">ค่าใช้จ่ายเพิ่มเติม</div>

                <div className="form-group d-flex flex-wrap w-100 justify-content-center">
                    <div className="w-30 p-1-5-v d-flex flex-column">
                        <span className="fs-1-v">ค่าเงินมัดจำ/ค่าเงินประกัน</span>
                        <span className="color-gray text_label pl-3-v mt-1-v">รายละเอียด</span>
                    </div>
                    <div className="w-30 p-1-5-v d-flex flex-column">
                        <span className="fs-1-v">จ่ายล่วงหน้า</span>
                        <span className="color-gray text_label pl-3-v mt-1-v">รายละเอียด</span>
                    </div>
                    <div className="w-30 p-1-5-v d-flex flex-column">
                        <span className="fs-1-v">ค่าไฟ</span>
                        <span className="color-gray text_label pl-3-v mt-1-v">รายละเอียด</span>
                    </div>
                    <div className="w-30 p-1-5-v d-flex flex-column">
                        <span className="fs-1-v">ค่าน้ำ</span>
                        <span className="color-gray text_label pl-3-v mt-1-v">รายละเอียด</span>
                    </div>
                    <div className="w-30 p-1-5-v d-flex flex-column">
                        <span className="fs-1-v">อินเทอร์เน็ต</span>
                        <span className="color-gray text_label pl-3-v mt-1-v">รายละเอียด</span>
                    </div>
                    <div className="w-30 p-1-5-v d-flex flex-column">
                        <span className="fs-1-v">คีย์การ์ด</span>
                        <span className="color-gray text_label pl-3-v mt-1-v">รายละเอียด</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CostPanel;