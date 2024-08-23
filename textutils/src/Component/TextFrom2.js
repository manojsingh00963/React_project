import React, { useState } from 'react';

export default function TextFrom2(props) {
    const [text, setText] = useState('Enter text here:');
    const [color, setColor] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const handleonClicked = (event) => {
        setText(event.target.value);
    };

    const handleUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handlelowClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleClear = () => {
        setText('');
    };

    const SentenceCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
    };

    const highlightText = () => {
        if (color.backgroundColor === 'lightblue') {
            setColor({
                color: 'black',
                backgroundColor: 'white'
            });
        } else {
            setColor({
                color: 'black',
                backgroundColor: 'lightblue'
            });
        }
    };

    const copyText = () => {
        let text = document.getElementById('Textarea-control');
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    };

    return (
        <>
            <div style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light', color: props.mode === 'white' ? 'black' : 'white' }}>
                <div className='containerv'>
                    <h1>{props.heading}-</h1>
                    <div className="mb-1">
                        <textarea
                            className="form-control"
                            style={{
                                backgroundColor: props.mode === 'light' ? 'grey' : 'white',
                                color: color.color
                            }}
                            id="Textarea-control"
                            value={text}
                            onChange={handleonClicked}
                            rows={3}
                            defaultValue={''}
                        />
                    </div>
                    <button className="btn btn-primary mx-2" onClick={handleUpClicked}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2 ms-1 my-2" onClick={handlelowClicked}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-2 ms-1 my-2" onClick={handleClear}>Clear text</button>
                    <button className="btn btn-primary mx-2 ms-1 my-2" onClick={SentenceCase}>Sentence Case</button>
                    <button className="btn btn-primary mx-2 ms-1 my-2" onClick={highlightText}>Highlight Text</button>
                    <button className="btn btn-primary mx-2 ms-1 my-2" onClick={copyText}>Copy text</button>
                    <button className="btn btn-primary mx-2 ms-1 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
                </div>

                <div className="container my-3" style={{ backgroundColor: props.mode === 'dark' ? 'light' : 'dark' }}>
                    <h1>Your text summary</h1>
                    <p>{text.split(' ').length} words, {text.length} characters</p>
                    <p>{Math.ceil(0.008 * text.split(' ').length)} Minutes read.</p>
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>

                    <figure className="border border-secondary my-3">
                        <figcaption className="blockquote-footer mt-0">
                            This is <cite title="Source Title">Only for read.</cite>
                        </figcaption>
                        <blockquote className="blockquote">
                            <p style={{ backgroundColor: props.mode === 'dark' ? 'light' : 'dark' }}>{text}</p>
                        </blockquote>
                    </figure>
                </div>
            </div>
        </>
    );
}
