import React, { useState } from 'react';
import '../admin_form.css';
import './../../../../App.css';

function detail_panel() {
    return (
        <div className="card">
            <div className="card-header">รายละเอียด</div>
            <div className="card-body">
                <div class="form-group m-0">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
    );
}
export default detail_panel;