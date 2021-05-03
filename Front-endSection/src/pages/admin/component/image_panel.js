import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

import bin from '../../../img/metro-bin.svg';

function image_panel() {
    return (
        <div className="image mt-3">
            <div className="card border-light panel_frame">
                <div className="card-header d-flex align-items-center justify-content-between">รูปภาพทั้งหมด
                    <div className="d-flex align-items-center">
                        <input type="checkbox" className="checkbox_panel mr-2" />
                        <p className="m-0">เลือกทั้งหมด</p>
                        <img src={bin} className="ml-5"></img>
                    </div>
                </div>

                <div class="form-group p-3">
                    <select multiple class="form-control" id="exampleFormControlSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
export default image_panel;