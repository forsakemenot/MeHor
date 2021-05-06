import React from "react";
import './advertise.css';
import '../../App.css';
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

import ads_banner from '../../img/Ads-banner.svg';
import plan_a from '../../img/plan-a.svg';
import plan_b from '../../img/plan-b.svg';
import plan_c from '../../img/plan-c.svg';
import ex_home from '../../img/ex_home.jpg';
import ex_search from '../../img/ex_search.jpg';

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
                                <b>ตำแหน่งที่แสดงผลโฆษณา</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span className="text-danger">X </span> หน้าโฮมเพจ (ไม่แสดงให้เห็น)</li>
                                <li class="list-group-item"><span className="text-success">O </span> หน้าผลการค้นหา</li>
                                <li class="list-group-item"><span className="text-success">O </span> หน้าโซนที่พัก</li>
                            </ul>
                            <div class="card-header">
                                <b>บริการเสริม</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span className="text-danger">X </span> บริการถ่ายภาพที่พัก</li>
                                <li class="list-group-item"><span className="text-danger">X </span> บริการเว็บไซต์ที่พักพร้อมโดเมน</li>
                            </ul>
                            <div class="card-header">
                                <b>ค่าบริการ</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ไม่เสียค่าใช้จ่ายใดๆ <br></br><span className="fs-2-v"> Free</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-.5"></div>
                    <div className="col-sm-4 ">
                        <div className="card">
                            <img alt="" className="img_ads_plan" src={plan_b}></img>
                            <div class="card-header">
                                <b>ตำแหน่งที่แสดงผลโฆษณา</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span className="text-success">O </span>หน้าโฮมเพจ (สุ่มขึ้นแสดงเป็นบางครั้ง)</li>
                                <li class="list-group-item"><span className="text-success">O </span>หน้าผลการค้นหา</li>
                                <li class="list-group-item"><span className="text-success">O </span>หน้าโซนที่พัก</li>
                            </ul>
                            <div class="card-header">
                                <b>บริการเสริม</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span className="text-success">O </span> บริการถ่ายภาพที่พัก</li>
                                <li class="list-group-item"><span className="text-danger">X </span> บริการเว็บไซต์ที่พักพร้อมโดเมน</li>
                            </ul>
                            <div class="card-header">
                                <b>ค่าบริการ</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">เริ่มต้น 3 เดือน <br></br> <span className="fs-2-v">ราคา 1,200 บาท</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-.5"></div>
                    <div className="col-sm-4 ">
                        <div className="card">
                            <img alt="" className="img_ads_plan" src={plan_c}></img>
                            <div class="card-header">
                                <b>ตำแหน่งที่แสดงผลโฆษณา</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span className="text-success">O </span> หน้าโฮมเพจ (แสดงตลอดเวลา)</li>
                                <li class="list-group-item"><span className="text-success">O </span> หน้าผลการค้นหา</li>
                                <li class="list-group-item"><span className="text-success">O </span> หน้าโซนที่พัก</li>
                            </ul>
                            <div class="card-header">
                                <b>บริการเสริม</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span className="text-success">O </span> บริการถ่ายภาพที่พัก</li>
                                <li class="list-group-item"><span className="text-success">O </span> บริการเว็บไซต์ที่พักพร้อมโดเมน</li>
                            </ul>
                            <div class="card-header">
                                <b>ค่าบริการ</b>
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">เริ่มต้น 6 เดือน <br></br><span className="fs-2-v">ราคา 4,800 บาท</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className="d-flex w-80 mx-auto align-items-center flex-wrap mt-1-v">
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <span>รูปแสดงลำดับการแสดงผลโฆษณาในหน้าแรก</span><br></br>
                    <img alt="" className="img_example" src={ex_home}/><br></br>
                </div>
                <div className="w-40">
                </div>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <span>รูปแสดงลำดับการแสดงผลโฆษณาในหน้าการค้นหาและหน้าโซนหอพัก</span><br></br>
                    <img alt="" className="img_example" src={ex_search}/>
                    <hr></hr>
                </div>
                <br></br>
                
            </div>

            <br></br>
            <Footer />
        </div>
    );
}

export default Advertise;