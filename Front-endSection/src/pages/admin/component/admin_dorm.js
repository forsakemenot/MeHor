import React, { useState } from 'react';
import './../admin_all_dorm/admin_all_dorm.js';
import './../../../App.css';

import bin from './../../../img/metro-bin.svg'
import edit from './../../../img/edit.svg'

function AdminAllDorm() {
    return (
        <div className="dorm_component card-body">
            <div className="row dorm_box align-items-center text-secondary">
                <div className="col-1">
                    <p className="m-0 text_label">1</p>
                </div>
                <div className="col-2">
                    <p className="m-0 text_label">#001</p>
                </div>
                <div className="col-3">
                    <p className="m-0 text_label">A.J. PARK</p>
                </div>
                <div className="col-2">
                    <p className="m-0 text_label">เกกีงาม</p>
                </div>
                <div className="col-2">
                    <p className="m-0 text_label">4 / 13 /2021</p>
                </div>
                <div className="col-2 d-flex justify-evenly">
                    <img src={edit} className="img_admin_edit"></img>
                    <img src={bin} className="img_admin_edit"></img>
                </div>
            </div>
        </div>
    );
}

export default AdminAllDorm;