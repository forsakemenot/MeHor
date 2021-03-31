import logo from './../img/MeHor.svg';
import email from './../img/Icon-zocial-email.svg';
import lock from './../img/Icon-material-lock.svg';
import React from "react";
import './login_register.css';
import './../App.css';
import { Link } from "react-router-dom";
function login_register() {
    return (

        <div>
            <div className="space_stand_logo d-flex justify-center bg-main">
                <div className="space_logo bg-white">
                    <img alt="" src={logo} />
                </div>
            </div>
            <div className="box_login">
                <div className="d-flex">
                    <div className="tab_child text_tab active">เข้าสู่ระบบ</div>
                    <div className="tab_child text_tab">สมัครสมาชิก</div>
                </div>
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
        </div>

    );
}

export default login_register;