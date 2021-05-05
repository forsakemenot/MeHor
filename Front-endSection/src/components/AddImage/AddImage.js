import React from "react";
function AddImage({image}) {
    return (
        <div className="w-80 mx-auto d-flex">
            <img src={URL.createObjectURL(image)} className="img_user" /> 
        </div>

    );
}
export default AddImage;
