import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function contact_panel() {
    return (
        <div className="card">
            <div className="card-header">ข้อมูลติตด่อ</div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-end">
                    <p className="text_label">ชื่อผู้ดูแล</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">เบอร์โทรศัพท์</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">เบอร์โทรศัพท์ (ถ้ามี)</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">อีเมล</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">Line ID</p>
                    <input className="input_panel" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">Facebook</p>
                    <input className="input_panel" />
                </div>
            </div>
        </div>
    );
}
export default contact_panel;