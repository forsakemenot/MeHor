import React, { useState, useEffect, useMemo } from "react";
import './../admin_approve/admin_approve.css';
import './../../../App.css';

import check from './../../../img/check.svg'
import cross from './../../../img/cross.svg'
import search from '../../../img/search-admin.svg'

import DormApprove from '../component/dorm_approve'
import NavbarAdmin from '../../../components/NavbarAdmin/NavbarAdmin.js'

function AdminApprove() {
    const [descDorm, setDescDorm] = useState([]);
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
    useEffect(() => {
        console.log("useEffect");
        fetch('https://mehor-backend.herokuapp.com/api/dorm/alldormIsDone', optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res) {
                    setDescDorm(res);
                    // console.log(res.dorm);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const HandleApprove = (evt) => {
        console.log(descDorm[evt].dorm._id);
        descDorm[evt].dorm.isApprove = true
        fetch('https://mehor-backend.herokuapp.com/api/dorm/dormById/' + descDorm[evt].dorm._id, options(descDorm[evt]))
            .then(res => res.json())
            .then(res => {
                console.log(res);
                descDorm[evt] = res
                setDescDorm(descDorm)
                alert("Update success!!!")
                window.location.reload()
            })
            .catch(error => {
                console.log(error);
            })
    }
    const DormListApprove = useMemo(
        () => {
            if (descDorm[0]?.dorm) {
                return (
                    descDorm.map(function (element, index) {
                        console.log(element.dorm.isApprove);
                        if (!element.dorm.isApprove){
                            return <DormApprove dataAllDorm={element.dorm} index={index} HandleApprove={HandleApprove} />
                        }
                    })
                )
            }
            return
        }, [descDorm]

    )


    return (
        <div className="d-flex bg-admin">
            <div className="w-20 d-flex">
                <NavbarAdmin pages={1} />
            </div>
            <div className="d-flex flex-column w-100 color-main align-items-center">
                <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
                    <span>รายการหอพักรออนุมัติ</span>
                    <span>Welcome! - ADMIN POWER</span>
                </div>
                <div className="w-85 form_panel flex-column p-1-v mt-2-v mb-2-v align-items-center">
                    <span>รายการหอพักรออนุมัติ</span>
                    <div className="d-none align-items-center w-100 py-0-5-v d-none">
                        <div className="w-50 d-flex align-items-center justify-content-start position-relative">
                            <input className="search_dorm_admin fs-1-v px-0-5-v" type="text" placeholder="รายการหอพักทั้งหมดในระบบ"></input>
                            <img alt="" src={search} className="position-absolute image-search-admin-approve" />
                        </div>
                        <div className="d-flex w-60 justify-content-end">
                            <div className="d-flex justify-content-end align-items-center w-50">
                                <span className="text-dark fs-1-v">โซน :</span>
                                <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                                    <option>ทั้งหมด</option>
                                    <option>วีคอนโด</option>
                                    <option>เกกี</option>
                                    <option>RNP</option>
                                    <option>FBT</option>
                                    <option>จินดา</option>
                                </select>
                            </div>
                            <div className="d-flex justify-content-end align-items-center w-40">
                                <span className="text-dark fs-1-v">แสดงโดย :</span>
                                <select className="filter_admin ml-1-v px-1-v color-main fs-0-8-v">
                                    <option>วันที่เพิ่ม (ล่าสุด)</option>
                                    <option>วันที่เพิ่ม (เก่าสุด)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {DormListApprove}
                </div>
            </div>
        </div>
    );
}
export default AdminApprove;