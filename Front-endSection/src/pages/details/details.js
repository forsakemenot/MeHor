import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import '../../App.css';
import './details.css';
import coins from "../../img/coins.svg";
import location from "../../img/icon_location.svg";
import phone from "../../img/icon_phone.svg";
import line from "../../img/icon_line.svg";
import Arrow from "../../img/Icon-arrow-drop-down.svg";
import DescInDropDown from "../../components/DescInDropDown/DescInDropDown";
import bill from "../../img/money-bill-wave.svg";
import electric from "../../img/electrician.svg";
import wifi from "../../img/wifi.svg";
import check from "../../img/money-check.svg";
import water from "../../img/water.svg";
import keycard from "../../img/keycard.svg";
import door from "../../img/Icon-door-open.svg";
import hotel from "../../img/Icon-hotel.svg";
import profile from "../../img/profile.jpg";
import confirm from "../../img/confirm.svg";
import home from "../../img/Icon-open-home.svg";
import star from "../../img/star.svg";
import eye from "../../img/eye.svg";
import clock from "../../img/clock.svg";
import heartOff from "../../img/heart-off.svg";

import ads_banner from '../../img/Ads-banner.svg';

import room from "../../img/20210321_151812.svg";
import Map from "../../components/Map/Map"
// import Comment from "../../components/CommentReview/CommentReview";
import Footer from "../../components/Footer/Footer";
function Details() {
    const { dormId } = useParams()
    const [typeRoom, setTypeRoom] = useState(false);
    const [desc, setDesc] = useState(false);
    const [morePrice, setMorePrice] = useState(false);
    const [convenient, setConvenient] = useState(false);
    const [roomType, setRoomType] = useState({});
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
        fetch('http://103.13.231.22:5000/api/dorm/roomtypebyid/' + dormId, optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res.DormType) {
                    setRoomType(res.DormType);
                    console.log(res.DormType);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    useEffect(() => {
        fetch('http://103.13.231.22:5000/api/dorm/dormById/' + dormId, optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res.Dorm) {
                    setDescDorm(res.Dorm);
                    console.log(res.Dorm);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    const desc_update = {
        view: "534",
        update: "29 มีนาคม 2564",
        img: [room, room, room, room, room]
    }
    const detailsInDorm = {
        inRoom: ["เครื่องปรับอากาศ", "เฟอร์นิเจอร์", "อินเทอร์เน็ตไร้สาย (Wifi)", "กล้องวงจารปิด (CCTV)"],
        central: ["เครื่องซักผ้า", "ตู้กดน้ำ", "กล้องวงจารปิด (CCTV)"]
    }

    function toggletypeRoom() {
        setTypeRoom(!typeRoom);
    }
    function toggleDesc() {
        setDesc(!desc);
    }
    function toggleMorePrice() {
        setMorePrice(!morePrice);
    }
    function toggleConvenient() {
        setConvenient(!convenient);
    }

    const contant = useMemo(
        () => {
            if (descDorm.dorm_address) {
                return (
                    <div className="w-45 mx-auto d-flex justify-content-start flex-wrap">
                        <div className="w-100 d-flex justify-content-around align-items-center">
                            <img alt="" className="w-10 image_contact" src={location} alt="" />
                            <span className="desc_contact w-90">{
                                descDorm.dorm_address.address_number + " " +
                                descDorm.dorm_address.street + " " +
                                descDorm.dorm_address.province + " " +
                                descDorm.dorm_address.postcode + " " +
                                descDorm.dorm_address.area
                            }</span>
                        </div>
                        <div className="w-100 d-flex justify-content-around align-items-center">
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                <img alt="" className="w-10 image_contact" src={phone} alt="" />
                                <span className="desc_contact w-90">{descDorm.owner_phone}</span>
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-around align-items-center">
                            <div className="w-100 d-flex justify-content-around align-items-center">
                                <img alt="" className="w-10 image_contact" src={line} alt="" />
                                <span className="desc_contact w-90">{descDorm.owner_line}</span>
                            </div>
                        </div>
                        <div className="w-100 d-flex">
                            <img alt="" className="w-50 py-0-5-v" src={confirm} />
                        </div>
                    </div>
                )
            }
            return
        }, [descDorm]
    )

    const price = useMemo(
        () => {
            if (roomType.dorm_type) {
                return (
                    <span className="text_price_details">ราคา <span className="color-second">{roomType.dorm_type[0].room_cost}</span> บาท/เดือน</span>
                )
            }
            return
        }, [roomType]
    )

    const tabRoomType = useMemo(
        () => {
            if (roomType.dorm_type) {
                return (
                    roomType.dorm_type.map(function (element, index) {
                        return <DescInDropDown data={element} />
                    })
                )
            }
            return
        }, [roomType]
    )
    const fullDesc = useMemo(
        () => {
            if (descDorm.dorm_address) {
                return (
                    <span>{descDorm.description}</span>
                )
            }
            return
        }, [descDorm]
    )
    const descMore = useMemo(
        () => {
            if (roomType.dorm_type) {
                return (
                    <div className="w-80 mx-auto d-flex flex-wrap">
                        <div className="w-50 d-flex flex-wrap border-right-color">
                            <div className="w-100 pl-2-v d-flex align-items-center fs-1-v pt-0-5-v">
                                <img alt="" className="w-10 size_icon_desc" alt="" src={bill} />
                                <span className="w-90 color-main "><b>ค่าเงินมัดจำ/ค่าเงินประกัน :</b> {roomType.insurance_bill}</span>
                            </div>
                            <div className="w-100 pl-2-v d-flex align-items-center fs-1-v bg-third">
                                <img alt="" className="w-10 size_icon_desc" alt="" src={electric} />
                                <span className="w-90 color-main "><b>ค่าเงินมัดจำ/ค่าเงินประกัน :</b> หน่วยละ {roomType.electric_bill} บาท</span>
                            </div>
                            <div className="w-100 pl-2-v d-flex align-items-center fs-1-v">
                                <img alt="" className="w-10 size_icon_desc" alt="" src={wifi} />
                                <span className="w-90 color-main "><b>อินเทอร์เน็ต (Wifi) :</b> {roomType.internet_bill}</span>
                            </div>

                        </div>
                        <div className="w-50 d-flex flex-wrap">
                            <div className="w-100 pl-2-v d-flex align-items-center fs-1-v pt-0-5-v">
                                <img alt="" className="w-10 size_icon_desc" alt="" src={check} />
                                <span className="w-90 color-main"><b>จ่ายล่วงหน้า :</b> {roomType.pre_paid}</span>
                            </div>
                            <div className="w-100 pl-2-v d-flex align-items-center fs-1-v bg-third">
                                <img alt="" className="w-10 size_icon_desc" alt="" src={water} />
                                <span className="w-90 color-main "><b>ค่าน้ำ หน่วยละ :</b> {roomType.water_bill} บาท</span>
                            </div>
                            <div className="w-100 pl-2-v d-flex align-items-center fs-1-v">
                                <img alt="" className="w-10 size_icon_desc" alt="" src={keycard} />
                                <span className="w-90 color-main "><b>คีย์การ์ด :</b> {roomType.keycard} บาท/ชุด</span>
                            </div>
                        </div>
                    </div>
                )
            }
            return
        }, [roomType]
    )
    return (
        <div className='my-1-auto'>
            {/* รูปหอพัก */}
            <div className="w-90 mx-auto d-flex flex-wrap">
                <div className="w-50 d-flex">
                    <div>
                        <img className="mr-1-v" alt="" src={home} />
                    </div>
                    <div className="w-30">
                        <div className="w-100 d-flex align-items-center color-main">
                            <span className="fs-1-2-v">{descDorm.dorm_name}</span>
                        </div>
                        <div className="w-100 d-flex ">
                            <img className="mr-0-5-v" alt="" src={star} />
                            <span className="color-main ">เข้าร่วมเครือข่าย สจล.</span>
                        </div>
                    </div>
                </div>
                <div className="w-50 d-flex justify-content-end  align-items-center">
                    <div className="w-40 d-flex flex-wrap justify-content-end mr-2-v">
                        <div className="w-100 d-flex align-items-center justify-content-end">
                            <img className="mr-0-5-v" alt="" src={eye} />
                            <span className="color-main">เข้าชม {desc_update.view} ครั้ง</span>
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-end">
                            <img className="mr-0-5-v" alt="" src={clock} />
                            <span className="color-main"> อัพเดตล่าสุด {desc_update.update}</span>
                        </div>
                    </div>
                    <div className="w-10">
                        <img className="w-75" alt="" src={heartOff} />
                    </div>
                </div>

                {/* รูปสไลด์เจ้าปัญหา */}
                <div id="carouselControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={desc_update.img[0]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={ads_banner} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={desc_update.img[2]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={desc_update.img[3]} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={desc_update.img[4]} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div className="w-100 d-flex justify-content-between mx-auto mt-1-v">
                    {
                        desc_update.img.map(function (element, index) {
                            return <div className="w-20 d-flex">
                                <img className="w-100" alt="" src={element} />
                            </div>
                        })
                    }
                </div>
            </div>
            {/* ช่องทางติดต่อ */}
            <div className="d-flex w-80 mx-auto py-1-5-v">
                {contant}
                <div className="w-60 d-flex justify-content-center flex-wrap">
                    <div className="w-100 d-flex align-items-center">
                        <img alt="" className="w-20 image_price_details" src={coins} alt="" />
                        {price}
                    </div>
                    <div className="w-100 d-flex h-100 mt-0-5-v">
                        <Map />
                    </div>
                </div>
            </div>
            {/* ประเภทห้องและค่าเช่า */}
            <div className="w-100 d-flex flex-wrap mt-2-v">
                <div className="w-80 bg-main mx-auto box-drop-down mt-1-v">
                    <div className="w-100 d-flex align-items-center" onClick={toggletypeRoom}>
                        <div className="pl-1-v w-95">
                            <span className="color-white box-text-drop-down">ประเภทห้องและที่ค่าเช่า</span>
                        </div>
                        <div className="d-flex justify-content-end w-5 box-image-drop-down">
                            <img alt="" className={`${typeRoom === true && "active-arrow"}`} src={Arrow} />
                        </div>
                    </div>
                </div>
                {
                    typeRoom === true &&
                    <div className="w-100">
                        <div className="w-80 mx-auto d-flex">
                            <div className="w-50 d-flex">
                                <div className="w-80 sub-text-drop-down first">
                                    <span className="color-main">ประเภทห้อง</span>
                                </div>
                                <div className="w-20 sub-text-drop-down d-flex justify-content-center">
                                    <span className="color-main">ขนาด</span>
                                </div>
                            </div>
                            <div className="w-50 d-flex">
                                <div className="w-50 sub-text-drop-down d-flex justify-content-center">
                                    <span className="color-main">ราคาเช่ารายเดือน</span>
                                </div>
                                <div className="w-50 sub-text-drop-down d-flex justify-content-center">
                                    <span className="color-main">ราคาเช่ารายวัน</span>
                                </div>
                            </div>
                        </div>
                        {tabRoomType}
                    </div>
                }
                {/* รายละเอียด */}
                <div className="w-100 d-flex flex-wrap mt-2-v">
                    <div className="w-80 bg-main mx-auto box-drop-down mt-1-v">
                        <div className="w-100 d-flex align-items-center" onClick={toggleDesc}>
                            <div className="pl-1-v w-95">
                                <span className="color-white box-text-drop-down">รายละเอียด</span>
                            </div>
                            <div className="d-flex justify-content-end w-5 box-image-drop-down">
                                <img alt="" className={`${desc === true && "active-arrow"}`} src={Arrow} />
                            </div>
                        </div>
                    </div>
                    {
                        desc === true &&

                        <div className="full-desc w-80 mx-auto mt-1-v">
                            {fullDesc}
                        </div>
                    }
                </div>
                {/* ค่าใช้จ่ายเพิ่มเติม */}
                <div className="w-100 d-flex flex-wrap mt-2-v">
                    <div className="w-80 bg-main mx-auto box-drop-down mt-1-v">
                        <div className="w-100 d-flex align-items-center" onClick={toggleMorePrice}>
                            <div className="pl-1-v w-95">
                                <span className="color-white box-text-drop-down">ค่าใช้จ่ายเพิ่มเติม</span>
                            </div>
                            <div className="d-flex justify-content-end w-5 box-image-drop-down">
                                <img alt="" className={`${morePrice === true && "active-arrow"}`} src={Arrow} />
                            </div>
                        </div>
                    </div>
                    {morePrice === true && descMore}
                </div>
                {/* สิ่งอำนวยความสะดวก */}
                <div className="w-100 d-flex flex-wrap mt-2-v mb-2-v">
                    <div className="w-80 bg-main mx-auto box-drop-down mt-1-v">
                        <div className="w-100 d-flex align-items-center" onClick={toggleConvenient}>
                            <div className="pl-1-v w-95">
                                <span className="color-white box-text-drop-down">สิ่งอำนวยความสะดวก</span>
                            </div>
                            <div className="d-flex justify-content-end w-5 box-image-drop-down">
                                <img alt="" className={`${convenient === true && "active-arrow"}`} src={Arrow} />
                            </div>
                        </div>
                    </div>
                    {
                        convenient === true &&
                        <div className="w-80 mx-auto d-flex flex-wrap ">
                            <div className="w-100 d-flex flex-wrap mt-0-5-v">
                                <ul className="w-95 d-flex flex-wrap p-0">
                                    {
                                        detailsInDorm.inRoom.map(function (element, index) {
                                            return <><div className="w-5"></div><li className="color-main w-45 fs-1-v">{element}</li></>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    }
                </div>
                {/* บทความที่เกี่ยวข้อง */}
                {/* <div className="w-85 mx-auto position-relative mt-2-v">
                    <div className="w-100 line_back_text"></div>
                    <span className="bg-white text_on_line color-main">บทความที่เกี่ยวข้อง</span>
                </div>
                <div className="w-85 mx-auto d-flex">
                    <div className="w-70 pl-involve-post">
                        <span className="color-main">{involve.post}</span>
                    </div>
                    <div className="w-30 d-flex justify-content-end pr-involve-name">
                        <span className="color-main">{involve.name}</span>
                    </div>
                </div> */}
                {/* ถึงตรงนี้ */}
            </div>
            <Footer />
            {/* รีวิว */}
            {/* <div className="w-100 bg-third mt-2-v d-flex flex-wrap">
                <div className="w-85 mx-auto d-flex align-items-center mt-1-v">
                    <span className="fs-1-2-v color-main ">รีวิว</span>
                    <img alt="" className="image_review" src={review} />
                </div>
                <div className="w-80 mx-auto d-flex flex-wrap justify-content-end">
                    <input className="w-100 mt-1-v add-text-review" type="text" placeholder="เขียนข้อความ..." />
                    <button className="btn-add-review color-white bg-main mt-1-v">แสดงความคิดเห็น</button>
                </div>
                {
                    comments.map(function (element, index) {
                        return <Comment data={element} />
                    })
                }

            </div> */}
        </div>
    );
}



export default Details;