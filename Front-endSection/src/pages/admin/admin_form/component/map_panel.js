import React, { useState } from 'react';
import '../admin_form.css';
import './../../../../App.css';

function map_panel() {
    return (
        <div className="card">
            <div className="card-header">แผนที่</div>
            <div className="card-body d-flex flex-column">
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">สถานที่ตั้ง</p>
                    <input className="input_panel_address" />
                </div>
                <div className="d-flex align-items-center  justify-content-end">
                    <p className="text_label">แผนที่</p>
                    <div className="map_panel"></div>
                </div>
            </div>
        </div>
    );
}
export default map_panel;