import React from "react";
import './dom_me.css';
import '../../App.css';

import { Link } from "react-router-dom";
import city from '../../img/city.svg';
import ListDormMe from "../../components/ListDormMe/ListDormMe"
// import warningBW from '../../img/warning-bw.svg';

function DomMe() {
    const status = [{
        name: "หอพักสันติ",
        status: false,
        update: "04/02/2564"
    },
    {
        name: "หอพักสันติ",
        status: false,
        update: "04/02/2564"
    }]
    return (
        <div id="form_bg" className="d-flex justify-center">
            <div className="dom_me d-flex">
                <div className="header d-flex">
                    <div className="header_awar d-flex">
                        <img alt="" className="img_doc" src={city} />
                        <span className="text_header">ประกาศหอพักของฉัน</span>
                    </div>

                    <div className="add_room">
                        <Link to="/AddDom"><button id="btn_continue" style={{ width: '13vw' }}>+ ลงประกาศหอพัก</button></Link>
                    </div>
                </div>

                <div className="apartment_success d-flex">
                    {
                        status.map(function (element,index) {
                            return <ListDormMe data={element} />
                        })
                    }
                    {/* <ListDormMe data={status[0]} /> */}
                </div>
            </div>
        </div>
    );
}
export default DomMe;