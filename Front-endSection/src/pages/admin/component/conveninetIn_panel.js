import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function conveninetIn_panel() {
    return (
        <div className="card">
            <div className="card-header">สิ่งอำนวยความสะดวก
                              <p className="m-0 color-second">(ภายในห้องพัก)</p>
            </div>
            <div className="d-flex justify-content-around">
                <div className="col1">
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">เครื่องปรับอากาศ</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">พัดลม</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">เครื่องทำน้ำอุ่น</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">เตียง โต๊ะ ตู้เสื้อผ้า</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">Internet / wifi</p>
                    </div>
                </div>

                <div className="col2">
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">TV</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">Truevision</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ซิงค์ล้างจาน</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">ตู้เย็น</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel" />
                        <p className="text_label ml-2">เคเบิลทีวี / ดาว</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default conveninetIn_panel;