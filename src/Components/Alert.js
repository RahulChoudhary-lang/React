import React from "react";

const Alert = (props) => {
    return (
        <div style={{height:"50px"}}>
        {props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.types}</strong> : {props.alert.messages}
            {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>}
        </div>
    )
}

export default Alert;