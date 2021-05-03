import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function dorm_panel() {
    return (
        <div className="dorm_info card">
            <div className="card-header">ข้อมูลที่พัก</div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">ชื่อที่พัก</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">ประเภทห้องพัก</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">โซนที่พัก</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">เลขที่</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">ซอย</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">ถนน</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">จังหวัด</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">อำเภอ/เขต</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">ตำบล/แขวง</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">รหัสไปรษณีย์</span>
                    <input className="input_panel my-0-4-v" />
                </div>
            </div>
        </div>
    );
}
export default dorm_panel;