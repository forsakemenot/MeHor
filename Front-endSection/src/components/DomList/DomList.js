import React from "react";
import "./DomList.css";
function DomList({ data }) {
    return (
        <div className="center_dom_list">
            <div className="disc_dom_list">
                <div className="mr-1-v"><img alt="" src={data.img} /></div>
                <div className="color-main div_disc_dom_list"><span className="text_dom_list"><b>{data.name}</b><br />
                </span>
                    <span>
                        {data.desc.map(function (element, index) {
                            return <>{element}<br /></>
                        })
                        }
                    </span>

                    <span className="text_dom_list">{data.price}</span>
                    <div className="d-flex justify-end">
                        <button className="bg-second btn_dom_list d-flex"><img alt="" src={data.HeartImg} />สนใจ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DomList;
