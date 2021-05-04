import React from 'react';
import '../admin_form/admin_form.css';

function Dorm_panel({ dataInfo }) {

    console.log(dataInfo);
    return (
        <div className="dorm_info card">
                        <div className="card-header">ข้อมูลที่พัก</div>
                        <div className="card-body d-flex flex-column">
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">ชื่อที่พัก</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_name} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">ประเภทห้องพัก</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_type} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">โซนที่พัก</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_zone} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">เลขที่</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_address?.address_number} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">ซอย</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_address?.alley} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">ถนน</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_address?.street} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">จังหวัด</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_address?.province} />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">อำเภอ/เขต</span>
                                <input className="input_panel my-0-4-v" />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">ตำบล/แขวง</span>
                                <input className="input_panel my-0-4-v" />
                            </div>
                            <div className="d-flex align-items-center justify-content-end">
                                <span className="text_label">รหัสไปรษณีย์</span>
                                <input className="input_panel my-0-4-v" value={dataInfo?.dorm_address?.postcode} />
                            </div>
                        </div>
                    </div>
    );
}
export default Dorm_panel;