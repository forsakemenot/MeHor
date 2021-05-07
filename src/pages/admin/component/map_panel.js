import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function map_panel() {
    return (
        <div className="dorm_info card">
            <div className="card-header">แผนที่</div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">สถานที่ตั้ง</span>
                    <input className="input_panel_address my-0-4-v" />
                </div>
                <div className="d-flex align-items-center justify-content-end">
                    <span className="text_label">แผนที่</span>
                    <div className="map_panel my-0-4-v"></div>
                </div>
            </div>
        </div>
    );
}
export default map_panel;