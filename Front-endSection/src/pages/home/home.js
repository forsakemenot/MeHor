import React, { useState, useEffect, useMemo } from 'react';
import HomeImg from './../../img/Icon-open-home.svg';
import HeartImg from './../../img/Icon-awesome-heart.svg';
import Plus from './../../img/Plus.svg';
import minus from './../../img/minus.svg';
import './home.css';
import './../../App.css';
import { Link, useLocation } from "react-router-dom";
import DomList from "../../components/DomList/DomList";
import Footer from "../../components/Footer/Footer"

import fbt from '../../img/fbt.png';
import keki from '../../img/keki.png';
import rnp from '../../img/rnp.png';
import jinda from '../../img/jinda.png';
import nikom from '../../img/nikom.png';
import kmitl from '../../img/kmitl.png';
import shadow_fbt from '../../img/shadow-fbt.png';
import shadow_rnp from '../../img/shadow-rnp.png';
import shadow_keki from '../../img/shadow-keki.png';
import shadow_jinda from '../../img/shadow-jinda.png';
import shadow_nikom from '../../img/shadow-nikom.png';
import rail from '../../img/rail.png';
import train from '../../img/train.png';

function Home() {
    const [activeBoxPrice, setActiveBoxPrice] = useState(false);
    const [activeBoxConvenient, setActiveBoxConvenient] = useState(false);
    const [activeBoxCommonFee, setActiveBoxCommonFee] = useState(false);
    const [activeBoxSeeMore, setActiveBoxSeeMore] = useState(false);
    const [descDorm, setDescDorm] = useState([]);
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
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    useEffect(() => {

        fetch('https://mehor-backend.herokuapp.com/api/dorm/alldormIsApprove', optionsGet())
            .then(res => res.json())
            .then(res => {
                if (res[0].dorm) {
                    setDescDorm(res);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }, []);
    function togglePrice() {
        setActiveBoxPrice(!activeBoxPrice);
    }
    function toggleConvenient() {
        setActiveBoxConvenient(!activeBoxConvenient);
    }
    function toggleCommonFee() {
        setActiveBoxCommonFee(!activeBoxCommonFee);
    }
    function toggleSeeMore() {
        setActiveBoxSeeMore(!activeBoxSeeMore);
    }
    const dormBox = useMemo(
        () => {
            // if (query.get("zone") === "Nikom") {
            //     return (
            //         descDorm?.map(function (element, index) {
            //             console.log(element.dorm);
            //             return<> {descDorm.dorm_zone === "Nikom" &&
            //                     <DomList data={element} />
            //                 }
            //             </>

            //         })
            //     )
            // }
            // else 
            // if(element.dorm.dorm_zone === "Jinda"){
            //     return <DomList data={element} />
            // }
            if (descDorm ?? descDorm[0].dorm) {
                return (
                    descDorm?.map(function (element, index) {
                        return <DomList data={element} />


                    })
                )
            }
            return false
        }, [descDorm]
    )
    return (
        <div className="d-flex flex-column">
            <div className="map_info">
                <div className="main_kmitl">
                    <img alt="" src={kmitl}></img>
                </div>

                <div className="map-el environment">
                    <img className="map-el rail" alt="" src={rail}></img>
                    <img className="map-el train" alt="" src={train}></img>
                </div>
                <Link to="/zonefbt" className="text-dark">
                    <div className="map-el zone_fbt">
                        <img className="map-el-shadow zone_fbt_shd" alt="" src={shadow_fbt}></img>
                        <img className="map-el-img zone_fbt_img" alt="" src={fbt}></img>
                        <span className="map-el-text">????????? FBT</span>
                    </div>
                </Link>

                <Link to="/zonekeki" className="text-dark">
                    <div className="map-el zone_keki">
                        <img className="map-el-shadow zone_keki_shd" alt="" src={shadow_keki}></img>
                        <img className="map-el-img zone_keki_img" alt="" src={keki}></img>
                        <span className="map-el-text-long">????????? ?????????????????????</span>
                    </div>
                </Link>

                <Link to="/zonernp" className="text-dark">
                    <div className="map-el zone_rnp">
                        <img className="map-el-shadow zone_rnp_shd" alt="" src={shadow_rnp}></img>
                        <img className="map-el-img zone_rnp_img" alt="" src={rnp}></img>
                        <span className="map-el-text">????????? RNP</span>
                    </div>
                </Link>

                <Link to="/zonejinda" className="text-dark">
                    <div className="map-el zone_jinda">
                        <img className="map-el-shadow zone_jinda_shd" alt="" src={shadow_jinda}></img>
                        <img className="map-el-img zone_jinda_img" alt="" src={jinda}></img>
                        <span className="map-el-text-long">????????? ???????????????</span>
                    </div>
                </Link>

                <Link to="/zonenikom" className="text-dark">
                    <div className="map-el zone_nikom">
                        <img className="map-el-shadow zone_nikom_shd" alt="" src={shadow_nikom}></img>
                        <img className="map-el-img zone_nikom_img" alt="" src={nikom}></img>
                        <span className="map-el-text-height">????????? ???????????????</span>
                    </div>
                </Link>
            </div>

            {/* ???????????????????????????????????? */}
            <div className="dom_list d-flex flex-wrap justify-content-center">
                <div className="frame_home">
                    <div className="search_home mt-2-v">
                        <div className="search_dorm">
                            <input className="kanit d-none" type="text" placeholder=" ??????????????? ??????????????????????????????, ?????????????????????"></input>
                            <button className="color-white bg-main kanit d-none">???????????????</button>
                        </div>
                        <Link to="/AddDorm"><button className="annouce_dorm ml-1-v color-white bg-main d-flex align-items-center justify-content-center">+ ???????????????????????????????????????</button></Link>
                    </div>
                    <div className="top_dom_list position-relative mt-1-5-v">
                        <div className="position-absolute line_back_home bg-main w-75"></div>
                        <div className="text_top_dom_list">
                            <span className="color-main">???????????????????????????????????????</span>
                            <img alt="" src={HomeImg} />
                        </div>
                    </div>
                </div>

                <div className="all_disc d-flex">
                    <div className="div_disc">
                        {dormBox}
                    </div>
                    <div className="filter_dropbox position-relative d-none">
                        <div className="position-absolute line_filter"></div>
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>????????????</span>
                            <img alt="" className="img_plus" src={activeBoxPrice ? minus : Plus} onClick={togglePrice} />
                        </div>
                        {
                            activeBoxPrice === true &&

                            <div>
                                <div className="d-flex align-center">
                                    <input type="radio" name="filter_price" className="radio_type_home"></input>
                                    <span className="color-main ml-0-5-v">?????????????????????</span>
                                </div>
                                <div className="d-flex align-center mt-0-5-v">
                                    <input type="radio" name="filter_price" className="radio_type_home"></input>
                                    <span className="color-main ml-0-5-v">????????????</span>
                                </div>
                                <div className="d-flex align-center checkbox_price">
                                    <input type="checkbox" name=""></input>
                                    <span>???????????????????????? 2000 ?????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>2000 - 4000 ?????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>4000 - 6000 ?????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>????????????????????? 6000 ?????????</span>
                                </div>
                            </div>
                        }
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>??????????????????????????????????????????????????????</span>
                            <img alt="" className="img_plus" src={activeBoxConvenient ? minus : Plus} onClick={toggleConvenient} />
                            {
                                activeBoxConvenient === true &&
                                <div className="d-flex align-center checkbox_convenient mt-0-5-v">
                                    <input type="checkbox" name=""></input>
                                    <span>????????????????????????????????????????????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>???????????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>????????????????????????????????????????????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>??????????????? ???????????? ?????????????????????????????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>Internet / wifi</span>
                                    <input type="checkbox" name=""></input>
                                    <span>TV</span>
                                    {
                                        activeBoxSeeMore === true &&
                                        <div className="d-flex align-center checkbox_convenient">
                                            <input type="checkbox" name=""></input>
                                            <span>Truevision</span>
                                            <input type="checkbox" name=""></input>
                                            <span>????????????????????????????????????</span>
                                            <input type="checkbox" name=""></input>
                                            <span>?????????????????????</span>
                                            <input type="checkbox" name=""></input>
                                            <span>?????????????????????????????? / ????????????????????????</span>
                                        </div>
                                    }
                                    <div className="d-flex see_more align-center" onClick={toggleSeeMore} >
                                        <img alt="" src={activeBoxSeeMore ? minus : Plus} />
                                        <span>?????????????????????????????????</span>
                                    </div>

                                </div>
                            }
                        </div>
                        <div className="d-flex box_filter_dropbox">
                            <span className='color-main'>????????????????????????</span>
                            <img alt="" className="img_plus" src={activeBoxCommonFee ? minus : Plus} onClick={toggleCommonFee} />
                            {
                                activeBoxCommonFee === true &&
                                <div className="d-flex align-center checkbox_common_fee mt-0-5-v">
                                    <input type="checkbox" name=""></input>
                                    <span>????????????????????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>???????????? Keycard</span>
                                    <input type="checkbox" name=""></input>
                                    <span>???????????????????????????????????? (CCTV)</span>
                                    <input type="checkbox" name=""></input>
                                    <span>???????????????????????????????????????</span>
                                    <input type="checkbox" name=""></input>
                                    <span>????????????????????????</span>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    );
}

export default Home;