import React, { useState, useEffect, useMemo } from "react";
import "./DomList.css";
function DomList({ data, HeartImg }) {
  const server = 'http://103.13.231.22:5000/'
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
    fetch('http://103.13.231.22:5000/api/dorm/roomtypebyid/' + data._id, optionsGet())
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
    fetch('http://103.13.231.22:5000/api/dorm/facilitybyid/' + data._id, optionsGet())
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
          <>
            <div className="mr-1-v w-70"><img alt="" src={server + dormfaci?.img[0]} className="size-image-dorm-list w-100" /></div>
            <div className="color-main w-100"><span className="text_dom_list"><b>{data.dorm_name}</b><br />
            </span>
              <span>
                {dormfaci.dorm_facilities.map(element => {
                  return <>{element} <br /> </>
                })}
              </span>

              <span className="text_dom_list">฿ {roomtype?.dorm_type[0].room_cost} / เดือน</span>
              <div className="d-flex justify-content-end">
                <button className="bg-second btn_dom_list d-flex"><img alt="" src={HeartImg} />สนใจ</button>
              </div>
            </div>
          </>
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