import React from "react";
import '../profile/profile.css';
import '../../App.css';
import photo from '../../img/add-a-photo.svg'
import account from '../../img/account.svg'
import key from '../../img/key.svg'

function Profile() {
    return (
        <div className="d-flex justify-center">
            <div className="bg_profile d-flex">

                {/* tab profile */}
                <div className="menu_profile">
                    <div className="account d-flex">
                        <img alt="" src={account} className="img_menuProfile"></img>
                        <p>บัญชีของฉัน</p>
                    </div>
                    <div className="security d-flex">
                        <img alt="" src={key} className="img_menuProfile"></img>
                        <p>บัญชีของฉัน</p>
                    </div>
                </div>
                <div className="info_profile">
                    <div className="d-flex flex-column">
                        <div>
                            <p className="text_headerProfile">แก้ไขข้อมูลส่วนตัว</p>
                        </div>

                        <div className="d-flex">
                            <div className="img_profile d-flex">
                                <div className="img_user"></div>
                                <div className="btn_uploadImg d-flex">
                                    <p>อัพโหลดภาพโปรไฟล์</p>
                                    <img alt="" className="img_photo" src={photo}></img>
                                </div>
                            </div>

                            {/* input profile */}
                            <div className="edit_profile d-flex">
                                <div className="edit_info">
                                    <p className="text_input">ชื่อที่ใช้แสดงผล</p>
                                    <input className="input_profile d-flex"></input>
                                </div>
                                <div className="edit_info">
                                    <p className="text_input">ชื่อ - นามสกุลจริง</p>
                                    <input className="input_profile d-flex"></input>
                                </div>
                                <div className="edit_info">
                                    <p className="text_input">อีเมล</p>
                                    <input className="input_profile d-flex"></input>
                                </div>
                                <div className="edit_info">
                                    <p className="text_input">เบอร์โทรศัพท์</p>
                                    <input className="input_profile d-flex"></input>
                                </div>
                                <div className="d-flex justify-end">
                                    <div className="btn_update d-flex">อัพเดตข้อมูล</div>
                                </div>
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
            </div>
        </div>
    );
}    
export default Profile;