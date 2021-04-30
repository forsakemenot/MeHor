import React from "react";
import "./DescInDropDown.css";
function DescInDropDown({ data }) {
    return (
        <div className="w-80 mx-auto d-flex">
            <div className="w-50 d-flex bg-third">
                <div className="w-80 desc-text-drop-down first">
                    <span className="color-main">{data.room_name}</span>
                </div>
                <div className="w-20 desc-text-drop-down d-flex justify-content-center align-items-center">
                    <span className="color-main">{data.room_area}</span>
                </div>
            </div>
            <div className="w-50 d-flex bg-third">
                <div className="w-50 desc-text-drop-down d-flex justify-content-center align-items-center">
                    <span className="color-main">{data.room_cost}</span>
                </div>
                <div className="w-50 desc-text-drop-down d-flex justify-content-center align-items-center">
                    <span className="color-main">{data.additional}</span>
                </div>
            </div>
        </div>

    );
}


export default DescInDropDown;
