import React, { useState } from 'react';
import '../admin_form/admin_form.css';
import './../../../App.css';

import bin from '../../../img/metro-bin.svg';

function detail_typeRoom() {
    return (
        <div className="py-1-v d-flex w-100">
            <span className="w-30 text_label">ประเภทห้อง</span>
            <span className="w-20 text_label">ขนาดห้อง</span>
            <span className="w-15 text_label">ราคา</span>
            <span className="w-35 text_label">รายละเอียด</span>
            <img alt="" src={bin} className="w-2"></img>
        </div>
    );
}
export default detail_typeRoom;