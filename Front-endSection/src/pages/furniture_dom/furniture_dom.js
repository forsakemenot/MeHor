import React, { useState, useEffect } from "react";
import './furniture_dom.css';
import '../../App.css';

import { Link, useHistory } from "react-router-dom";
import city from '../../img/city.svg';
import door from '../../img/door-open.svg';
import hotel from '../../img/hotel.svg';
import camera from '../../img/camera.svg';
import warning from '../../img/warning.svg';
import upload_pic from '../../img/upload_pic.svg';

import AddMap from '../../components/Map/Map'


function FurnitureDom() {
   const history = useHistory();
   const [dormId, setDormId] = useState('');
   const [facilities, setFacilities] = useState([]);
   const [selectedFile, setSelectedFile] = useState(null);
   const [token, setToken] = useState(localStorage.getItem('jwtToken') || '');
   const options = data => {
      console.log(data);
      return {
         headers: {
            'Authorization': token,
         },
         method: 'post',
         body: data
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
   useEffect(() => {
      console.log("useEffect");
      fetch('http://103.13.231.22:5000/api/dorm/dorm', optionsGet())
         .then(res => res.json())
         .then(res => {
            if (res.dorm) {
               console.log("dorm", res);
               setDormId(res.dorm._id)
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);

   const handleInputChange = (e) => {
      const field = e.target.name;
      const checked = e.target.checked;
      const array = [...facilities];
      if (!checked) {
         var index = array.indexOf(field);
         if (index !== -1) {
            array.splice(index, 1);
            setFacilities(array)
         }
      }
      else {
         setFacilities([...facilities, field]);
      }
      console.log(facilities);
   }

   const HandleSubmit = async (evt) => {
      const formData = new FormData();
      const array = [...selectedFile]
      console.log("dormId", dormId);
      formData.append("dorm_id", dormId);
      formData.append("dorm_facilities", facilities);
      await array.forEach(element => {
         formData.append("files", element);
      });
      fetch('http://103.13.231.22:5000/api/dorm/dormfacility', options(formData))
         .then(res => res.json())
         .then(res => {
            if (res.error) alert(res.error);
            if (res.success) {
               alert("success")
               history.push("/ConfirmDoc");
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
               <div className="position-absolute line_progress active"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress active">3</span>
               <span className="w-80 text-left text_progress">สิ่งอำนวย ความสะดวก และรูปภาพ</span>
               <div className="position-absolute line_progress"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress">4</span>
               <span className="w-80 text-left text_progress">เอกสารยืนยัน</span>
               <div className="position-absolute"></div>
            </div>
         </div>

         <div className="form_dorm">
            <form onSubmit={HandleSubmit}>
               <div className="conveninent">
                  <div className="d-flex pl-2-v align-items-center">
                     <img alt="" className="img_formdorm" src={city} />
                     <span className="text_header">สิ่งอำนวยความสะดวก</span>
                  </div>
                  <hr className="line_under_head"></hr>

                  <div className="d-flex furniture">
                     <div className="ภายในห้อง">
                        <div className="in_room d-flex">
                           <img alt="" className="img_furniture" src={door} />
                           <span className="text_topic">ภายในห้อง</span>
                        </div>

                        <div id="check">
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="เครื่องปรับอากาศ"></input>
                              <span>เครื่องปรับอากาศ</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="พัดลม"></input>
                              <span>พัดลม</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="เครื่องทำน้ำอุ่น"></input>
                              <span>เครื่องทำน้ำอุ่น</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="เตียง โต๊ะ ตู้เสื้อผ้า"></input>
                              <span>เตียง โต๊ะ ตู้เสื้อผ้า</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="Internet / wifi"></input>
                              <span>Internet / wifi</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="TV"></input>
                              <span>TV</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="Truevision"></input>
                              <span>Truevision</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ซิงค์ล้างจาน"></input>
                              <span>ซิงค์ล้างจาน</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ตู้เย็น"></input>
                              <span>ตู้เย็น</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="เคเบิลทีวี / ดาวเทียม"></input>
                              <span>เคเบิลทีวี / ดาวเทียม</span>
                           </div>
                        </div>
                     </div>

                     <div className="ส่วนกลาง">
                        <div className="out_room d-flex">
                           <img alt="" className="img_furniture" src={hotel} />
                           <span className="text_topic">ส่วนกลาง</span>
                        </div>

                        <div className="check">
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ที่จอดรถ"></input>
                              <span>ที่จอดรถ</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ระบบ"></input>
                              <span>ระบบ Keycard</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="กล้องวงจรปิด"></input>
                              <span>กล้องวงจรปิด (CCTV)</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="เครื่องซักผ้า"></input>
                              <span>เครื่องซักผ้า</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ไมโครเวฟ"></input>
                              <span>ไมโครเวฟ</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ตู้น้ำหยอดเหรียญ"></input>
                              <span>ตู้น้ำหยอดเหรียญ</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="อินเทอร์เน็ตภายในอาคาร"></input>
                              <span>อินเทอร์เน็ตภายในอาคาร</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="ลิฟท์"></input>
                              <span>ลิฟท์</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="สระว่ายน้ำ"></input>
                              <span>สระว่ายน้ำ</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="แม่บ้านทำความสะอาดห้องทุกเดือน"></input>
                              <span>แม่บ้านทำความสะอาดห้องทุกเดือน</span>
                           </div>
                           <div className="checkbox_room">
                              <input type="checkbox" className="checkbox_type" onChange={handleInputChange} name="อนุญาตให้เลี้ยงสัตว์"></input>
                              <span>อนุญาตให้เลี้ยงสัตว์</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* photo dorm */}
               <div className="photo">
                  <div className="d-flex pl-2-v align-items-center">
                     <img alt="" className="img_formdorm" src={camera} />
                     <span className="text_header">รูปภาพที่พัก</span>
                  </div>
                  <hr className="line_under_head"></hr>

                  <div className="d-flex align-items-start mt-1-v">
                     <div className="d-flex align-items-center w-35">
                        <img alt="" src={warning} className="img_warning"></img>
                        <span className="text_warning">รูปถ่ายที่ไม่อนุญาตให้ลงในประกาศ</span>
                     </div>
                     <div className="policy_of_img">
                        <p className="mt-0"><u>รูปถ่ายที่ติดลายน้ำของกิจการอื่นๆ</u></p>
                        <p className="mt-0"><u>รูปถ่ายที่ติดลิขสิทธิ์หรือละเมิดสิทธิส่วนบุคคล</u></p>
                        <p className="mt-0"><u>รูปถ่ายที่มีการถูกดัดแปลง แก้ไขจากต้นฉบับ</u></p>
                     </div>
                  </div>


                  <div className="upload_image d-flex">
                     <div className="d-flex justify-content-center align-items-center">
                        <img alt="" src={upload_pic} className="w-60"></img>
                     </div>
                  </div>
                  <div className="ml-5-v">
                     {/* <button type="file" id="customFile" name="filename" className="btn_add_image file" data-browse-on-zone-click="true">เพิ่มรูป</button> */}
                     <input onChange={(e) => setSelectedFile(e.target.files)} multiple id="input-b1" name="input-b1" type="file" class="file fs-1-v" data-browse-on-zone-click="true" />
                  </div>
                  <div className="d-flex flex-column mt-0-5-v remark_upload">
                     <span>* รูปภาพแรก จะเป็น<u>รูปภาพหลัก</u>ของหอพัก</span>
                     <span>** ไฟล์ภาพรองรับขนาดไม่เกิน 5 mb</span>
                  </div>
               </div>

               <div className="continue d-flex">
                  <button type="submit" id="btn_continue">ขั้นตอนถัดไป</button>
               </div>
            </form>
         </div>
      </div>

   );
}

export default FurnitureDom;