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
    const handlelowClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <>

            <div className='container'>
                <h1>{props.heading}-</h1>
                <div className="mb-3 ">
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
                    className="btn btn-primary mx-2"
                    onClick={handleUpClicked} >
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-2 ms-1"
                    onClick={handlelowClicked} >
                    Convert to Lowercase
                </button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{Math.ceil(0.008 * text.split(" ").length)} Minutes read.</p>

                <figure className="border border-secondary my-3">
                    <figcaption className="blockquote-footer mt-0">
                        This is  <cite title="Source Title">Only for read.</cite>
                    </figcaption>
                    <blockquote className="blockquote">
                        <p>{text}</p>
                    </blockquote>
                </figure>

            </div>
        </>
    )
}
