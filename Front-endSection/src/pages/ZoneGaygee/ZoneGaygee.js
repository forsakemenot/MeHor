import React, { useState, useEffect, useMemo } from 'react';
import HomeImg from './../../img/Icon-open-home.svg';
import Plus from './../../img/Plus.svg';
import minus from './../../img/minus.svg';
import './../../App.css';
import { Link, useLocation } from "react-router-dom";
import DomList from "../../components/DomList/DomList";
import Footer from "../../components/Footer/Footer"
import bgZone from "../../img/zone_banner_keki.jpg"

function ZoneGaygee() {
    const [activeBoxPrice, setActiveBoxPrice] = useState(false);
    const [activeBoxConvenient, setActiveBoxConvenient] = useState(false);
    const [activeBoxCommonFee, setActiveBoxCommonFee] = useState(false);
    const [activeBoxSeeMore, setActiveBoxSeeMore] = useState(false);
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
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    useEffect(() => {

        fetch('https://mehor-backend.herokuapp.com/api/dorm/alldormIsApprove', optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res[0].dorm) {
                    setDescDorm(res);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    function togglePrice() {
        setActiveBoxPrice(!activeBoxPrice);
    }
    function toggleConvenient() {
        setActiveBoxConvenient(!activeBoxConvenient);
    }
    function toggleCommonFee() {
        setActiveBoxCommonFee(!activeBoxCommonFee);
    }
    function toggleSeeMore() {
        setActiveBoxSeeMore(!activeBoxSeeMore);
    }
    const dormBox = useMemo(
        () => {
            // if (query.get("zone") === "Nikom") {
            //     return (
            //         descDorm?.map(function (element, index) {
            //             console.log(element.dorm);
            //             return<> {descDorm.dorm_zone === "Nikom" &&
            //                     <DomList data={element} />
            //                 }
            //             </>

            //         })
            //     )
            // }
            // else 

            if (descDorm ?? descDorm[0].dorm) {
                return (
                    descDorm?.map(function (element, index) {
                        if (element.dorm.dorm_zone === "Geygee") {
                            return <DomList data={element} />
                        }


                    })
                )
            }
            return false
        }, [descDorm]
    )
    return (
        <div className="d-flex flex-column">
            <img alt="" src={bgZone} />
            {/* หอพักทั้งหมด */}
            <div className="dom_list d-flex flex-wrap justify-content-center">
                <div className="frame_home">
                    <div className="search_home mt-2-v d-none">
                        <div className="search_dorm">
                            <input className="kanit" type="text" placeholder=" ค้นหา ชื่อที่พัก, ชื่อโซน"></input>
                            <button className="color-white bg-main kanit">ค้นหา</button>
                        </div>
                        <Link to="/AddDorm"><button className="annouce_dorm ml-1-v color-white bg-main d-flex align-items-center justify-content-center">+ ลงประกาศหอพัก</button></Link>
                    </div>
                    <div className="top_dom_list position-relative mt-1-5-v">
                        <div className="position-absolute line_back_home bg-main w-75"></div>
                        <div className="text_top_dom_list">
                            <span className="color-main">ที่พักทั้งหมด</span>
                            <img alt="" src={HomeImg} />
                        </div>
                    </div>
                </div>

                <div className="all_disc d-flex">
                    <div className="div_disc">
                        {dormBox}
                    </div>
                    <div className="filter_dropbox position-relative d-none">
                        <div className="position-absolute line_filter"></div>
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>ราคา</span>
                            <img alt="" className="img_plus" src={activeBoxPrice ? minus : Plus} onClick={togglePrice} />
                        </div>
                        {
                            activeBoxPrice === true &&

                            <div>
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price" className="radio_type_home"></input>
                                    <span className="color-main ml-0-5-v">ทุกราคา</span>
                                </div>
                                <div className="d-flex align-center mt-0-5-v">
                                    <input type="radio" name="filter_price" className="radio_type_home"></input>
                                    <span className="color-main ml-0-5-v">ราคา</span>
                                </div>
                                <div className="d-flex align-center checkbox_price">
                                    <input type="checkbox" name=""></input>
                                    <span>น้อยกว่า 2000 บาท</span>
                                    <input type="checkbox" name=""></input>
                                    <span>2000 - 4000 บาท</span>
                                    <input type="checkbox" name=""></input>
                                    <span>4000 - 6000 บาท</span>
                                    <input type="checkbox" name=""></input>
                                    <span>มากกว่า 6000 บาท</span>
                                </div>
                            </div>
                        }
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>สิ่งอำนวยความสะดวก</span>
                            <img alt="" className="img_plus" src={activeBoxConvenient ? minus : Plus} onClick={toggleConvenient} />
                            {
                                activeBoxConvenient === true &&
                                <div className="d-flex align-center checkbox_convenient mt-0-5-v">
                                    <input type="checkbox" name=""></input>
                                    <span>เครื่องปรับอากาศ</span>
                                    <input type="checkbox" name=""></input>
                                    <span>พัดลม</span>
                                    <input type="checkbox" name=""></input>
                                    <span>เครื่องทำน้ำอุ่น</span>
                                    <input type="checkbox" name=""></input>
                                    <span>เตียง โต๊ะ ตู้เสื้อผ้า</span>
                                    <input type="checkbox" name=""></input>
                                    <span>Internet / wifi</span>
                                    <input type="checkbox" name=""></input>
                                    <span>TV</span>
                                    {
                                        activeBoxSeeMore === true &&
                                        <div className="d-flex align-center checkbox_convenient">
                                            <input type="checkbox" name=""></input>
                                            <span>Truevision</span>
                                            <input type="checkbox" name=""></input>
                                            <span>ซิงค์ล้างจาน</span>
                                            <input type="checkbox" name=""></input>
                                            <span>ตู้เย็น</span>
                                            <input type="checkbox" name=""></input>
                                            <span>เคเบิลทีวี / ดาวเทียม</span>
                                        </div>
                                    }
                                    <div className="d-flex see_more align-center" onClick={toggleSeeMore} >
                                        <img alt="" src={activeBoxSeeMore ? minus : Plus} />
                                        <span>ดูเพิ่มเติม</span>
                                    </div>

                                </div>
                            }
                        </div>
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>ส่วนกลาง</span>
                            <img alt="" className="img_plus" src={activeBoxCommonFee ? minus : Plus} onClick={toggleCommonFee} />
                            {
                                activeBoxCommonFee === true &&
                                <div className="d-flex align-center checkbox_common_fee mt-0-5-v">
                                    <input type="checkbox" name=""></input>
                                    <span>ที่จอดรถ</span>
                                    <input type="checkbox" name=""></input>
                                    <span>ระบบ Keycard</span>
                                    <input type="checkbox" name=""></input>
                                    <span>กล้องวงจรปิด (CCTV)</span>
                                    <input type="checkbox" name=""></input>
                                    <span>เครื่องซักผ้า</span>
                                    <input type="checkbox" name=""></input>
                                    <span>ไมโครเวฟ</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default ZoneGaygee;