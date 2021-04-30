import React, { useState, useEffect } from "react";
import "./DomList.css";
function DomList({ data }) {
    console.log(data);
    return (
        <div className="d-flex">
            <div className="disc_dom_list py-1-v w-90">
                <div className="mr-1-v w-70"><img alt="" src={data.img} className="size-image-dorm-list w-100" /></div>
                <div className="color-main w-100"><span className="text_dom_list"><b>{data.dorm_name}</b><br />
                </span>
                    <span>
                        {data.desc}
                    </span>

                    <span className="text_dom_list">{data.price}</span>
                    <div className="d-flex justify-content-end">
                        <button className="bg-second btn_dom_list d-flex"><img alt="" src={data.HeartImg} />สนใจ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DomList;
