import React from "react";
import './about_us.css';
import Footer from "../../components/Footer/Footer";
import QrCode from "../../img/qr-code.svg";
import Location from "../../img/location-blue.svg";
import Phone from "../../img/phone-blue.svg";
import Email from "../../img/email-blue.svg";
function AboutUs() {
    return (
        <div>
            <div className="d-flex w-80 mx-auto justify-content-center flex-wrap mt-1-v box-about-us">
                <span className="color-main fs-3-v font-weight-bold">MeHor</span>
                <div className="d-flex w-100 flex-wrap mt-1-v color-main">
                    <span className="w-100">เกี่ยวกับเรา</span>
                    <span className="mt-0-5-v">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
                </div>
                <div className="w-100 d-flex align-items-center py-1-v">
                    <img alt="" src={QrCode} className="w-20" />
                    <div className="w-60">
                        <div className="w-100 d-flex color-main py-0-5-v">
                            <img alt="" src={Location} className="w-10 image-about-us " />
                            <span className="w-10 ">ที่อยู่ :</span>
                            <span className="w-80">1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</span>
                        </div>
                        <div className="w-100 d-flex py-0-5-v color-main">
                            <img alt="" src={Phone} className="w-10 image-about-us" />
                            <span className="w-10 ">โทร :</span>
                            <span className="w-80">+66 81 234 5678</span>
                        </div>
                        <div className="w-100 d-flex py-0-5-v color-main">
                            <img alt="" src={Email} className="w-10 image-about-us-email" />
                            <span className="w-10 ">อีเมล :</span>
                            <span className="w-80">mehor@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex align-self-end bg-no-4">
                    <Footer />
                </div>
        </div>
    );
}

export default AboutUs;