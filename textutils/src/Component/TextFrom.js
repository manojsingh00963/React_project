import React, { useState } from 'react'

export default function TextFrom(props) {


    const [text, setText] = useState('Enter text here:');
    // const [text2, setText2] = useState('');// this is an exception. problem solve it
    /*
    handle on clicked call is for using text area to as a input . 
    withou onchange (target.value) it will not work.
    */
    const [color, setColor] = useState({
        color: 'black',
        backgroundColor: 'white'
    })

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
    const handleClear = () => {
        let newText = "";
        setText(newText);
    }
    const SentenceCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
    }
    const highlightText = () => {
        if (color.backgroundColor === 'lightblue') {
            let newText = '';
            setText(newText)
            setColor({
                color: 'black',
                backgroundColor: 'white'
            })
        } else {
            let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
            setText(newText);
            setColor({
                color: 'black',
                backgroundColor: 'lightblue'
            })
            // if (newText.endsWith('.')) { //note: add logic and correct it
            
            // let newText = text.charAt(1).toUpperCase() + text.substring(1).toLowerCase();
            

        }
    }
    const copyText = () => {
        let text = document.getElementById('Textarea-control')
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
    }
    return (
        <>

            <div style={{backgroundColor: props.mode === 'light'?'dark':'light', color: props.mode ==='black'?'white':'black'}} >


            <div className='containerv ' >
                <h1 >{props.heading}-</h1>
                <div className=" mb-1 ">
                    <textarea
                        className="form-control"
                        style={{backgroundColor: props.mode === 'light'?'grey':'white'}}
                        id="Textarea-control"
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
                    className="btn btn-primary mx-2 ms- my-2"
                    onClick={handlelowClicked} >
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-2 ms-1 my-2"
                    onClick={handleClear} >
                    Clear text
                </button>
                <button
                    className="btn btn-primary mx-2 ms-1 my-2"
                    onClick={SentenceCase} >
                    Sentence Case
                </button>
                <button
                    className="btn btn-primary mx-2 ms-1 my-2"
                    onClick={highlightText} >
                    Highlight Text
                </button>
                <button
                    className="btn btn-primary mx-2 ms-1 my-2"
                    onClick={copyText} >
                    Copy text
                </button>
                <button
                    className="btn btn-primary mx-2 ms-1 my-2"
                    onClick={handleExtraSpaces} >
                    Remove extra spaces
                </button>
            </div>


            <div className="container my-3 " style={{backgroundColor: props.mode === 'dark'?'light':'dark',color: props.mode ==='black'?'white':'black'}}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{Math.ceil(0.008 * text.split(" ").length)} Minutes read.</p>
                <h2>Preview</h2>
                <p>{text.lenght>0?text:"Enter something in the textbox above to preview it here"}</p>

                <figure className="border border-secondary my-3">
                    <figcaption className="blockquote-footer mt-0">
                        This is  <cite title="Source Title">Only for read.</cite>
                    </figcaption>
                    <blockquote  className="blockquote">
                        <p style={{backgroundColor: props.mode === 'dark'?'light':'dark',color: props.mode ==='black'?'white':'black'}}>{text}</p>
                    </blockquote>
                </figure>

            </div>
            </div>
        </>
    )
}
