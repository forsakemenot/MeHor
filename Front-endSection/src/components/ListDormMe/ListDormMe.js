import del from '../../img/icon-red-del.svg';
import dorm from "../../img/img_test.svg"
import edit from "../../img/icon-edit.svg"
import { Link } from "react-router-dom";
function ListDormMe({ data }) {

    return (
        <div className="test_check d-flex align-items-center w-95 mt-1-v mb-1-v">
            <div className="d-flex w-25 h-100">
                <img alt="" src={dorm} className="w-100 h-100" />
            </div>
            <div className="d-flex w-60 justify-content-start h-80">
                <div className="d-flex flex-column w-15 mx-auto align-items-end justify-content-around">
                    <span className="fs-1-v color-main">ชื่อหอพัก :</span>
                    <span className="fs-1-v color-main">สถานะ :</span>
                    {/* <span className="fs-1-v color-main">การปรับปรุง :</span> */}
                </div>
                <div className="d-flex flex-column w-80 h-100 mx-auto align-items-start justify-content-around">
                    <span className="fs-1-v color-main font-weight-bold">{data.dorm_name}</span>
                    {data.isApprove === true ?
                        <div className="bg-success rounded fs-0-8-v btn-check-status">
                            <span className="color-white">ตรวจสอบแล้ว</span>
                        </div> :
                        <div className="bg-warning rounded fs-0-8-v btn-check-status">
                            <span className="color-white">รอการตรวจสอบ</span>
                        </div>
                    }
                    {/* <span className="fs-1-v">(ปรับปรุงล่าสุด -)</span> */}
                </div>
            </div>
            <div className="d-flex w-15 align-items-start justify-content-end h-100">
                <Link to={`/AdminLinkForm/` + data._id}><img alt="" src={edit} className="pointer image-del-dorm-me" /> </Link>
                <img alt="" src={del} className="pointer image-del-dorm-me" />

            </div>
        </div>

    );
}


export default ListDormMe;