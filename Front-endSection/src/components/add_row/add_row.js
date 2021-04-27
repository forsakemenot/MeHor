import React, { useState } from "react";

function Add_row(prop) {
  const [display, setDisplay] = useState("flex");
  const [del, setDel] = useState();

  const handleDel = (e) => {
    setDisplay("none")
    setDel(true)
  }

  return (
    <div className="row" style={{display: display}}>
      {prop.row}
      <input type="hidden" value="none"></input>
      <div className="col">
        <input type="text" className="form-control" placeholder="ex. ห้องเดี่ยว 1 เตียง" name={prop.col1} />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="16 ตรม." name={prop.col2} />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="4,000 บาท/เดือน" name={prop.col3} />
      </div>
      <div className="col">
        <input type="text" className="form-control" placeholder="4,000 บาท/เดือน" name={prop.col4} />
      </div>
      <div className="col">
        <button className="btn btn-primary" onClick={() => { handleDel() }}>-</button>
      </div>
    </div>
  )
}
export default Add_row;