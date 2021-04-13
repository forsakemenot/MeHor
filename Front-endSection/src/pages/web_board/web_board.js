import React from "react";
import '../web_board/web_board.css';
import '../../App.css';

import { Link } from "react-router-dom";

import post from '../../img/post.svg';
import before from '../../img/arrow-before.svg';
import after from '../../img/arrow-after.svg';

function RoomType() {
    return (
        <div className="d-flex justify-center">
            <div className="bg_frame">
                <div className="list_post">
                    <div className="d-flex post_header mt-3">
                        <img className="img_header" src={post}></img>
                        <p className="text_header">กระทู้ซื้อ - ขายสัญญาหอ</p>
                    </div>
                    <div className="recent_post d-flex">
                        <p className="text_header_recent">โพสต์ล่าสุด!</p>
                    </div>

                    <div className="box_post d-flex align-center">
                        <div className="board_post mt-1">
                            <div className="d-flex align-baseline">
                                <div className="status_post d-flex justify-center align-center">
                                    <p>ลงขาย</p>
                                </div>
                                <div className="title_post">
                                    <p>ขายสัญญาหอคุณตาคุณยายค่ะ</p>
                                </div>
                            </div>
                            <p className="content_post">ขายด่วนค่ะ สัญญาหอคุณตาคุณยาย 3,500 ฟอนิเจอร์ครบ มีแถมของนู่นนี่นั่นให้ แอร์ใช้ได้ปกติ ค่าน้ำค่าไฟไม่แพง..</p>
                            <div className="contact_post d-flex">
                                <p className="name_post">โพสต์โดย Thanapon Matikanon</p>
                                <p className="time_post">(31/3/2021 : 9:09 PM)</p>
                            </div>
                        </div>

                        <div className="page_post d-flex justify-center mt-3">
                            <img src={before}></img>
                            <div className="page_num d-flex justify-center align-center">
                                <p>1</p>
                            </div>
                            <div className="page_num d-flex justify-center align-center">
                                <p>2</p>
                            </div>
                            <div className="page_num d-flex justify-center align-center">
                                <p>3</p>
                            </div>
                            <img src={after}></img>
                        </div>
                    </div>
                </div>

                <div className="find_post">
                    <div className="find_header_post d-flex">
                        <p className="text_header_find">ค้นหาโพสต์ที่คุณต้องการ</p>
                    </div>
                    <div className="detail_find d-flex">
                        <input type="text" className="search_post"></input>
                        <div>
                            <p className="text_cate">แสดงโดย</p>
                            <select className="cate_post">
                                <option>โพสต์ขาย</option>
                                <option>โพสต์ซื้อ</option>
                            </select>
                        </div>
                        <div>
                            <p className="text_cate">แสดงหมวดหมู่</p>
                            <select className="cate_post">
                                <option>โซน เกกี</option>
                                <option>โซน RNP</option>
                                <option>โซน จินดา</option>
                                <option>โซน FBT</option>
                                <option>โซน นิคม</option>
                                <option>อื่น ๆ</option>
                            </select>
                        </div>
                    </div>

                    <div className="or d-flex justify-center">
                        <hr className="line_or"></hr>
                        <p className="text_or">หรือ</p>
                    </div>

                    <div className="d-flex justify-center">
                        <button className="btn_post">สร้างโพสต์ของคุณ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}    
    export default RoomType;