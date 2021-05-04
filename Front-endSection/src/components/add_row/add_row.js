import React, { useState } from "react";

function Add_row(prop) {
  const [display, setDisplay] = useState("flex");
  const [del, setDel] = useState();

  const handleDel = (e) => {
    setDisplay("none")
    setDel(true)
    prop.handleReturnRoomType({delete: e})
  }

  return (
    <div className="w-100 align-items-center justify-content-around mt-1-v" style={{ display: display }}>
      {prop.row+1}
      <input type="hidden" name="none" value={del} />
      <div className="w-20">
        <input type="text" className="input-type-room" placeholder="ex. ห้องเดี่ยว 1 เตียง" 
        row={prop.row}
        name={prop.col1}
        value={prop.value1}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-20">
        <input type="text" className="input-type-room" placeholder="16 ตรม." 
        row={prop.row} 
        name={prop.col2}
        value={prop.value2}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-20">
        <input type="text" className="input-type-room" placeholder="4,000 บาท/เดือน" 
        row={prop.row} 
        name={prop.col3}
        value={prop.value3}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-20">
        <input type="text" className="input-type-room" placeholder="4,000 บาท/เดือน" 
        row={prop.row} 
        name={prop.col4}
        value={prop.value4}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-5">
        <button className="btn-type-room" onClick={() => { handleDel(prop.row) }} type="button">-</button>
      </div>
    </div>
  )
}
export default Add_row;