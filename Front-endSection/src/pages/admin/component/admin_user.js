import React, { useState } from 'react';
import './../admin_user/admin_user.css';
import './../../../App.css';

import bin from './../../../img/metro-bin.svg'

function User({Data}) {
    return (
        <div className="dorm_component card-body">
            <div className="row dorm_box align-items-center text-secondary">
                <div className="col-1">
                    <span className="text_label">1</span>
                </div>
                <div className="col-3">
                    <span className="text_label">{Data?.firstname}  {Data?.surname}</span>
                </div>
                <div className="col-3">
                    <span className="text_label">{Data?.role}</span>
                </div>
                <div className="col-4">
                    <span className="text_label">{Data?.email}</span>
                </div>
                {/* <div className="col-1 d-flex justify-evenly">
                    <img src={bin} className="img_admin_edit"></img>
                </div> */}
            </div>
        </div>
    );
}

export default User;