import React from 'react';
import './../admin_all_dorm/admin_all_dorm.js';
import './../../../App.css';
import { Link } from "react-router-dom";
import bin from './../../../img/metro-bin.svg'
import edit from './../../../img/edit.svg'
import eye from './../../../img/eye.svg'

function AdminAllDorm({ dataAllDorm }) {
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
                    <p className="m-0 text_label">{dataAllDorm?.dorm_name}</p>
                </div>
                <div className="col-2">
                    <p className="m-0 text_label">{dataAllDorm?.dorm_zone}</p>
                </div>
                <div className="col-2">
                    <p className="m-0 text_label">4 / 13 /2021</p>
                </div>
                <div className="col-2 d-flex justify-evenly">
                    <Link to={`/AdminLinkForm/` + dataAllDorm._id}><img alt="" src={eye} className="img_admin_edit pointer" /></Link>
                </div>
            </div>
        </div>
    );
}

export default AdminAllDorm;