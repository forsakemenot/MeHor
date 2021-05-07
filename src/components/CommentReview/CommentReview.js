import React from "react";
import "./CommentReview.css";
import like from "../../img/like.svg"
import dislike from "../../img/dislike.svg"
import threeDot from "../../img/three-dot.svg"
import commentBlue from "../../img/comment-blue.svg"
import commentWhite from "../../img/comment-white.svg"
import checkCircle from "../../img/check-circle.svg"
function CommentReview({ data }) {
    return (
        <div className="w-80 mx-auto d-flex mt-1-v box-comment flex-wrap">
            <div className="w-95 mx-auto d-flex flex-wrap">
                <div className="w-50 d-flex justify-content-start align-items-center">
                    <img alt="" className="profile_in_commet" src={data.image} />
                    <div className="w-90 d-flex flex-column">
                        <div className="d-flex align-items-center">
                        <span className="fs-1-2-v w-25">{data.name}</span>
                        <img alt="" className="w-5 image-check" src={checkCircle}/>
                        </div>
                        <span >{data.date} : {data.time}</span>
                    </div>

                </div>
                <div className="w-50 d-flex align-items-center justify-content-end">
                    <div className="w-30 d-flex justify-content-around align-items-center mr-1-v">
                        <img alt="" src={like} />
                        <span className="fs-1-2-v color-main">{data.like}</span>
                        <img alt="" src={dislike} />
                    </div>
                    <div className="w-5 d-flex flex-column justify-content-around align-items-center h-75">
                        <span>#{data.no}</span>
                        <img alt="" src={threeDot} />
                    </div>
                </div>
                <div className="w-100 d-flex border-box-comment">
                    <span className="color-main pt-0-5-v">{data.comment}</span>
                </div>
                <div className="w-100 d-flex justify-content-end">
                    <div className="w-5 d-flex py-0-5-v justify-content-end mr-0-5-v">
                        <img alt="" className="mr-0-5-v" src={commentBlue} />
                        <span >{data.amount_commet}</span>
                    </div>
                </div>

            </div>
            <div className="w-100 d-flex py-0-5-v bg-main border-box-comment-bottom">
                <div className="w-95 mx-auto">
                    <img alt="" className="mr-1-v" src={commentWhite} />
                    <span className="color-white">ตอบกลับความคิดเห็นนี้</span>
                </div>
            </div>
        </div>
    );
}
export default CommentReview;
