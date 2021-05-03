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
                <span className="pl-2-v pt-0-5-v text_label">รายละเอียด</span>
                <span className="pl-2-v pt-0-5-v text_label">รายละเอียด</span>
            </div>
        </div>
    );
}
export default conveninetIn_panel;