import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function contact_panel() {
    return (
        <div className="dorm_info card">
            <div className="card-header">ข้อมูลติตต่อ</div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">ชื่อผู้ดูแล</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <span className="text_label">เบอร์โทรศัพท์</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <span className="text_label">เบอร์โทรศัพท์ (ถ้ามี)</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <span className="text_label">อีเมล</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <span className="text_label">Line ID</span>
                    <input className="input_panel my-0-4-v" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <span className="text_label">Facebook</span>
                    <input className="input_panel my-0-4-v" />
                </div>
            </div>
        </div>
    );
}
export default contact_panel;