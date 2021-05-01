import React from "react";
import './advertise.css';
import '../../App.css';
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import ads_banner from '../../img/Ads-banner.svg';
import plan_a from '../../img/plan-a.svg';
import plan_b from '../../img/plan-b.svg';
import plan_c from '../../img/plan-c.svg';

function Advertise() {

    return (
        <div>
            <div>
                <img alt="" className="img_ads_banner" src={ads_banner}></img>
            </div>
            <div className="container">
                <br></br>
                <div>
                    <div className="row">
                        <div className="col-sm-.5"></div>
                        <span className="color-main fs-2-v">สิทธิพิเศษต่างๆ</span>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-sm-4 ">
                        <div className="card">
                            <img alt="" className="img_ads_plan" src={plan_a}></img>
                            <div class="card-header">
                                ตำแหน่งที่แสดงผลโฆษณา
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">หน้าโฮมเพจ (ไม่แสดงให้เห็น)</li>
                                <li class="list-group-item">หน้าผลการค้นหา (แสดงผลอันดับหลัง)</li>
                                <li class="list-group-item">หน้าโซนที่พัก (แสดงผลอันดับหลัง)</li>
                            </ul>
                            <div class="card-header">
                                บริการเสริม
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">X บริการถ่ายภาพที่พัก</li>
                                <li class="list-group-item">X บริการเว็บไซต์ที่พักพร้อมโดเมน</li>
                            </ul>
                            <div class="card-header">
                                ค่าบริการ
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ไม่เสียค่าใช้จ่ายใดๆ <br></br> Free</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-.5"></div>
                    <div className="col-sm-4 ">
                        <div className="card">
                            <img alt="" className="img_ads_plan" src={plan_b}></img>
                            <div class="card-header">
                                ตำแหน่งการแสดงโฆษณา
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">หน้าโฮมเพจ (สุ่มแสดง)</li>
                                <li class="list-group-item">หน้าผลการค้นหา (แสดงผลอันดับรองลงมา)</li>
                                <li class="list-group-item">หน้าโซนที่พัก (แสดงผลอันดับรองลงมา)</li>
                            </ul>
                            <div class="card-header">
                                บริการเสริม
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">O บริการถ่ายภาพที่พัก</li>
                                <li class="list-group-item">X บริการเว็บไซต์ที่พักพร้อมโดเมน</li>
                            </ul>
                            <div class="card-header">
                                ค่าบริการ
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">เริ่มต้น 3 เดือน <br></br> ในราคา 1,200 บาท</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-.5"></div>
                    <div className="col-sm-4 ">
                        <div className="card">
                            <img alt="" className="img_ads_plan" src={plan_c}></img>
                            <div class="card-header">
                                ตำแหน่งที่แสดงผลโฆษณา
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">หน้าโฮมเพจ (แสดงตลอดเวลา)</li>
                                <li class="list-group-item">หน้าผลการค้นหา (แสดงผลอันดับแรกๆ)</li>
                                <li class="list-group-item">หน้าโซนที่พัก (แสดงผลอันดับแรกๆ)</li>
                            </ul>
                            <div class="card-header">
                                บริการเสริม
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">O บริการถ่ายภาพที่พัก</li>
                                <li class="list-group-item">O บริการเว็บไซต์ที่พักพร้อมโดเมน</li>
                            </ul>
                            <div class="card-header">
                                ค่าบริการ
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">เริ่มต้น 6 เดือน <br></br>ในราคา 4,800 บาท</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <Footer />
        </div>
    );
}

export default Advertise;