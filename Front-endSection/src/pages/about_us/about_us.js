import React from "react";
import './about_us.css';
import Footer from "../../components/Footer/Footer";
import QrCode from "../../img/qr-code.svg";
import Location from "../../img/location-blue.svg";
import Phone from "../../img/phone-blue.svg";
import Email from "../../img/email-blue.svg";
function AboutUs() {
    return (
        <div className="d-flex w-80 mx-auto justify-content-center flex-wrap mt-1-v">
            <span className="color-main fs-3-v font-weight-bold">MeHor</span>
            <div className="d-flex w-100 flex-wrap mt-1-v color-main">
                <span className="w-100">เกี่ยวกับเรา</span>
                <span className="mt-0-5-v">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
            </div>
            <div>
                <img alt="" src={QrCode} />
                <div>
                    <div>
                        <img alt="" src={Location} />
                        <span>1 ซอย ฉลองกรุง 1 แขวง ลาดกระบัง เขตลาดกระบัง กรุงเทพมหานคร 10520</span>
                    </div>
                    <div>
                        <img alt="" src={Phone} />
                        <span>+66 81 234 5678</span>
                    </div>
                    <div>
                        <img alt="" src={Email} />
                        <span>mehor@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="w-100">
                <Footer />
            </div>
        </div>
    );
}

export default AboutUs;