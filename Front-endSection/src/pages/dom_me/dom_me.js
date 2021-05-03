import React, {useState, useEffect} from "react";
import './dom_me.css';
import '../../App.css';

import { Link } from "react-router-dom";

import city from '../../img/city.svg';
// import warningBW from '../../img/warning-bw.svg';

function DomMe() {
    const [dorm, setDorm] = useState()
    const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
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
     useEffect(() => {
        console.log("useEffect");
        fetch('http://localhost:5000/api/dorm/dorm', optionsGet())
           .then(res => res.json())
           .then(res => {
              if (res.dorm) {
                 setDorm(res.dorm)
                 console.log(res);
              }
           })
           .catch(error => {
              console.log(error);
  
           })
  
     }, []);
    return (
        <div id="form_bg" className="d-flex justify-center">
            <div className="dom_me d-flex">
                <div className="header d-flex">
                    <div className="header_awar d-flex">
                        <img alt="" className="img_doc" src={city}/>
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
                            <div className="static_box d-flex align-baseline">
                                <p className="static_text">ชื่อหอพัก : </p>
                                <p className="detail_text">{dorm?.dorm_name}</p>
                            </div>

                            <div className="static_box d-flex align-baseline">
                                <p className="static_text">สถานะ : </p>
                                <p className="detail_status">รอการตรวจสอบ</p>
                            </div>
                        </div>
                        <div>
                            <select>
                                <option>แก้ไข</option>
                                <option>ลบ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DomMe;