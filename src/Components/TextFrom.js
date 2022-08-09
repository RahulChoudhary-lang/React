import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnClick = () => {
        console.log("this on Change" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Upper case", "success");
    }

    const handleLoClick = () => {
        console.log("this Lo Change" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lower case", "success");
    }

    const handleClearClick = () => {
        console.log("this is Clear Text" + text);
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }
    
    //for copy text
    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        console.log(text.value);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    // useState
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    } 

    // for word counting
    if(text.length){
        var num = text.split(" ").length;
    }
    else{
        num = 0;
    }
    console.log(text.length);

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
                <p>{`${num}`} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Previews</h2>
                <p>{text.length>0?`${text}`:"Please enter the text to preview"}</p>
            </div>
        </>
    );
}