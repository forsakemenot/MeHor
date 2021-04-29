import React, { useState, useEffect } from "react";
import './room_type.css';
import '../../App.css';


import city from '../../img/city.svg';
import coin from '../../img/coins.svg';
import money from '../../img/money-bill-wave.svg';
import payment from '../../img/money-check.svg';
import electric from '../../img/electrician.svg';
import water from '../../img/water.svg';
import wifi from '../../img/wifi.svg';
import keycard from '../../img/keycard.svg';
import Add_row from "../../components/add_row/add_row"


function RoomType() {

  const [numRow, setNumRow] = useState(1);
  const [roomType, setRoomType] = useState({ dorm_type: [] });
  const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
  const options = data => {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      method: 'post',
      body: JSON.stringify(data)
    };
  };
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

  const handleReturnRoomType = (e) => {
    if (e.delete) {
      let items = [...roomType.dorm_type]
      items[e.delete] = [0]
      setRoomType({
        ...roomType,
        dorm_type: items
      })
    } else {
      console.log(e.target?.getAttribute('row'), e.target?.name, e.target?.value);
      console.log(roomType);
      let row = e.target?.getAttribute('row')
      let field = e.target?.name
      let value = e.target?.value

      let items = [...roomType.dorm_type]

      let item = {
        ...roomType.dorm_type[row],
        [field]: value
      }

      items[row] = item;
      setRoomType({
        ...roomType,
        dorm_type: items
      })
    }
  }

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setRoomType({
      ...roomType,
      [field]: value //กำหนดค่าของ Value แต่ละอันเข้า Object NAME:VALUE
    });
  }

  let rows = [];
  for (var i = 0; i < numRow; i++) {
    rows.push(
      <Add_row key={i}
        row={i}
        col1={"room_name"}
        col2={"room_area"}
        col3={"room_cost"}
        col4={"additional"}
        handleReturnRoomType={handleReturnRoomType}
      />
    );
  }

  const handleAdd = () => {
    setNumRow(numRow + 1)
    setRoomType({
      ...roomType,
      dorm_type: [...roomType.dorm_type, []]
    })
  }

  useEffect(() => {
    console.log("useEffect");
    fetch('http://localhost:5000/api/dorm/dorm', optionsGet())
      .then(res => res.json())
      .then(res => {
        if (res.dorm) {
          setRoomType({
            ...roomType,
            dorm_id: res.dorm._id //กำหนดค่าของ Value แต่ละอันเข้า Object NAME:VALUE
          });
        }
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  const HandleSubmit = (evt) => {

    console.log(roomType);
    let items = roomType.dorm_type;
    let itemFiltered = items.filter(el => {
      return el[0] != 0;
    });
    items = itemFiltered

    setRoomType({
      ...roomType,
      dorm_type: items
    })

    fetch('http://localhost:5000/api/dorm/dormtype', options(roomType))
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          alert("success")
          //   history.push("/FurnitureDom");
        }
      })
      .catch(error => {
        console.log(error);
      })
    evt.preventDefault();
  }

  return (
    <div className="d-flex">
      <div className="w-20 position-absolute box_progress">
        <div className="d-flex w-70 mx-auto align-items-center position-relative">
          <span className="w-20 text-center num_progress active">1</span>
          <span className="w-80 text-left text_progress">ข้อมูลทั่วไป</span>
          <div className="position-absolute line_progress active"></div>
        </div>
        <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
          <span className="w-20 text-center num_progress active">2</span>
          <span className="w-80 text-left text_progress">ประเภทห้องและค่าเช่า</span>
          <div className="position-absolute line_progress"></div>
        </div>
        <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
          <span className="w-20 text-center num_progress">3</span>
          <span className="w-80 text-left text_progress">สิ่งอำนวย ความสะดวก และรูปภาพ</span>
          <div className="position-absolute line_progress"></div>
        </div>
        <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
          <span className="w-20 text-center num_progress">4</span>
          <span className="w-80 text-left text_progress">เอกสารยืนยัน</span>
          <div className="position-absolute"></div>
        </div>
      </div>

      <div className="form_room">
        <form onSubmit={HandleSubmit}>
          <div className="d-flex box-top-head-room-type w-95 mx-auto">
            <img alt="" className="img_formdom" src={city} />
            <p className="text_header">ประเภทห้อง</p>
          </div>
          <div className="w-95 mx-auto mt-1-v d-flex justify-content-center">
            {rows}
            <button onClick={() => handleAdd()} type="button" className="btn btn-primary ml-3-v">+</button>
            {/* cost */}
          </div>
          <div className="d-flex box-top-head-room-type mt-3-v w-95 mx-auto">
            <img alt="" className="img_formdom" src={coin} />
            <p className="text_header">ค่าใช้จ่ายเพิ่มเติม</p>
          </div>

          {/* deposit */}
          <div id="form_cost" className="d-flex">
            <div className="d-flex box-top-sub-room-type w-90">
              <img alt="" className="img_cost" src={money} />
              <p>ค่าเงินมัดจำ/ค่าเงินประกัน</p>
            </div>
            <div className="m-left mt-1-v">
              <div className="mt-1-v">
                <input type="radio" name="cost" />
                <span className="ml-0-5-v">จำนวนเงิน
                            <input className="amount" name="insurance_bill" onChange={handleInputChange} />บาท</span>
                <small className="remark">*รวมค่าเงินมัดจำและค่าเงินประกัน</small>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" value="no_insurance_bill" name="insurance_bill" onChange={handleInputChange} />
                <span className="ml-0-5-v">ไม่มีคำเงินมัดจำ/ค่าเงินประกัน</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="cost" />
                <span className="ml-0-5-v">อื่นๆ</span>
                <input className="d-flex other ml-1-v" name="insurance_bill" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* advance payment */}
          <div id="form_cost" className="d-flex mt-0-5-v">
            <div className="d-flex box-top-sub-room-type w-90">
              <img alt="" className="img_cost" src={payment} />
              <p>จ่ายล่วงหน้า</p>
            </div>
            <div className="m- mt-1-v">
              <div className="">
                <input type="radio" name="payment" />
                <span className="ml-0-5-v">ระบุเดือน
                                <select className="select_mount mt-1-v"  name="pre_paid" onChange={handleInputChange}>
                    <option>-- เลือกเดือน --</option>
                    <option value="1">1 เดือน</option>
                    <option value="2">2 เดือน</option>
                    <option value="3">3 เดือน</option>
                    <option value="4">4 เดือน</option>
                    <option value="5">5 เดือน</option>
                    <option value="6">6 เดือน</option>
                    <option value="7">1 ปี</option>
                  </select>
                </span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="payment" />
                <span className="ml-0-5-v">จำนวนเงิน
                            <input className="amount ml-1-v" name="pre_paid" onChange={handleInputChange} />บาท</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="payment" name="pre_paid" onChange={handleInputChange} value="จ่ายเท่าจำนวนค่าห้อง" />
                <span className="ml-0-5-v">จ่ายเท่าจำนวนค่าห้อง</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="payment" name="pre_paid" onChange={handleInputChange} value="ไม่ต้องจ่ายล่วงหน้า" />
                <span className="ml-0-5-v">ไม่ต้องจ่ายล่วงหน้า</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="payment" />
                <span className="ml-0-5-v">อื่นๆ</span>
                <input className="d-flex other ml-1-v" name="pre_paid" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* electric */}
          <div id="form_cost" className="d-flex mt-0-5-v">
            <div className="d-flex box-top-sub-room-type w-90">
              <img alt="" className="img_cost" style={{ width: '1vw' }} src={electric} />
              <p>ค่าไฟ</p>
            </div>
            <div className="m-left mt-1-v">
              <div className="">
                <input type="radio" name="electric" />
                <span className="ml-0-5-v">ตามยูนิตที่ใช้
                            <input className="amount ml-1-v" name="electric_bill" onChange={handleInputChange} />บาท/หน่วย</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="electric ml-1-v" name="electric_bill" onChange={handleInputChange} value="รวมในค่าห้องแล้ว" />
                <span className="ml-0-5-v">รวมในค่าห้องแล้ว</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="electric" />
                <span className="ml-0-5-v">อื่นๆ</span>
                <input className="d-flex other ml-1-v" name="electric_bill" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* water */}
          <div id="form_cost" className="d-flex mt-0-5-v">
            <div className="d-flex box-top-sub-room-type w-90">
              <img alt="" className="img_cost" style={{ width: '1vw' }} src={water} />
              <p>ค่าน้ำ</p>
            </div>

            <div className="m-left mt-1-v">
              <div className="">
                <input type="radio" name="water" />
                <span className="ml-0-5-v">ตามยูนิตที่ใช้
                            <input className="amount ml-1-v" name="water_bill" onChange={handleInputChange} />บาท/หน่วย</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="water" />
                <span className="ml-0-5-v">เหมาจ่าย
                            <input className="amount ml-1-v" name="water_bill" onChange={handleInputChange} />บาทต่อ<u>คน</u>/หน่วย</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="water" />
                <span className="ml-0-5-v">เหมาจ่าย
                            <input className="amount ml-1-v" name="water_bill" onChange={handleInputChange} />บาทต่อ<u>ห้อง</u>/หน่วย</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="water" value="รวมในค่าห้องแล้ว" name="water_bill" onChange={handleInputChange} />
                <span className="ml-0-5-v">รวมในค่าห้องแล้ว</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="water" />
                <span className="ml-0-5-v">อื่นๆ</span>
                <input className="d-flex other ml-1-v" name="water_bill" onChange={handleInputChange} />
              </div>
              {/* ยังไม่ได้ทำส่วนนี้ */}
              {/* <div className="mt-0-5-v">
                            <input type="checkbox" name="" />
                            <span className="ml-0-5-v">จ่ายขั้นต่ำ
                            <input className="amount" />บาท/เดือน</span>
                        </div> */}
            </div>
          </div>

          {/* wifi */}
          <div id="form_cost" className="d-flex mt-0-5-v">
            <div className="d-flex box-top-sub-room-type w-90">
              <img alt="" className="img_cost" src={wifi} />
              <p>อินเทอร์เน็ต</p>
            </div>

            <div className="m-left mt-1-v">
              <div className="">
                <input type="radio" name="wifi" />
                <span className="ml-0-5-v">จำนวนเงิน
                            <input className="amount" name="internet_bill" onChange={handleInputChange} />บาท/เดือน</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="wifi" value="ฟรี" name="internet_bill" onChange={handleInputChange} />
                <span className="ml-0-5-v">ฟรี</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="wifi" value="ไม่มีอินเทอร์เน็ต" name="internet_bill" onChange={handleInputChange} />
                <span className="ml-0-5-v">ไม่มีอินเทอร์เน็ต</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="wifi" />
                <span className="ml-0-5-v">อื่นๆ</span>
                <input className="d-flex other" name="internet_bill" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* keycard */}
          <div id="form_cost" className="d-flex mt-0-5-v">
            <div className="d-flex box-top-sub-room-type w-90">
              <img alt="" className="img_cost" style={{ width: '1vw' }} src={keycard} />
              <p>คีย์การ์ด</p>
            </div>

            <div className="m-left mt-1-v">
              <div className="">
                <input type="radio" name="keycard" />
                <span className="ml-0-5-v">จำนวนเงิน<input className="amount" name="keycard" onChange={handleInputChange} />บาท/เดือน</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="keycard" value="ฟรี" name="keycard" onChange={handleInputChange} />
                <span className="ml-0-5-v">ฟรี</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="keycard" value="ไม่มีคีย์การ์ด" name="keycard" onChange={handleInputChange} />
                <span className="ml-0-5-v">ไม่มีคีย์การ์ด</span>
              </div>
              <div className="mt-0-5-v">
                <input type="radio" name="keycard" />
                <span className="ml-0-5-v">อื่นๆ</span>
                <input className="d-flex other" name="keycard" onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="continue d-flex">
            <button id="btn_continue" type="submit">ขั้นตอนถัดไป</button>
          </div>
        </form>
      </div>

    </div>
  );
}



export default RoomType;