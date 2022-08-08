import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnClick = () => {
        console.log("this on Change" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log("this Lo Change" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("this is Clear Text" + text);
        let newText = "";
        setText(newText);
    }
    
    //for copy text
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        console.log(text.value);
        navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // useState
    const [text, setText] = useState("");

    return (
        <>
            <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"white":"grey", color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button onClick={handleOnClick} className="btn btn-primary mx-3 ">Convert To UpperCase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-3">Convert To LowerCase</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-3">Clear Text</button>
                <button onClick={handleCopy} className="btn btn-primary mx-3">Copy Text</button>
            </div>
            <div className="container my-3" style={{color:props.mode==="light"?"black":"white"}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Previews</h2>
                <p>{text.length>0?`${text}`:"Please enter the text to preview"}</p>
            </div>
        </>
    );
}