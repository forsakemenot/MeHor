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
      {prop.row}
      <input type="hidden" name="none" value={del} />
      <div className="w-20">
        <input type="text" className="form-control" placeholder="ex. ห้องเดี่ยว 1 เตียง" 
        row={prop.row}
        name={prop.col1}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-20">
        <input type="text" className="form-control" placeholder="16 ตรม." 
        row={prop.row} 
        name={prop.col2}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-20">
        <input type="text" className="form-control" placeholder="4,000 บาท/เดือน" 
        row={prop.row} 
        name={prop.col3}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-20">
        <input type="text" className="form-control" placeholder="4,000 บาท/เดือน" 
        row={prop.row} 
        name={prop.col4}
        onChange={prop.handleReturnRoomType} />
      </div>
      <div className="w-5">
        <button className="btn-type-room" onClick={() => { handleDel(prop.row) }}>-</button>
      </div>
    </div>
  )
}
export default Add_row;