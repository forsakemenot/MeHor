import React, { useState, useEffect } from "react";
import '../profile/profile.css';
import '../../App.css';
import photo from '../../img/add-a-photo.svg'
import account from '../../img/account.svg'
import key from '../../img/key.svg'

function Profile() {
    
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
    const options = data => {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        };
    };
    const optionsGet = data => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            method: 'get',
            // body: JSON.stringify(data)
        };
    };
    const optionsPatch = data => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            method: 'patch',
            body: JSON.stringify(data)
        };
    };

    const HandleSubmitUpdate = (evt) => {
        fetch('http://103.13.231.22:5000/api/users/signup', options(user))
            .then(res => res.json())
            .then(res => {

                console.log(res);
                if (res.success) {
                    window.location.reload();
                }
                else if (res.errors) {
                    
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
    
    console.log(token);
    useEffect(() => {
        console.log("useEffect");
        fetch('http://localhost:5000/api/users/userById', optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res.user) {
                    setUser(res.user)
                    console.log(user);
                }
                console.log(user);
            })
            .catch(error => {
                console.log(error);

            })

    }, []);

    return (
        <div className="d-flex justify-center">
            <div className="bg_profile d-flex w-50">

                {/* tab profile */}
                {/* <div className="menu_profile">
                    <div className="account d-flex">
                        <img alt="" src={account} className="img_menuProfile"></img>
                        <p>บัญชีของฉัน</p>
                    </div>
                    <div className="security d-flex">
                        <img alt="" src={key} className="img_menuProfile"></img>
                        <p>บัญชีของฉัน</p>
                    </div>
                </div> */}
                <form onSubmit={HandleSubmitUpdate}>
                    <div className="info_profile d-flex justify-content-center">
                        <div className="d-flex flex-column">
                            <div>
                                <p className="text_headerProfile">แก้ไขข้อมูลส่วนตัว</p>
                            </div>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="img_profile d-flex">
                                    <div className="img_user"></div>
                                    <div className="btn_uploadImg d-flex">
                                        <p>อัพโหลดภาพโปรไฟล์</p>
                                        <img alt="" className="img_photo" src={photo}></img>
                                    </div>
                                </div>
                                {/* input profile */}
                                <div className="edit_profile d-flex align-items-center">
                                    <div className="edit_info">
                                        <p className="text_input">ชื่อ</p>
                                        <input className="input_profile d-flex" value={user.firstname}></input>
                                    </div>
                                    <div className="edit_info">
                                        <p className="text_input">นามสกุล</p>
                                        <input className="input_profile d-flex" value={user.surname}></input>
                                    </div>
                                    <div className="edit_info">
                                        <p className="text_input">เบอร์โทรศัพท์</p>
                                        <input className="input_profile d-flex" ></input>
                                    </div>
                                </div>
                                <div className="d-flex justify-end mb-4">
                                    <button type="submit" className="btn_login">อัพเดต</button>
                                </div>
                            </div>

                            {/* tab security */}
                            {/* <div className="security_form">
                            <p>การเปลี่ยนรหัสผ่าน</p>
                            <div className="edit_info">
                                <p className="text_input">ใส่รหัสผ่านเดิม</p>
                                <input className="input_security d-flex"></input>
                            </div>
                            <div className="edit_info">
                                <p className="text_input">เปลี่ยนรหัสผ่านใหม่</p>
                                <input className="input_security d-flex"></input>
                            </div>
                            <div className="edit_info">
                                <p className="text_input">ยืนยันรหัสผ่านใหม่</p>
                                <input className="input_security d-flex"></input>
                            </div>
                            <div className="d-flex justify-start mt-1 ml-4">
                                <div className="btn_update d-flex">อัพเดตรหัสผ่าน</div>
                            </div>
                        </div> */}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Profile;