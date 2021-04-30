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
import review from "../../img/Icon-review.svg";
import profile from "../../img/profile.jpg";
import confirm from "../../img/confirm.svg";
import home from "../../img/Icon-open-home.svg";
import star from "../../img/star.svg";
import eye from "../../img/eye.svg";
import clock from "../../img/clock.svg";
import heartOff from "../../img/heart-off.svg";

import room from "../../img/20210321_151812.svg"

import Comment from "../../components/CommentReview/CommentReview";
function Details() {
    const {dormId} = useParams()
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
        fetch('http://103.13.231.22:5000/api/dorm/dorm/' + dormId, optionsGet())
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

    const desc_update = {
        view: "534",
        update: "29 มีนาคม 2564",
        img: [room, room, room, room, room]
    }
    // const contact = {
    //     location: "ถนนลาดกระบัง 52 แยก 3 แขวงลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร",
    //     phone: "083-233-3028, 02-326-9220 (ป้าจัน)",
    //     line: "-",
    //     pirce: "3,200 - 3,700"
    // }
    const DecsDropDown = [{
        typeRoom: "ห้องเดี่ยว พัดลม มีระเบียง",
        size: "16 ตรม.",
        pirce_month: "3,200 บาท/เดือน",
        pirce_day: "-"

    },
    {
        typeRoom: "ห้องเดี่ยว แอร์ มีระเบียง",
        size: "16 ตรม.",
        pirce_month: "3,700 บาท/เดือน",
        pirce_day: "-"

    }]
    const fullDesc = {
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    const descMore = {
        insurance: "5000",
        electric: "7",
        internet: "ฟรี [15 Mbps]",
        deposit: "1 เดือน (คิดเป็นค่าห้อง)",
        water: "18",
        keycard: "300"
    }
    const detailsInDorm = {
        inRoom: ["เครื่องปรับอากาศ", "เฟอร์นิเจอร์", "อินเทอร์เน็ตไร้สาย (Wifi)"],
        central: ["เครื่องซักผ้า", "ตู้กดน้ำ", "กล้องวงจารปิด (CCTV)"]
    }
    const involve = {
        post: "ขายสัญญาหอ (เว็บบอร์ด)",
        name: "Phawinee Thongbor"
    }
    const comments = [{
        image: profile,
        name: "หอพักสตรีกอบัว",
        date: "31/3/2021",
        time: "9.09 PM",
        no: "1",
        like: "0",
        comment: "ถ้าสนใจสามารถติดต่อได้เลยนะคะ ห้องยังว่างอยู่ค่ะ",
        amount_commet: "1"
    }]

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
            if (descDorm.dorm_id) {
                console.log(descDorm);
                return (
                    <div className="w-50 mx-auto d-flex justify-content-start flex-wrap">
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
                console.log(roomType);
                return (
                    <span className="text_price_details">ราคา <span className="color-second">{roomType.dorm_type[0].room_cost}</span> บาท/เดือน</span>
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
                <div className="w-100 d-flex mt-1-v mx-auto">
                    <img className="w-100" alt="" src={desc_update.img[0]} />
                </div>
                <div className="w-100 d-flex justify-content-between mx-auto mt-1-v">
                    {
                        desc_update.img.map(function (element, index) {
                            return <div className="w-20 d-flex"><img className="w-100" alt="" src={element} /></div>
                        })
                    }
                </div>
            </div>
            {/* ช่องทางติดต่อ */}
            <div className="d-flex w-80 mx-auto">

                {contant}

                <div className="w-50 d-flex justify-content-center flex-wrap">
                    {/* ตรงนี้ */}
                    <div className="w-100 d-flex align-items-center">
                        <img alt="" className="w-20 image_price_details" src={coins} alt="" />
                        {price}
                    </div>
                    <div className="h-75 w-100 bg-info">

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
                        {
                            DecsDropDown.map(function (element, index) {
                                return <DescInDropDown data={element} />
                            })
                        }
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
                            <span>{fullDesc.desc}</span>
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
                    {
                        morePrice === true &&
                        <div className="w-80 mx-auto d-flex flex-wrap">
                            <div className="w-50 d-flex flex-wrap border-right-color">
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v pt-0-5-v">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={bill} />
                                    <span className="w-90 color-main "><b>ค่าเงินมัดจำ/ค่าเงินประกัน :</b> {descMore.insurance}</span>
                                </div>
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v bg-third">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={electric} />
                                    <span className="w-90 color-main "><b>ค่าเงินมัดจำ/ค่าเงินประกัน :</b> หน่วยละ {descMore.electric} บาท</span>
                                </div>
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={wifi} />
                                    <span className="w-90 color-main "><b>อินเทอร์เน็ต (Wifi) :</b> {descMore.internet}</span>
                                </div>

                            </div>
                            <div className="w-50 d-flex flex-wrap">
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v pt-0-5-v">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={check} />
                                    <span className="w-90 color-main"><b>จ่ายล่วงหน้า :</b> {descMore.deposit}</span>
                                </div>
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v bg-third">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={water} />
                                    <span className="w-90 color-main "><b>ค่าน้ำ หน่วยละ :</b> {descMore.water} บาท</span>
                                </div>
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={keycard} />
                                    <span className="w-90 color-main "><b>คีย์การ์ด :</b> {descMore.keycard} บาท/ชุด</span>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                {/* สิ่งอำนวยความสะดวก */}
                <div className="w-100 d-flex flex-wrap mt-2-v">
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
                        <div className="w-80 mx-auto d-flex flex-wrap">
                            <div className="w-50 d-flex flex-wrap border-right-color">
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v pt-0-5-v">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={door} />
                                    <span className="w-90 color-main font-weight-bold">ภายในห้อง</span>
                                </div>
                                <ul className="w-75 mx-auto">
                                    {
                                        detailsInDorm.inRoom.map(function (element, index) {
                                            return <li className="color-main">{element}</li>
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="w-50 d-flex flex-wrap">
                                <div className="w-100 pl-2-v d-flex align-items-center fs-1-v pt-0-5-v">
                                    <img alt="" className="w-10 size_icon_desc" alt="" src={hotel} />
                                    <span className="w-90 color-main font-weight-bold">ส่วนกลาง</span>
                                </div>
                                <ul className="w-75 mx-auto">
                                    {
                                        detailsInDorm.central.map(function (element, index) {
                                            return <li className="color-main">{element}</li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    }
                </div>
                {/* บทความที่เกี่ยวข้อง */}
                <div className="w-85 mx-auto position-relative mt-2-v">
                    {/* เอาไปทำ components */}
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
                </div>
                {/* ถึงตรงนี้ */}
            </div>
            {/* รีวิว */}
            <div className="w-100 bg-third mt-2-v d-flex flex-wrap">
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

            </div>
        </div>
    );
}



export default Details;