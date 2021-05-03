import React from "react";
import './about_web.css';
import Footer from "../../components/Footer/Footer";
import QrCode from "../../img/qr-code.svg";
import Location from "../../img/location-blue.svg";
import Phone from "../../img/phone-blue.svg";
import Email from "../../img/email-blue.svg";
function AboutWeb() {
    return (
        <div className="d-flex justify-content-center flex-column">
            <span className="fs-3-5-v fw-bold color-main text-center">About Website</span>
            <div className="">
            </div>
            <div className="w-100">
                <Footer />
            </div>
        </div>
    );
}

export default AboutWeb;