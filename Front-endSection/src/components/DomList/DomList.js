import React, { useState, useEffect, useMemo } from "react";
import "./DomList.css";
import { Link } from "react-router-dom";
function DomList({ data }) {
  const server = 'http://localhost:5000/'
  const [roomtype, setRoomtype] = useState([]);
  const [dormfaci, setDormfaci] = useState({});
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
  const optionsGet = data => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      method: 'get',
      // body: JSON.stringify(data)
    };
  };
  useEffect(() => {
    fetch('http://localhost:5000/api/dorm/roomtypebyid/' + data._id, optionsGet())
      .then(res => res.json())
      .then(res => {
        if (res.DormType) {
          setRoomtype(res.DormType);
          console.log(res.DormType);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, [data]);
  useEffect(() => {
    fetch('http://localhost:5000/api/dorm/facilitybyid/' + data._id, optionsGet())
      .then(res => res.json())
      .then(res => {
        if (res.DormFacility) {
          setDormfaci(res.DormFacility);
          console.log(res.DormFacility);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, [data]);

  const dormBox = useMemo(
    () => {

      if (dormfaci.img && roomtype.dorm_id) {
        return (
          <Link to={`/details/${data._id}`} onClick={() => window.location.href = `/details/${data._id}`} className="d-flex w-100 text-remove-hover bg-white p-1-v h-100">
            <div className="w-45">
              <img alt="" src={server + dormfaci?.img[0]} className="size-image-dorm-list w-95" />
            </div>
            {/* <div className="color-main w-55 d-flex flex-column h-80"> */}
              <div className="h-100 d-flex flex-column color-main">
                <span className="fs-1-5-v"><b>{data.dorm_name}</b><br /></span>

                <div className="d-flex w-100 h-25 py-1-v flex-column">
                  <div className="d-flex w-25">
                    <span className="fs-1-v">descrtiption</span>
                  </div>
                  <div className="d-flex pl-0-2-v w-95 mx-auto">
                    <span className="fs-1-v color-third">{data.description}</span>
                  </div>
                </div>

                <div className="w-100 d-flex h-20 py-1-v flex-column">
                  <div className="w-70">
                    <span className="fs-1-v">สิ่งอำนวยความสะดวก</span>
                  </div>
                  <div className="pl-0-2-v w-95 mx-auto">
                    <span className="fs-1-v color-third ">
                      {dormfaci.dorm_facilities.map(element => {
                        return <> {element} </>
                      })}
                    </span>
                  </div>
                </div>
                <span className="fs-2-v d-flex font-weight-bold">฿ {roomtype?.dorm_type[0].room_cost} / เดือน</span>
              </div>
            {/* </div> */}
          </Link >
        )
      }
      return
    }, [dormfaci, roomtype]
  )
  return (
    <div className="d-flex">
      <div className="disc_dom_list py-1-v w-90">
        {dormBox}
      </div>
    </div>
  );
}


export default DomList;