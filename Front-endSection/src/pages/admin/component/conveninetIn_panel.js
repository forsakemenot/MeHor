import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function conveninetIn_panel() {
    return (
        <div className="card w-50">
            <div className="card-header">
                <span className="fs-1-v">สิ่งอำนวยความสะดวก</span>
                <span className="pl-0-5-v color-second fs-1-v">(ภายในห้องพัก)</span>
            </div>
            <div className="form-group mt-1-v d-flex flex-column">
                <div id="check">
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="เครื่องปรับอากาศ"></input>
                        <span className="fs-0-9-v">เครื่องปรับอากาศ</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="พัดลม"></input>
                        <span className="fs-0-9-v">พัดลม</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="เครื่องทำน้ำอุ่น"></input>
                        <span className="fs-0-9-v"> เครื่องทำน้ำอุ่น</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="เตียง โต๊ะ ตู้เสื้อผ้า"></input>
                        <span className="fs-0-9-v">เตียง โต๊ะ ตู้เสื้อผ้า</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="Internet / wifi"></input>
                        <span className="fs-0-9-v">Internet / wifi</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="TV"></input>
                        <span className="fs-0-9-v">TV</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="Truevision"></input>
                        <span className="fs-0-9-v">Truevision</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ซิงค์ล้างจาน"></input>
                        <span className="fs-0-9-v">ซิงค์ล้างจาน</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="ตู้เย็น"></input>
                        <span className="fs-0-9-v">ตู้เย็น</span>
                    </div>
                    <div className="checkbox_room">
                        <input type="checkbox" className="checkbox_type" name="เคเบิลทีวี / ดาวเทียม"></input>
                        <span className="fs-0-9-v">เคเบิลทีวี / ดาวเทียม</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default conveninetIn_panel;