import logo from './../img/MeHor.svg';
import email from './../img/Icon-zocial-email.svg';
import lock from './../img/Icon-material-lock.svg';
import man from './../img/Icon-awesome-user-alt.svg';
import React, { useState } from 'react';
import './login_register.css';
import './../App.css';
import { Link } from "react-router-dom";

function Login_register() {
    // state = {
    //     activeTab: 'tab1'
    // }
    const [activeTab, setActiveTab] = useState("tab2");
    return (

        <div>
            <div className="space_stand_logo d-flex justify-center bg-main">
                <div className="space_logo bg-white">
                    <img alt="" src={logo} />
                </div>
            </div>
            <div className="box_login">
                <div className="d-flex">
                    <div onClick={() => setActiveTab("tab1")} className={`tab_child text_tab ${activeTab === "tab1" && "active"}`}>เข้าสู่ระบบ</div>
                    <div onClick={() => setActiveTab("tab2")} className={`tab_child text_tab ${activeTab === "tab2" && "active"}`}>สมัครสมาชิก</div>
                </div>
                {
                    activeTab === "tab1" &&
                    <div>
                        <div className="d-flex text_from">
                            <p>E-mail</p>
                            <div>
                                <input type="text"></input>
                                <img id="img_email" alt="" src={email} />
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>Password</p>
                            <div>
                                <input type="text"></input>
                                <img id="img_lock" alt="" src={lock} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn_login">เข้าสู่ระบบ</button>
                        </div>
                        <div className="d-flex">
                            <p className="text_forget"><Link to="/">ลืมรหัสผ่าน</Link> ใช่หรือไม่</p>
                        </div>
                    </div>
                }
                {
                    activeTab === "tab2" &&
                    <div>
                        <div className="d-flex text_from direction-row">
                            <div className="flex-50">
                                <p>ชื่อ</p>
                                <div>
                                    <input type="text"></input>
                                    <img id="img_man1" alt="" src={man} />
                                </div>
                            </div>
                            <div className="flex-50">
                                <p>นามสกุล</p>
                                <div>
                                    <input type="text"></input>
                                    <img id="img_man2" alt="" src={man} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>E-mail</p>
                            <div>
                                <input type="text"></input>
                                <img id="img_email2" alt="" src={email} />
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>Password</p>
                            <div>
                                <input type="text"></input>
                                <img id="img_lock" alt="" src={lock} />
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>Confirm Password</p>
                            <div>
                                <input type="text"></input>
                                <img id="img_lock" alt="" src={lock} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <button className="btn_login m-b-2">สมัครสมาชิก</button>
                        </div>
                    </div>
                }
            </div>
        </div>

    );
}

export default Login_register;