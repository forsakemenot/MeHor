import HomeImg from './../img/Icon-open-home.svg';
import HeartImg from './../img/Icon-awesome-heart.svg';
import React from "react";
import './home.css';
import './../App.css';
import { Link } from "react-router-dom";
function Home() {
    return (

        <div>
            <div className="map_info">
            <Link to="/AddDom"><button className="btn_link_add_dom bg-main">+ ลงประกาศหอพัก</button></Link>
            </div>
            <div className="dom_list d-flex">
                <div className="top_dom_list">
                    <div className="text_top_dom_list">
                        <span className="color-main">ที่พักทั้งหมด</span>
                        <img alt="" src={HomeImg} />
                    </div>
                </div>
                <div className="center_dom_list">
                    <div className="disc_dom_list">
                        <div><img alt="" src="http://dummyimage.com/463x285/" /></div>
                        <div className="color-main"><h2><b>หอพักกอบัว (หอพักหญิง)</b><br />
                        </h2>
                            <p>
                                มัดจำ 5000 บาท จ่ายล่วงหน้า 1 เดือน<br />
                            มี wifi 15 mdps<br />
                            น้ำ 18 ไฟ 7<br />
                            กุญแจชุดละ 300<br />
                            มี 2 เตียง(3.5 ฟุต)<br />
                            เบอร์ 02-326-9220 (เจ้าของ)</p>
                            <h2>฿ 3200 - 3700 / เดือน</h2>
                            <button className="bg-second btn_dom_list"><img alt="" src={HeartImg} />สนใจ</button>
                        </div>
                    </div>
                </div>

                <div className="center_dom_list">
                    <div className="disc_dom_list">
                        <div><img alt="" src="http://dummyimage.com/463x285/" /></div>
                        <div className="color-main"><h2><b>สบายเพลส</b><br />
                        </h2>
                            <p>
                                อยู่ระยะยาว 1 ปีเดือนละ 4000 บาท /
                                อยู่ระยะสั้น 1-2 เดือนละ 6000 บาท <br />
                                มัดจำจ่ายเท่า 1 เดือน มีรายวันคืนละ 600 บาท <br />
                                ค่าคีย์การ์ดใบละ 200 บาท
                                ที่จอดรถยนตร์ 300 บาท<br />
                                เร้าเตอร์ 1000 บาท / 6 เดือน, ถ้าใช้รายเดือน 400<br />
                                น้ำ 15 ไฟ 7
                                มีแอร์ทุกห้อง
                                มีโต๊ะ ตู้ เตียง เครื่องทำน้ำอุ่น<br />
                                ส่วนกลางมีเครื่องซักผ้า ตู้เซเว่น ตู้กรอกน้ำ ตู้กาแฟแบบหยอดเหรียญ
</p>
                            <h2>฿ 4000 - 6000 / เดือน</h2>
                            <button className="bg-second btn_dom_list"><img alt="" src={HeartImg} />สนใจ</button>
                        </div>
                    </div>
                </div>

                <div className="center_dom_list">
                    <div className="disc_dom_list">
                        <div><img alt="" src="http://dummyimage.com/463x285/" /></div>
                        <div className="color-main"><h2><b>Room 52</b><br />
                        </h2>
                            <p>
                                มีตึก A-F มีที่จอดเฉพาะที่ให้<br />
                                เบอร์ 092-782-2663 ,081-813-8922</p>
                            <h2>฿ ??? / เดือน</h2>
                            <button className="bg-second btn_dom_list"><img alt="" src={HeartImg} />สนใจ</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Home;