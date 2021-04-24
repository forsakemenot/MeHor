import React from "react";
import "./Footer.css"
import CopyRight from "../../img/copyright.svg"
import FaceBook from "../../img/facebook.svg"
import Line from "../../img/line.svg"
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="w-100 color-main d-flex justify-content-center flex-wrap">
        <div><img alt="" className="image_footer" src={FaceBook}/><img alt="" className="image_footer" src={Line}/></div>
        <span className="w-100 d-flex justify-content-center">เว็บไซต์ให้บริการด้านข้อมูลหอพักบริเวณสถาบันเทคโนโลยีเจ้าคุณทหาร ลาดกระบัง</span>
        <div className="w-100 d-flex justify-content-center align-items-center"><span>Copytight </span><img className="image_copy" alt="" src={CopyRight}/> 2021 Mehor</div>
    </div>
  );
}


export default Footer;