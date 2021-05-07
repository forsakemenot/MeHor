import React, { useState, useEffect, useMemo } from "react";
import "./DomList.css";
import { Link } from "react-router-dom";
function DomList({ data }) {
  console.log(data.DormFac.img, data.DormType);
  const dormBox = useMemo(
    () => {
      if (data.DormFac.img && data.DormType) {
        console.log(data);
        return (
          <Link to={`/details/${data._id}`} onClick={() => window.location.href = `/details/${data.dorm._id}`} className="d-flex w-100 text-remove-hover bg-white p-1-v h-100">
            <div className="mr-4 ml-1">
              <img alt="" src={'http://'+data.DormFac.img[0]} className="size-image-dorm-list w-95" />
            </div>
            {/* <div className="color-main w-55 d-flex flex-column h-80"> */}
            <div className="information h-100 d-flex flex-column color-main">
              <span className="fs-1-5-v"><b>{data.dorm.dorm_name}</b><br /></span>

              <div className="d-flex w-100 h-25 py-1-v flex-column">
                <div className="d-flex w-25">
                  <span className="fs-1-v">descrtiption</span>
                </div>
                <div className="d-flex pl-0-2-v w-95 mx-auto">
                  <span className="fs-1-v color-third">{data.dorm.description}</span>
                </div>
              </div>

              <div className="w-100 d-flex h-20 py-1-v flex-column">
                <div className="w-70">
                  <span className="fs-1-v">สิ่งอำนวยความสะดวก</span>
                </div>
                <div className="pl-0-2-v w-95 mx-auto">
                  <span className="fs-1-v color-third ">
                    {data.DormFac.dorm_facilities.map(element => {
                      return <> {element} </>
                    })}
                  </span>
                </div>
              </div>
              <span className="price fs-2-v d-flex font-weight-bold">฿ {data.DormType.dorm_type[0].room_cost} / เดือน</span>
            </div>
            {/* </div> */}
          </Link >
        )
      }
      else {
        return (<div>Loading...</div>)
      }
    }, [data]
  )
  return (
    <div className="d-flex">
      <div className="disc_dom_list py-1-v w-95">
        {dormBox}
      </div>
    </div>
  );
}


export default DomList;