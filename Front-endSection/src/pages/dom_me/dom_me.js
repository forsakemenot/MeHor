import React, { useState, useEffect } from "react";
import './dom_me.css';

import { Link, useParams } from "react-router-dom";
import city from '../../img/city.svg';
import ListDormMe from "../../components/ListDormMe/ListDormMe"
// import warningBW from '../../img/warning-bw.svg';

function DomMe() {
    const { UserId } = useParams()
    const [descDorm, setDescDorm] = useState({})
    const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
    const status = [{
        name: "หอพักสันติ",
        status: false,
        update: ""
    },
    {
        name: "หอพัก",
        status: true,
        update: ""
    }]
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
        fetch('http://103.13.231.22:5000/api/dorm/dormById/' + UserId, optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res.dorm) {
                    setDescDorm(res.dorm)
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
                        <img alt="" className="img_doc" src={city} />
                        <span className="text_header">ประกาศหอพักของฉัน</span>
                    </div>

                    <div className="add_room">
                        <Link to="/AddDorm"><button id="btn_continue" style={{ width: '13vw' }}>+ ลงประกาศหอพัก</button></Link>
                    </div>
                </div>

                <div className="apartment_success d-flex">
                     <ListDormMe data={descDorm} />     
                </div>
            </div>
        </div>
    );
}
export default DomMe;