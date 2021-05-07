import React, { useState, useEffect } from "react";
import '../profile/profile.css';

function Profile() {
    // const [selectedFile, setSelectedFile] = useState(null);
    const [file, setFile] = React.useState("");
    const [userid, setUserid] = useState('');
    const [user, setUser] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');

    const ImageThumb = ({ image }) => {
        if (image) {return <img src={URL.createObjectURL(image)} className="img_user"/>}  
    };

    const options = data => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            method: 'PATCH',
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
    const optionsPost = data => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            method: 'post',
            // body: JSON.stringify(data)
            body: data
        };
    };
    useEffect(() => {
        console.log("useEffect");
        fetch('https://mehor-backend.herokuapp.com/api/users/userById/', optionsGet())
            .then(res => res.json())
            .then(res => {
                const obj = {};
                for (const [key, value] of Object.entries(res.user)) {
                    // console.log(key);
                    // console.log(value);  
                    if (key !== "password") {
                        if (key !== "email") {
                            if (key !== "role") {
                                if (key !== "_id") {
                                    if (key !== "__v") obj[key] = value
                                }
                            }
                        }
                    }

                }
                setUserid(res.user._id)
                setUser(obj)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    const handleInputChange = (e) => {
        console.log(e.target.name);
        const field = e.target.name;
        const value = e.target.value;
        setUser({
            ...user,
            [field]: value
        });
    }
    const HandleSubmitUpdate = (evt) => {
        console.log(user);
        evt.preventDefault();
        fetch('https://mehor-backend.herokuapp.com/api/users/userById/', options(user))

            .then(res => res.json())
            .then(res => {
                console.log(res.user);
                if (res.user) {
                    window.location.reload();
                    console.log('updated');
                    alert('updated')
                }
                else if (res.errors) {
                    alert(res.error)
                }
            })
            .catch(error => {
                console.log(error);

            })
        evt.preventDefault();
    }

    // console.log(token);
    function handleUpload(event) {
        setFile(event.target.files[0]);
    }
    

    return (
        <div className="d-flex justify-center">
            <div className="bg_profile d-flex ">

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
                                    {/* <div className="img_user"></div> */}
                                    {file && <ImageThumb image={file} />}
                                    <div className="align-items-center d-flex justify-content-center">
                                        <input onChange={handleUpload} multiple id="input-b1" name="input-b1" type="file" data-browse-on-zone-click="true" />
                                    </div>
                                </div>
                                {/* input profile */}
                                <div className="edit_profile d-flex align-items-center">
                                    <div className="edit_info">
                                        <p className="text_input">ชื่อ</p>
                                        <input onChange={handleInputChange} className="input_profile d-flex" value={user.firstname} name="firstname"></input>
                                    </div>
                                    <div className="edit_info">
                                        <p className="text_input">นามสกุล</p>
                                        <input onChange={handleInputChange} className="input_profile d-flex" value={user.surname} name="surname"></input>
                                    </div>
                                    <div className="edit_info">
                                        <p className="text_input">เบอร์โทรศัพท์</p>
                                        <input onChange={handleInputChange} className="input_profile d-flex" name="phone"></input>
                                    </div>
                                </div>
                                <div className="d-flex justify-end mb-4">
                                    <button type="submit" onClick={HandleSubmitUpdate} className="btn_login">อัพเดต</button>
                                </div>
                            </div>
{/* 
                            <div id="upload-box">
                                <input type="file" onChange={handleUpload} />
                                <p>Filename: {file.name}</p>
                                <p>File type: {file.type}</p>
                                <p>File size: {file.size} bytes</p>
                                {file && <ImageThumb image={file} />}
                            </div> */}



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