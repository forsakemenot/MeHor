import React, { useState, useEffect } from "react";
import './room_type.css';
import '../../App.css';
import { Link, useHistory } from "react-router-dom";

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
   const history = useHistory();
   const [numRow, setNumRow] = useState(0);
   const [checked, setChecked] = useState({
      cost: true
   });
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

   const handleInputChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      setRoomType({
         ...roomType,
         [field]: value //????????????????????????????????? Value ???????????????????????????????????? Object NAME:VALUE
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
      fetch('https://mehor-backend.herokuapp.com/api/dorm/dorm', optionsGet())
         .then(res => res.json())
         .then(res => {
            if (res.dorm) {
               console.log(res.dorm._id);
               setRoomType({
                  ...roomType,
                  dorm_id: res.dorm._id //????????????????????????????????? Value ???????????????????????????????????? Object NAME:VALUE
               });
            }
         })
         .catch(error => {
            console.log(error);
         })
   }, []);

   const HandleSubmit = (evt) => {
      console.log(roomType);
      evt.preventDefault();
      let items = roomType.dorm_type;
      let itemFiltered = items.filter(el => {
         return el !== undefined;
      });
      items = itemFiltered

      setRoomType({
         ...roomType,
         dorm_type: items
      })

      fetch('https://mehor-backend.herokuapp.com/api/dorm/dormtype', options(roomType))
         .then(res => res.json())
         .then(res => {
            console.log(res);
            if (res.error) {
               alert(res.error)
            }
            if (res.success) {
               alert("success")
               history.push("/FurnitureDorm");
            }
         })
         .catch(error => {
            console.log(error);
            alert(error)
         })

   }

   return (
      <div className="d-flex">
         <div className="w-20 position-absolute box_progress">
            <div className="d-flex w-70 mx-auto align-items-center position-relative">
               <span className="w-20 text-center num_progress active">1</span>
               <span className="w-80 text-left text_progress">????????????????????????????????????</span>
               <div className="position-absolute line_progress active"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress active">2</span>
               <span className="w-80 text-left text_progress">????????????????????????????????????????????????????????????</span>
               <div className="position-absolute line_progress"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress">3</span>
               <span className="w-80 text-left text_progress">??????????????????????????? ??????????????????????????? ???????????????????????????</span>
               <div className="position-absolute line_progress"></div>
            </div>
            <div className="d-flex w-70 mx-auto align-items-center mt-3-v position-relative">
               <span className="w-20 text-center num_progress">4</span>
               <span className="w-80 text-left text_progress">????????????????????????????????????</span>
               <div className="position-absolute"></div>
            </div>
         </div>

         <div className="form_dorm">

            <form onSubmit={HandleSubmit}>
               <div className="d-flex box-top-head-room-type w-95 mx-auto">
                  <img alt="" className="img_formdorm" src={city} />
                  <span className="text_header">??????????????????????????????</span>
               </div>
               <div className="w-95 mx-auto  d-flex justify-content-center flex-wrap flex-column">
                  <div className="d-flex w-100 align-items-center justify-content-around mt-1-v fs-1-v">
              <div className="w-20">
                        <input type="text" className="input-type-room" placeholder="ex. ?????????????????????????????? 1 ???????????????"
                           row="1"
                           name="room_name"
                           onChange={handleReturnRoomType} />
                     </div>
                     <div className="w-20">
                        <input type="text" className="input-type-room" placeholder="16 ?????????."
                           row="1"
                           name="room_area"
                           onChange={handleReturnRoomType} />
                     </div>
                     <div className="w-20">
                        <input type="text" className="input-type-room" placeholder="4,000 ?????????/???????????????"
                           row="1"
                           name="room_cost"
                           onChange={handleReturnRoomType} />
                     </div>
                     <div className="w-20">
                        <input type="text" className="input-type-room" placeholder="4,000 ?????????/???????????????"
                           row="1"
                           name="additional"
                           onChange={handleReturnRoomType} />
                     </div>
                     <div className="w-5">
                        <button onClick={() => handleAdd()} type="button" className="btn-type-room plus">+</button>
                     </div>
                  </div>
                  {rows}

                  {/* cost */}
               </div>
               <div className="d-flex box-top-head-room-type mt-3-v w-95 mx-auto">
                  <img alt="" className="img_formdorm" src={coin} />
                  <span className="text_header">?????????????????????????????????????????????????????????</span>
               </div>

               {/* deposit */}
               <div className="d-flex form_cost">
                  <div className="d-flex box-top-sub-room-type w-90">
                     <img alt="" className="img_cost" src={money} />
                     <span>????????????????????????????????????/???????????????????????????????????????</span>
                  </div>
                  <div className="m-left mt-0-5-v">
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type"/>
                        <span className="ml-0-5-v">???????????????????????????</span>
                        <input className="amount" name="insurance_bill" onChange={handleInputChange} />
                        <span>?????????</span>
                     </div>
                     <small className="remark">*?????????????????????????????????????????????????????????????????????????????????????????????</small>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" value="no_insurance_bill" name="insurance_bill" onChange={handleInputChange} />
                        <span className="ml-0-5-v">????????????????????????????????????????????????/???????????????????????????????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <span>???????????????</span>
                        <input className="d-flex other ml-1-v" name="insurance_bill" onChange={handleInputChange} />
                     </div>
                  </div>
               </div>

               {/* advance payment */}
               <div className="d-flex form_cost mt-1-v">
                  <div className="d-flex box-top-sub-room-type w-90">
                     <img alt="" className="img_cost" src={payment} />
                     <span>????????????????????????????????????</span>
                  </div>
                  <div className="m-left mt-0-5-v">
                     {/* <div className="d-flex align-items-center mt-0-5-v">
                        <span>???????????????????????????</span>
                        <select className="select_mount" name="pre_paid" onChange={handleInputChange}>
                           <option>-- ?????????????????????????????? --</option>
                           <option value="1">1 ???????????????</option>
                           <option value="2">2 ???????????????</option>
                           <option value="3">3 ???????????????</option>
                           <option value="4">4 ???????????????</option>
                           <option value="5">5 ???????????????</option>
                           <option value="6">6 ???????????????</option>
                           <option value="7">1 ??????</option>
                        </select>
                     </div> */}
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type" />
                        <span className="ml-0-5-v">???????????????????????????</span>
                        <input className="amount ml-1-v" name="pre_paid" onChange={handleInputChange} />
                        <span>?????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="pre_paid" onChange={handleInputChange} value="????????????????????????????????????????????????????????????" />
                        <span className="ml-0-5-v">????????????????????????????????????????????????????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="pre_paid" onChange={handleInputChange} value="?????????????????????????????????????????????????????????" />
                        <span className="ml-0-5-v">?????????????????????????????????????????????????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <span>???????????????</span>
                        <input className="d-flex other ml-1-v" name="pre_paid" onChange={handleInputChange} />
                     </div>
                  </div>
               </div>

               {/* electric */}
               <div className="d-flex form_cost mt-1-v">
                  <div className="d-flex box-top-sub-room-type w-90">
                     <img alt="" className="img_cost_1" src={electric} />
                     <span>???????????????</span>
                  </div>
                  <div className="m-left mt-0-5-v">
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type" />
                        <span className="ml-0-5-v">??????????????????????????????????????????</span>
                        <input className="amount ml-1-v" name="electric_bill" onChange={handleInputChange} />
                        <span>?????????/???????????????</span>
                     </div>
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="electric_bill" onChange={handleInputChange} value="????????????????????????????????????????????????" />
                        <span className="ml-0-5-v">????????????????????????????????????????????????</span>
                     </div>
                     <div className="mt-0-5-v d-flex align-items-center">
                        <span>???????????????</span>
                        <input className="d-flex other ml-1-v" onChange={handleInputChange} />
                     </div>
                  </div>
               </div>

               {/* water */}
               <div className="d-flex form_cost mt-0-5-v">
                  <div className="d-flex box-top-sub-room-type w-90">
                     <img alt="" className="img_cost_1" src={water} />
                     <span>??????????????????</span>
                  </div>

                  <div className="m-left mt-0-5-v">
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="water" />
                        <span className="ml-0-5-v">??????????????????????????????????????????</span>
                        <input className="amount ml-1-v" name="water_bill" onChange={handleInputChange} />
                        <span>?????????/???????????????</span>
                     </div>
                     {/* <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="water" />
                        <span className="ml-0-5-v">????????????????????????</span>
                        <input className="amount ml-1-v" name="water_bill" onChange={handleInputChange} />
                        <span>??????????????????<u>??????</u>/???????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="water" />
                        <span className="ml-0-5-v">????????????????????????</span>
                        <input className="amount ml-1-v" name="water_bill" onChange={handleInputChange} />
                        <span>??????????????????<u>????????????</u>/???????????????</span>
                     </div> */}
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="water" value="????????????????????????????????????????????????" onChange={handleInputChange} />
                        <span className="ml-0-5-v">????????????????????????????????????????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <span>???????????????</span>
                        <input className="d-flex other ml-1-v" name="water_bill" onChange={handleInputChange} />
                     </div>
                     {/* ?????????????????????????????????????????????????????? */}
                     {/* <div className="mt-0-5-v">
                            <input type="checkbox" name="" />
                            <span className="ml-0-5-v">?????????????????????????????????
                            <input className="amount" />?????????/???????????????</span>
                        </div> */}
                  </div>
               </div>

               {/* wifi */}
               <div className="d-flex form_cost mt-1-v">
                  <div className="d-flex box-top-sub-room-type w-90">
                     <img alt="" className="img_cost" src={wifi} />
                     <span>????????????????????????????????????</span>
                  </div>

                  <div className="m-left mt-1-v">
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="internet_bill" />
                        <span className="ml-0-5-v">???????????????????????????</span>
                        <input className="amount" name="internet_bill" onChange={handleInputChange} />
                        <span>?????????/???????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" value="?????????" name="internet_bill" onChange={handleInputChange} />
                        <span className="ml-0-5-v">?????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" value="???????????????????????????????????????????????????" name="internet_bill" onChange={handleInputChange} />
                        <span className="ml-0-5-v">???????????????????????????????????????????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <span>???????????????</span>
                        <input className="d-flex other ml-1-v" name="internet_bill" onChange={handleInputChange} />
                     </div>
                  </div>
               </div>

               {/* keycard */}
               <div className="d-flex form_cost mt-0-5-v">
                  <div className="d-flex box-top-sub-room-type w-90">
                     <img alt="" className="img_cost" src={keycard} />
                     <span>???????????????????????????</span>
                  </div>

                  <div className="m-left mt-1-v">
                     <div className="mt-0-5-v d-flex align-items-center">
                        <input type="radio" className="radio_type" name="keycard" />
                        <span className="ml-0-5-v">???????????????????????????</span>
                        <input className="amount" name="keycard" onChange={handleInputChange} />
                        <span>?????????/???????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" value="?????????" name="keycard" onChange={handleInputChange} />
                        <span className="ml-0-5-v">?????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <input type="radio" className="radio_type" value="??????????????????????????????????????????" name="keycard" onChange={handleInputChange} />
                        <span className="ml-0-5-v">??????????????????????????????????????????</span>
                     </div>
                     <div className="mt-1-v d-flex align-items-center">
                        <span>???????????????</span>
                        <input className="d-flex other ml-1-v" name="keycard" onChange={handleInputChange} />
                     </div>
                  </div>
               </div>

               <div className="continue d-flex">
                  <button id="btn_continue" type="submit">????????????????????????????????????</button>
               </div>
            </form>
         </div>

      </div>
   );
}



export default RoomType;