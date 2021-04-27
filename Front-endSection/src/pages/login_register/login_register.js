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
        // console.log(userRegisDetails);
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
                else{
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
                        <div className="d-flex text_from">
                            <p>E-mail</p>
                            <div>
                                <input type="text"
                                    onChange={handleInputChange}
                                    name="email"
                                ></input>
                                <img id="img_email" alt="" src={email} />
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>Password</p>
                            <div>
                                <input type="text"
                                    onChange={handleInputChange}
                                    name="password"
                                ></input>
                                <img id="img_lock" alt="" src={lock} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <button type="submit" className="btn_login">เข้าสู่ระบบ</button>
                        </div>
                        <div className="d-flex">
                            <p className="text_forget"><Link to="/">ลืมรหัสผ่าน</Link> ใช่หรือไม่</p>
                        </div>
                    </form>
                }
                {
                    activeTab === "tab2" &&
                    <form onSubmit={HandleSubmitRegis}>
                        <div>
                            <div className="d-flex text_from direction-row">
                                <div className="flex-50">
                                    <p>ชื่อ</p>
                                    <div>
                                        <input name="firstname" onChange={handleInputChangeRegis} type="text"></input>
                                        <img id="img_man1" alt="" src={man} />
                                    </div>
                                </div>
                                <div className="flex-50" id="input_surname">
                                    <p>นามสกุล</p>
                                    <div>
                                        <input name="surname" onChange={handleInputChangeRegis} type="text"></input>
                                        <img id="img_man2" alt="" src={man} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <p>E-mail</p>
                                <div>
                                    <input name="email" onChange={handleInputChangeRegis} type="text"></input>
                                    <img id="img_email2" alt="" src={email} />
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <p>Password</p>
                                <div>
                                    <input name="password" onChange={handleInputChangeRegis} type="text"></input>
                                    <img id="img_lock" alt="" src={lock} />
                                </div>
                            </div>
                            <div className="d-flex text_from">
                                <p>Confirm Password</p>
                                <div>
                                    <input name="confirmPassword" onChange={handleInputChangeRegis} type="text"></input>
                                    <img id="img_lock" alt="" src={lock} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>Password</p>
                            <div>
                                <input type="password"></input>
                                <img id="img_lock" alt="" src={lock} />
                            </div>
                        </div>
                        <div className="d-flex text_from">
                            <p>Confirm Password</p>
                            <div>
                                <input type="password"></input>
                                <img id="img_lock" alt="" src={lock} />
                            </div>
                        </div>
                    </form>
                }
            </div>
        </div>

    );
}


export default Login_register;