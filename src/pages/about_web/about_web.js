import React from "react";
import './about_web.css';
import Footer from "../../components/Footer/Footer";

import megaphone from "../../img/megaphone.svg"
import mdWarning from "../../img/md-warning.svg"
import awesomeCity from "../../img/awesome-city.svg"
import openDocument from "../../img/open-document.svg"
import QRCode from "../../img/line-qr.svg"
import email from "../../img/email-blue.svg"
import phone from "../../img/phone-alt.svg"

function AboutWeb() {
    return (
        <div className="d-flex justify-content-center flex-column align-items-center">
            <span className="fs-3-5-v fw-bold color-main text-center">About Website</span>
            <div className="d-flex justify-content-around w-45 flex-wrap">
                <div className="box-about w-45 d-flex flex-column">
                    <img alt="" src={megaphone} className="w-15 mb-1-v" />
                    <span className="fs-1-v color-main">MeHor เป็นเพียงพื้นที่ให้บริการลงประกาศ
                    หอพัก คอนโด ที่พักรอบสถาบันเทคโนโลยี
                        เจ้าคุณทหาร ลาดกระบังเพียงเท่านั้น</span>
                </div>
                <div className="box-about w-45 d-flex flex-column">
                    <img alt="" src={mdWarning} className="w-15 mb-1-v" />
                    <span className="fs-1-v color-main">ข้อมูลหอพัก และที่พักภายในเว็บไซต์เกิดจาก
                    การลงข้อมูลของเจ้าประกาศทาง MeHor
                        ไม่มีส่วนเกี่ยวข้องใดๆ ทั้งสิ้น</span>
                </div>

                <div className="box-about w-45 d-flex flex-column">
                    <img alt="" src={awesomeCity} className="w-15 mb-1-v" />
                    <span className="fs-1-v color-main">การติดต่อเช่าหอพัก สามารถติดต่อได้โดย
                        ตรงกับผู้ลงประกาศ ตามข้อมูลที่ได้ประกาศไว้</span>
                </div>
                <div className="box-about w-45 d-flex flex-column">
                    <img alt="" src={openDocument} className="w-10 mb-1-v" />
                    <span className="fs-1-v color-main">MeHor ไม่มีส่วนเกี่ยวข้องกับการทำธุรกรรม
                    ต่างๆ ของหอพัก คอนโด ที่พัก กรุณาตรวจ
                        สอบความถูกต้องก่อนการทำธุรกรรม</span>
                </div>
            </div>
            <div className="d-flex w-45 align-items-center mb-1-v">
                <div className="w-30 d-flex flex-column justify-content-center align-items-center">
                    <span className="color-main fs-1-v">แจ้งปัญหา / ติดต่อลงโฆษณา</span>
                    <img alt="" src={QRCode} className="w-40 mt-0-5-v" />
                    <span className="text-success pt-0-5-v fs-1-v">Line ID : @mehor.lkb</span>
                </div>
                <div className="w-65 d-flex flex-column">
                    <div className="text-right">
                        <img alt="" src={email} className="w-5 mr-1-v" />
                        <span className="fs-1-v color-main">mehorlkb@gmail.com</span>
                    </div>
                    <div className="text-right mt-2-v">
                        <img alt="" src={phone} className="w-5 mr-1-v" />
                        <span className="fs-1-v color-main">mehorlkb@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="w-100">
                <Footer />
            </div>
        </div>
    );
}

export default AboutWeb;