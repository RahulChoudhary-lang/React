import React, {useState} from "react";

export default function TextForm(props) {
    const handleOnClick = () => { 
         console.log("this on Change" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
          setText(event.target.value);
    }
    
    // useState
    const [text, setText] =  useState("This is UseState");
    
    return (
        <div>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
            </div>
            <button onClick={handleOnClick} className="btn btn-primary">Convert To UpperCase</button>
        </div>
    );
}