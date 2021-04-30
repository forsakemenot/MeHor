import React, { useState } from 'react';
import './../admin_user/admin_user.css';
import './../../../App.css';

import bin from './../../../img/metro-bin.svg'

function User() {
    return (
        <div className="dorm_component card-body">
            <div className="row dorm_box align-items-center text-secondary">
                <div className="col-1">
                    <p className="m-0 text_label">1</p>
                </div>
                <div className="col-3">
                    <p className="m-0 text_label">Thanopon Matikanon</p>
                </div>
                <div className="col-3">
                    <p className="m-0 text_label">ผู้เช่า</p>
                </div>
                <div className="col-4">
                    <p className="m-0 text_label">20 / 4 /2021</p>
                </div>
                <div className="col-1 d-flex justify-evenly">
                    <img src={bin} className="img_admin_edit"></img>
                </div>
            </div>
        </div>
    );
}

export default User;