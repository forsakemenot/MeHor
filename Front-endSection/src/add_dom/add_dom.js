import React from "react";
import './add_dom.css';
import './../App.css';

import city from './../img/city.svg';
import gps from './../img/crosshair.svg';
function AddDom() {
    return (
        <div className="d-flex justify-center">
            <div  className="bg_test">
                <div className="form_dom">
                    <div className="d-flex" style={{paddingLeft: '3%'}}>
                        <img className="img_formdom" src={city}/>
                        <p className="text_header">ข้อมูลที่พัก</p>
                    </div>
                    <div id="main_form" className="d-flex">
                            <p>ชื่อที่พัก</p>
                            <input type="text"></input>
                    </div>
                    <div id="main_form" className="d-flex">
                            <p>ชื่อที่พัก (ภาษาอังกฤษ)</p>
                            <input type="text"></input>
                    </div>
                    <div id="main_form" className="d-flex">
                            <p>ประเภทที่พัก</p>
                            <select>
                                <option>-- เลือกประเภทที่พัก --</option>
                                <option value="apartment">หอพัก</option>
                                <option value="condo">คอนโด</option>
                            </select>
                    </div>

                    {/* address form */}
                    <div id="main_form" className="d-flex" style={{marginTop : '3%'}}>
                        <p>ที่อยู่</p>
                        <div className="d-flex">
                            <div id="address_form">
                                <p>เลขที่</p>
                                <input type="text"></input>
                            </div>
                            <div id="address_form">
                                <p>ซอย</p>
                                <input type="text"></input>
                            </div>
                            <div id="address_form">
                                <p>ถนน</p>
                                <input type="text"></input>
                            </div>
                        </div>
                        <div className="d-flex" style={{marginTop : '2%'}}>
                            <div id="address_form">
                                <p>จังหวัด</p>
                                <input type="text"></input>
                            </div>
                            <div id="address_form">
                                <p>อำเภอ/เขต</p>
                                <input type="text"></input>
                            </div>
                            <div id="address_form">
                                <p>ตำบล/แขวง</p>
                                <input type="text"></input>
                            </div>
                            <div id="address_form">
                                <p>รหัสไปรษณีย์</p>
                                <input type="text"></input>
                            </div>
                        </div>
                    </div>

                    {/* map */}
                    <div id="main_form" className="d-flex" style={{marginTop : '3%'}}>
                        <p>แผนที่</p>
                        <button className="btn_gps"><img src={gps} style={{width : '7%', marginRight : '5%'}}/>ค้นหาจากตำแหน่งปัจจุบันของคุณ</button>
                        <div style={{backgroundColor : '#ffe4e4',
                                     width : '50vw',
                                     height : '20vw',
                                     marginTop : '1%'}}>

                        </div>
                    </div>

                    {/* detail apartment */}
                    <div id="main_form" className="d-flex" style={{marginTop : '3%'}}>
                        <p>รายละเอียด</p>
                        <div className="d-flex">
                            <button id="btn_detail">Bold</button>
                            <button id="btn_detail">Italic</button>
                            <button id="btn_detail">Underline</button>
                            <button id="btn_detail">List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddDom;