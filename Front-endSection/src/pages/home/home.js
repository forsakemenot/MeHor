import HomeImg from './../../img/Icon-open-home.svg';
import HeartImg from './../../img/Icon-awesome-heart.svg';
import Plus from './../../img/Plus.svg';
import minus from './../../img/minus.svg';
import React, { useState } from 'react';
import './home.css';
import './../../App.css';
import { Link } from "react-router-dom";
import DomList from "../../components/DomList/DomList";
function Home() {
    const [activeBoxPrice, setActiveBoxPrice] = useState(false);
    const [activeBoxConvenient, setActiveBoxConvenient] = useState(false);
    const [activeBoxCommonFee, setActiveBoxCommonFee] = useState(false);
    const [activeBoxSeeMore, setActiveBoxSeeMore] = useState(false);
    const dom = [{
        name: "หอพักกอบัว (หอพักหญิง)",
        desc: ["มัดจำ 5000 บาท จ่ายล่วงหน้า 1 เดือน", "มี wifi 15 mdps", "น้ำ 18 ไฟ 7", "กุญแจชุดละ 300", "มี 2 เตียง(3.5 ฟุต)", "เบอร์ 02-326-9220 (เจ้าของ)"],
        price: "฿ 3200 - 3700 / เดือน",
        img: "http://dummyimage.com/450x285/",
        HeartImg: HeartImg

    },
    {
        name: "ชื่อหอที่ต้องการ",
        desc: ["รายละเอียด - 1", "รายละเอียด - 2", "รายละเอียด - 3", "รายละเอียด - 4", "รายละเอียด - 5", "รายละเอียด - 6"],
        price: "฿ ราคา / เดือน",
        img: "http://dummyimage.com/450x285/",
        HeartImg: HeartImg

    },
    {
        name: "ชื่อหอต้องการ",
        desc: ["รายละเอียด - 1", "รายละเอียด - 2", "รายละเอียด - 3", "รายละเอียด - 4", "รายละเอียด - 5", "รายละเอียด - 6"],
        price: "฿ ราคา / เดือน",
        img: "http://dummyimage.com/450x285/",
        HeartImg: HeartImg

    },
    {
        name: "ชื่อหอต้องการ",
        desc: ["รายละเอียด - 1", "รายละเอียด - 2", "รายละเอียด - 3", "รายละเอียด - 4", "รายละเอียด - 5", "รายละเอียด - 6"],
        price: "฿ ราคา / เดือน",
        img: "http://dummyimage.com/450x285/",
        HeartImg: HeartImg

    }
    ]

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
    return (

        <div>
            <div className="map_info">
                <Link to="/AddDom"><button className="btn_link_add_dom bg-main">+ ลงประกาศหอพัก</button></Link>
            </div>
            <div className="search_dom d-flex">
                <input className="kanit" type="text" placeholder=" ค้นหา ชื่อที่พัก, ชื่อโซน"></input>
                <button className="color-white bg-main kanit">ค้นหา</button>
            </div>
            <div className="dom_list d-flex">
                <div className="top_dom_list">
                    <div className="text_top_dom_list">
                        <span className="color-main">ที่พักทั้งหมด</span>
                        <img alt="" src={HomeImg} />
                    </div>

                </div>
                <div className="all_disc d-flex">
                    <div className="div_disc">                        
                        {
                            dom.map(function (element, index) {
                                return <DomList data={element} />
                            })
                        }
                    </div>
                    <div className="filter_dropbox">
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>ราคา</span>
                            <img alt="" src={activeBoxPrice ? minus : Plus} onClick={togglePrice} />
                        </div>
                        {
                            activeBoxPrice === true &&

                            <div>
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price"></input>
                                    <span className="color-main">ทุกราคา</span>
                                </div>
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price"></input>
                                    <span className="color-main">รายเดือน</span>
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
                                    <span className="color-main">รายวัน</span>
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
        </div>

    );
}

export default Home;