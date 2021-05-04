import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import CostPanel from '../../pages/admin/component/cost_panel'
import DetailTypeRoom from '../../pages/admin/component/detail_typeRoom'
import DormInfoPanel from '../../pages/admin/component/dormInfo_panel.js'
import ContactDormPanel from '../../pages/admin/component/contactDorm_panel'
// import MapPanel from '../../pages/admin/component/map_panel.js'
import ConInPanel from '../../pages/admin/component/conveninetIn_panel.js'
import ConOutPanel from '../../pages/admin/component/conveninetOut_panel.js'
import DetailPanel from '../../pages/admin/component/detail_panel'
import CustomerCostPanel from '../../pages/admin/component/customet_costPanel'
import Add_row from "../../components/add_row/add_row"
import bin from '../../img/metro-bin.svg';
import upload from '../../img/upload.svg';
import info from '../../img/info-circle.svg';

function CustomerForm() {
   const history = useHistory();
   const { UserId } = useParams()
   const [dormid, setDormid] = useState();
   const [roomType, setRoomType] = useState({});
   const [descDorm, setDescDorm] = useState({});
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
      fetch('http://103.13.231.22:5000/api/dorm/roomtypebyid/' + UserId, optionsGet())
         .then(res => res.json())
         .then(res => {
            if (res.DormType) {
               setRoomType(res.DormType);
               console.log(res.DormType);
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);


   useEffect(() => {
      fetch('http://103.13.231.22:5000/api/dorm/dormById/' + UserId, optionsGet())
         .then(res => res.json())
         .then(res => {
            if (res.Dorm) {
               setDescDorm(res.Dorm);
               console.log(res.Dorm);
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);
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
         let row = e.target?.getAttribute('row') - 1
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

   const options = data => {

      return {
         headers: {
            'Authorization': token,
         },
         method: 'post',
         body: data
      };
   };

   const [fileDorm, setFileDorm] = useState("");
   const [fileDormNum, setFileDormNum] = useState("");

   // Handles file upload event and updates state
   function handleFileDorm(event) {
      setFileDorm(event.target.files[0]);
      // Add code here to upload file to server
      // ...
   }
   function handleFileDormNum(event) {
      setFileDormNum(event.target.files[0]);

      // Add code here to upload file to server
      // ...
   }

   const HandleSubmit = (evt) => {
      console.log(dormid);
      const formData = new FormData();
      formData.append("dorm_id", dormid);
      formData.append("regis_pic", fileDorm);
      formData.append("location_pic", fileDormNum);
      for (var pair of formData.entries()) {
         console.log(pair[1]);
      }

      fetch('http://localhost:5000/api/dorm/dormDocument', options(formData))
         .then(res => res.json())
         .then(res => {
            console.log(res);
            if (res.error) alert(res.error);
            if (res.success) {
               alert("success")
               history.push("/DormMe");
            }
         })
         .catch(error => {
            console.log(error);
            alert("success")
            history.push("/DormMe");
         })
      evt.preventDefault();
   }
   return (
      <div className="d-flex bg-admin">
         <div className="d-flex flex-column w-100 color-main align-items-center">
            <div className="navigation bg-white w-100 d-flex align-items-center justify-content-between">
               <span>รายการหอพักทั้งหมดในระบบ</span>
               <span>Welcome! - ADMIN POWER</span>
            </div>

            <div className="w-85 form_panel flex-column p-3 mt-2-v mb-2-v">
               <form>
                  <div className="d-flex flex-wrap">
                     <div className="card_size card-columns">
                        <DormInfoPanel dataInfo={descDorm} />
                        <ContactDormPanel dataContact={descDorm} />
                        {/* <MapPanel /> */}
                        <DetailPanel dataDetail={descDorm} />
                     </div>
                  </div>

                  {/* Type Room */}
                  <div className="type">
                     <div className="card border-light panel_frame">
                        <div className="card-header d-flex align-items-center justify-content-between">
                           <span className="fs-1-v">ประเภทห้องพัก</span>
                        </div>

                        <div className="form-group">
                           {
                              roomType?.dorm_type?.map(function (element, index) {
                                 return (
                                    <>
                                       {console.log(element.room_name)}
                                       <Add_row key={index}
                                          row={index}
                                          value1={element.room_name}
                                          value2={element.room_area}
                                          value3={element.room_cost}
                                          value4={element.additional}
                                          handleReturnRoomType={handleReturnRoomType}
                                       />
                                    </>
                                 )
                              })
                           }
                        </div>
                     </div>
                  </div>

                  <div class="card-columns d-flex">
                     <CustomerCostPanel />
                  </div>
                  <div className="d-flex w-100">
                     <ConInPanel />
                     <ConOutPanel />
                  </div>

                  <div className="image mt-1-v">
                     <div className="card border-light panel_frame">
                        <div className="card-header d-flex align-items-center justify-content-between">
                           <span className="fs-1-v w-50">รูปภาพทั้งหมด</span>
                           <div className="d-flex align-items-center justify-content-end w-50">
                              <input type="checkbox" className="checkbox_panel mr-1-v" />
                              <span className="fs-1-v">เลือกทั้งหมด</span>
                              <img src={bin} className="ml-2-v w-5"></img>
                           </div>
                        </div>
                        <div className="form-group">
                           <img alt="" className="image_dorm_all" />
                        </div>
                     </div>
                  </div>

                  <div className="doc mt-1-v">
                     <div className="card border-light panel_frame">
                        <div className="card-header d-flex align-items-center justify-content-between">
                           <span className="fs-1-v w-50">เอกสารยืนยัน</span>
                        </div>
                        <div className="document d-flex align-items-center justify-content-center">
                           <form onSubmit={HandleSubmit}>
                              <div className={`house_regis m-1-v mx-auto d-flex ${fileDorm.type != undefined && "active"}`}>
                                 <div className="header_topic d-flex">
                                    <p className="pl-1-v m-0">สำเนาทะเบียนบ้านของ "ที่พัก" พร้อมเซ็นสำเนาถูกต้อง</p>
                                    <p className="remark_file pl-1-v m-0">(รองรับไฟล์ jpg. png. และ pdf.)</p>
                                 </div>
                                 <div className="status d-flex">
                                    <p className="status_file d-flex">
                                       {fileDorm.type == undefined ?
                                          "ยังไม่ได้อัพโหลด" : fileDorm.name
                                       }
                                    </p>

                                 </div>


                                 <div className="upload d-flex position-relative">
                                    <input type="file" onChange={handleFileDorm} className="input-file-type position-absolute w-90 mx-auto bg-info" />
                                    <span className="upload_file d-flex">อัพโหลดสำเนาทะเบียนบ้าน<img alt="" src={upload} className="img_upload ml-0-5-v"></img></span>
                                 </div>
                              </div>

                              <div className={`house_regis mx-auto d-flex ${fileDormNum.type != undefined && "active"}`}>
                                 <div className="header_topic d-flex position-relative">
                                    <p className="pl-1-v m-0">รูปถ่ายที่พักโดยให้เห็น "บ้านเลขที่" และอาคารที่ชัดเจน</p>
                                    <p className="remark_file pl-1-v m-0">(รองรับไฟล์ jpg. png. และ pdf.)</p>
                                 </div>
                                 {/* {file.name} */}
                                 <div className="status d-flex">
                                    <p className="status_file d-flex">
                                       {fileDormNum.type == undefined ?
                                          "ยังไม่ได้อัพโหลด" : fileDormNum.name
                                       }
                                    </p>
                                 </div>
                                 <div className="upload d-flex position-relative">
                                    <input type="file" onChange={handleFileDormNum} className="input-file-type position-absolute w-90 mx-auto bg-info" />
                                    <span className="upload_file d-flex">อัพโหลดภาพถ่าย<img alt="" src={upload} className="img_upload ml-0-5-v"></img></span>


                                 </div>
                                 {/* <div id="upload-box" className="file-input">

                                    <label for="file">
                                       Select file
                                    <p class="file-name"></p>
                                    </label>
                                    {file && <ImageThumb image={file} />}
                                 </div> */}
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </form>

               <div className="button line-top-gray">
                  <div className="d-flex justify-content-center mt-1-v">
                     <div className="btn_cancel bg-main d-flex justify-content-center align-items-center">
                        <p className="m-0 text-white">ยกเลิก</p>
                     </div>
                     <div className="btn_cancel bg-success d-flex justify-content-center align-items-center">
                        <p className="m-0 text-white">ตกลง</p>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>


   );
}


export default CustomerForm;