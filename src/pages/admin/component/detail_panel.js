import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

function Detail_panel({dataDetail}) {
    return (
        <div className="dorm_info card">
            <div className="card-header">รายละเอียด</div>
            <div className="card-body">
                <div class="form-group m-0">
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={dataDetail?.description}></textarea>
                </div>
            </div>
        </div>
    );
}
export default Detail_panel;