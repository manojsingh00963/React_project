import React, { useState } from 'react'

export default function TextFrom(props) {

    const [text, setText] = useState('Enter text here:');

    /*
    handle on clicked call is for using text area to as a input . 
    withou onchange (target.value) it will not work.
    */

    const handleonClicked = (event) => {
        setText(event.target.value)
    }
    const handleUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handledownClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <div>
            <div className="mb-3 ">
                <h1>{props.heading}-</h1>
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={text}
                    onChange={handleonClicked}
                    rows={3}
                    defaultValue={""}
                />
            </div>
            <button
                className="btn btn-primary"
                onClick={handleUpClicked} >
                Convert to Uppercase
            </button>
            <button
                className="btn btn-primary ms-1"
                onClick={handledownClicked} >
                Convert to Lowercase
            </button>
        </div>
    )
}
