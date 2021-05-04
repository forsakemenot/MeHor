import logo from './../../img/MeHor.png';
import email from './../../img/Icon-zocial-email.svg';
import lock from './../../img/Icon-material-lock.svg';
import man from './../../img/Icon-awesome-user-alt.svg';
import React, { useState } from 'react';
import './login_register.css';
import './../../App.css';
import { Link, useHistory } from "react-router-dom";

function Login_register() {
    const history = useHistory();

    const [activeTab, setActiveTab] = useState("tab1");
    const [userLoginDetails, setUserLoginDetails] = useState('');
    const [userRegisDetails, setUserRegisDetails] = useState('');
    const [errors, setErrors] = useState();
    const [data, setData] = useState('');

    const options = data => {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        };
    };

    const handleInputChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setUserLoginDetails({
            ...userLoginDetails,
            [field]: value
        });
    }
    const handleInputChangeRegis = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setUserRegisDetails({
            ...userRegisDetails,
            [field]: value
        });
    }

    const HandleSubmitLogin = (evt) => {
        console.log(userLoginDetails);

        fetch('http://103.13.231.22:5000/api/users/login', options(userLoginDetails))
            .then(res => res.json())
            .then(res => {
                if (res.success) {
                    console.log(res);
                    const token = res.token;
                    delete res.token;
                    localStorage.setItem('jwtToken', token);
                    setData(token);
                    history.push("/");
                    window.location.reload();
                }
            })
            .catch(error => {
                console.log(error);
            })
        evt.preventDefault();
    }
    const HandleSubmitRegis = (evt) => {
        console.log(userRegisDetails);
        fetch('http://103.13.231.22:5000/api/users/signup', options(userRegisDetails))
            .then(res => res.json())
            .then(res => {

                console.log(res);
                if (res.success) {
                    history.push("/");
                    window.location.reload();
                }
                else if (res.errors) {
                    setErrors(res.errors)
                }
                else {
                    alert('SOMETHING WENT WRONG')
                }
            })
            .catch(error => {
                console.log(error);

            })
        evt.preventDefault();
    }
    return (

        <div>
            <div className="space_stand_logo d-flex justify-center bg-main">
                <div className="space_logo bg-white">
                    <img alt="" src={logo} />
                </div>
            </div>
            <div className="box_login">
                <div className="d-flex">
                    <div onClick={() => setActiveTab("tab1")} className={`tab_child text_tab ${activeTab === "tab1" && "tab_active"}`}>เข้าสู่ระบบ</div>
                    <div onClick={() => setActiveTab("tab2")} className={`tab_child text_tab ${activeTab === "tab2" && "tab_active"}`}>สมัครสมาชิก</div>
                </div>
                {
                    activeTab === "tab1" &&
                    <form onSubmit={HandleSubmitLogin}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex text_from">
                                <span className="fs-1-v color-main py-0-5-v">E-mail</span>
                                <div>
                                    <input type="text" onChange={handleInputChange} name="email"></input>
                                    <img id="img_email" className="position-absolute" alt="" src={email} />
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <span className="fs-1-v color-main py-0-5-v">Password</span>
                                <div>
                                    <input type="password"
                                        onChange={handleInputChange}
                                        name="password"
                                    ></input>
                                    <img id="img_lock" className="position-absolute" alt="" src={lock} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <button type="submit" className="btn_login">เข้าสู่ระบบ</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <span className="text_forget fs-0-8-v"><Link to="/"><u>ลืมรหัสผ่าน</u></Link> ใช่หรือไม่</span>
                        </div>
                    </form>
                }
                {
                    activeTab === "tab2" &&
                    <form onSubmit={HandleSubmitRegis}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div className="d-flex text_from">
                                <div className="w-100 d-flex">
                                    <div className="flex-50 pt-0-5-v">
                                        <span className="fs-1-v color-main">ชื่อ</span>
                                        <div>
                                            <input name="firstname" className="mt-0-5-v" onChange={handleInputChangeRegis} type="text"></input>
                                            <img id="img_man1" alt="" src={man} />
                                        </div>
                                    </div>
                                    <div className="flex-50 pt-0-5-v" id="input_surname">
                                        <span className="fs-1-v color-main">นามสกุล</span>
                                        <div>
                                            <input name="surname" className="mt-0-5-v" onChange={handleInputChangeRegis} type="text"></input>
                                            <img id="img_man2" alt="" src={man} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <span className="fs-1-v color-main">E-mail</span>
                                <div>
                                    <input name="email" className="mt-0-5-v" onChange={handleInputChangeRegis} type="text"></input>
                                    <img id="img_email2" alt="" src={email} />
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <span className="fs-1-v color-main">Password</span>
                                <div>
                                    <input name="password" className="mt-0-5-v" onChange={handleInputChangeRegis} type="password"></input>
                                    <img id="img_lock2" alt="" src={lock} />
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <span className="fs-1-v color-main">Confirm Password</span>
                                <div>
                                    <input name="confirmPassword" className="mt-0-5-v" onChange={handleInputChangeRegis} type="password"></input>
                                    <img id="img_lock2" alt="" src={lock} />
                                </div>
                            </div>
                            <div className="d-flex align-items-center w-100 p-1-v">
                                <span className="fs-1-v color-main ml-1-v">สมัครสมาชิกในบทบาท : </span>
                                <input className="checkbox box_top" type="radio" name="role" value="General" onChange={handleInputChangeRegis} />
                                <span className="fs-1-v color-main mr-1-v">ผู้เช่า</span>
                                <input className="checkbox box_top" type="radio" name="role" value="Operator" onChange={handleInputChangeRegis} />
                                <span className="fs-1-v color-main">ผู้ประกอบการ</span>
                            </div>

                            <div className="d-flex align-center w-100 p-0-5-v ml-3-v">
                                <input className="checkbox box_bottom" type="checkbox" />
                                <span className="fs-0-8-v color-main">รับข่าวสารและโปรโมชั่นจากทางเว็บ และที่พักที่เป็นสมาชิก</span>
                            </div>
                            <div className="d-flex">
                                <button className="btn_login mb-1-v" type="submit">สมัครสมาชิก</button>
                            </div>
                        </div>
                    </form>
                }
            </div>
        </div>

    );
}


export default Login_register;
