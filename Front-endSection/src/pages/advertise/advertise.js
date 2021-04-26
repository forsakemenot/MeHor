import React from "react";
import './advertise.css';
import '../../App.css';

import { Link } from "react-router-dom";

import ads_banner from '../../img/Ads-banner.svg';

function Advertise() {

    return (
        <div className="container-fluid">
            <img alt="" className="img_ads_banner" src={ads_banner}></img>
        </div>
        );
    }
    
    export default Advertise;