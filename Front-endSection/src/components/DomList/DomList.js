import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
function DomList({ data }) {
    return (
        <div className="center_dom_list">
            <div className="disc_dom_list">
                <div className="mr-1"><img alt="" src={data.img} /></div>
                <div className="color-main div_disc_dom_list"><h2><b>{data.name}</b><br />
                </h2>
                    <p>
                        {data.desc.map(function (element, index) {
                            return <>{element}<br /></>
                        })
                        }
                    </p>

                    <h2>{data.price}</h2>
                    <div className="d-flex justify-end">
                        <button className="bg-second btn_dom_list"><img alt="" src={data.HeartImg} />สนใจ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default DomList;
