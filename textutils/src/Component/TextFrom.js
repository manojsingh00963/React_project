import React, { useState, useRef } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here:');
    const textareaRef = useRef(null); 

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Successfully converted to Upper-case!', 'success'); // Alert.....
    };

    const handleLowClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Successfully converted to Lower-case!', 'success'); // Alert.....
    };

    const handleClear = () => {
        setText('');
        props.showAlert('Text successfully cleared!', 'danger'); // Alert.....
    };

    const handleSentenceCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
        props.showAlert('Text successfully converted into sentence case!', 'success'); // Alert.....
    };

    const handleCopyText = () => {
        // Use ref to access the textarea element
        textareaRef.current.select();
        navigator.clipboard.writeText(textareaRef.current.value);
        document.getSelection().removeAllRanges();
        props.showAlert('Copied to Clipboard!', 'info'); // Alert.....
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(' ');
        setText(newText);
        props.showAlert('Spaces removed.', 'success'); // Alert.....
    };

    return (
        <>
            <div  style={{
                    backgroundColor: props.mode === 'dark' ? 'dark' : 'light',
                    color: props.mode === 'dark' ? 'white' : 'black'
                }}
            >
            
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                    <h1 className='mb'>{props.heading}</h1>
                    <hr />
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            value={text}
                            onChange={handleOnChange}
                            style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}
                            id="myBox"
                            rows={4}
                            ref={textareaRef} // Attach ref to the textarea
                        ></textarea>
                    </div>

                    <button disabled={text.length === 0} className="btn btn-info " onClick={handleUpClicked}>
                        Convert to Uppercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-info mx-2 my-1" onClick={handleLowClicked}>
                        Convert to Lowercase
                    </button>
                    <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleClear}>
                        Clear text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleSentenceCase}>
                        Sentence Case
                    </button>
                    <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleCopyText}>
                        Copy text
                    </button>
                    <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleExtraSpaces}>
                        Remove extra spaces
                    </button>
                </div>

                <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'dark' : 'light', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <hr />
                    <h2>Your text summary</h2>
                    <hr /> 
                    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                    <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes read.</p>
                    <h2>Preview</h2>

                    <figure className="border border-secondary my-3 ">
                        <figcaption className="blockquote-footer mt-0">
                            This is <cite title="Source Title">Only for read.</cite>
                        </figcaption>
                        <blockquote className="blockquote">
                            <p
                                className="p-2"
                                style={{ backgroundColor: props.mode === 'dark' ? 'light' : 'dark', color: props.mode === 'dark' ? 'white' : 'black' }}
                            >
                                {text.length > 0 ? text : 'Nothing to preview.'}
                            </p>
                        </blockquote>
                    </figure>
                </div>
            </div>
        </>
    );
}
