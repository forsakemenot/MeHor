import React from "react";
import './dom_me.css';
import './../App.css';

import { Link } from "react-router-dom";

import city from './../img/city.svg';
import warningBW from './../img/warning-bw.svg';

function DomMe() {
    return (
        <div id="form_bg" className="d-flex justify-center">
            <div className="dom_me d-flex">
                <div className="header d-flex">
                    <div className="header_awar d-flex">
                        <img className="img_doc" src={city}/>
                        <p className="text_header">ประกาศหอพักของฉัน</p>
                    </div>

                    <div className="add_room">
                        <Link to="/AddDom"><button id="btn_continue" style={{width: '13vw'}}>+ ลงประกาศหอพัก</button></Link>
                    </div>
                </div>

                <div className="apartment_success d-flex">
                    {/* <img src={warningBW} style={{width: '2vw', margin: '0 1% 0 0'}}></img>
                    <p>คุณยังไม่มีประกาศของหอพัก</p> */}

                    <div className="test_check">
                        <div className="img_test"></div>
                        <div className="detail_check">
                            <div className="d-flex align-baseline">
                                <p>ชื่อหอพัก : </p>
                                <p className="detail_db">หอพักสันติ</p>
                            </div>
                            <p>สถานะ : </p>
                            <p>การปรับปรุง : </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DomMe;