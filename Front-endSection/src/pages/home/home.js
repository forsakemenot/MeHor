import React, { useState, useEffect, useMemo } from 'react';
import HomeImg from './../../img/Icon-open-home.svg';
import HeartImg from './../../img/Icon-awesome-heart.svg';
import Plus from './../../img/Plus.svg';
import minus from './../../img/minus.svg';
import './home.css';
import './../../App.css';
import { Link } from "react-router-dom";
import DomList from "../../components/DomList/DomList";
import Footer from "../../components/Footer/Footer"

import fbt from '../../img/fbt.png';
import keki from '../../img/keki.png';
import rnp from '../../img/rnp.png';
import jinda from '../../img/jinda.png';
import nikom from '../../img/nikom.png';
import kmitl from '../../img/kmitl.png';
import shadow_fbt from '../../img/shadow-fbt.png';
import shadow_rnp from '../../img/shadow-rnp.png';
import shadow_keki from '../../img/shadow-keki.png';
import shadow_jinda from '../../img/shadow-jinda.png';
import shadow_nikom from '../../img/shadow-nikom.png';

function Home() {
    const [activeBoxPrice, setActiveBoxPrice] = useState(false);
    const [activeBoxConvenient, setActiveBoxConvenient] = useState(false);
    const [activeBoxCommonFee, setActiveBoxCommonFee] = useState(false);
    const [activeBoxSeeMore, setActiveBoxSeeMore] = useState(false);
    const [descDorm, setDescDorm] = useState({});
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
        fetch('http://103.13.231.22:5000/api/dorm/alldorm', optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res.dorm) {
                    setDescDorm(res.dorm);
                    console.log(res.dorm);
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

            if (descDorm) {
                return (
                    descDorm?.map(function (element, index) {
                        return <DomList data={element} HeartImg={HeartImg} />
                    })
                )
            }
            return

        }, [descDorm]
    )
    return (

        <div>
            <div className="map_info">
                <div className="main_kmitl">
                    <img alt="" src={kmitl}></img>
                </div>
                <div className=" map-el zone_fbt">
                    <img className="map-el-shadow zone_fbt_shd" alt="" src={shadow_fbt}></img>
                    <img className="map-el-img zone_fbt_img" alt="" src={fbt}></img>
                </div>
                <div className=" map-el zone_keki">
                    <img className="map-el-shadow zone_keki_shd" alt="" src={shadow_keki}></img>
                    <img className="map-el-img zone_keki_img" alt="" src={keki}></img>
                </div>
                <div className=" map-el zone_rnp">
                    <img className="map-el-shadow zone_rnp_shd" alt="" src={shadow_rnp}></img>
                    <img className="map-el-img zone_rnp_img" alt="" src={rnp}></img>
                </div>
                <div className=" map-el zone_jinda">
                    <img className="map-el-shadow zone_jinda_shd" alt="" src={shadow_jinda}></img>
                    <img className="map-el-img zone_jinda_img" alt="" src={jinda}></img>
                </div>
                <div className=" map-el zone_nikom">
                    <img className="map-el-shadow zone_nikom_shd" alt="" src={shadow_nikom}></img>
                    <img className="map-el-img zone_nikom_img" alt="" src={nikom}></img>
                </div>
            </div>
            <div className="dom_list d-flex">
                <div className="search_dom d-flex mt-3-v">
                    <input className="kanit" type="text" placeholder=" ค้นหา ชื่อที่พัก, ชื่อโซน"></input>
                    <button className="color-white bg-main kanit">ค้นหา</button>
                    <Link to="/AddDorm"><button className="ml-1-v color-white bg-main">+ ลงประกาศหอพัก</button></Link>
                </div>
                <div className="top_dom_list position-relative mt-1-5-v">
                    <div className="position-absolute line_back_home bg-main w-100"></div>
                    <div className="text_top_dom_list ml-6-v">
                        <span className="color-main">ที่พักทั้งหมด</span>
                        <img alt="" src={HomeImg} />
                    </div>

                </div>
                <div className="all_disc d-flex">
                    <div className="div_disc">
                        {dormBox}
                    </div>
                    <div className="filter_dropbox position-relative">
                        <div className="position-absolute line_filter"></div>
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>ราคา</span>
                            <img alt="" src={activeBoxPrice ? minus : Plus} onClick={togglePrice} />
                        </div>
                        {
                            activeBoxPrice === true &&

                            <div>
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price"></input>
                                    <span className="color-main ml-0-2-v">ทุกราคา</span>
                                </div>
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price"></input>
                                    <span className="color-main ml-0-2-v">รายเดือน</span>
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
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price"></input>
                                    <span className="color-main ml-0-2-v">รายวัน</span>
                                </div>
                                <div className="d-flex align-center checkbox_price">
                                    <input type="checkbox" name=""></input>
                                    <span>น้อยกว่า 500 บาท</span>
                                    <input type="checkbox" name=""></input>
                                    <span>500 - 1000 บาท</span>
                                    <input type="checkbox" name=""></input>
                                    <span>1000 - 1500 บาท</span>
                                    <input type="checkbox" name=""></input>
                                    <span>มากกว่า 1500 บาท</span>
                                </div>
                            </div>
                        }
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>สิ่งอำนวยความสะดวก</span>
                            <img alt="" src={activeBoxConvenient ? minus : Plus} onClick={toggleConvenient} />
                            {
                                activeBoxConvenient === true &&
                                <div className="d-flex align-center checkbox_convenient">
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
                            <img alt="" src={activeBoxCommonFee ? minus : Plus} onClick={toggleCommonFee} />
                            {
                                activeBoxCommonFee === true &&
                                <div className="d-flex align-center checkbox_common_fee">
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
            <Footer />
        </div>

    );
}

export default Home;