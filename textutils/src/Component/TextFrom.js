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

    const handleonChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClicked = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Successfylly converted to Upper-case!","success") // Alert.....
    }
    const handlelowClicked = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Successfylly converted to Lower-case!","success") // Alert.....
    }
    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text successfully cleared!","danger") // Alert.....
    }
    const SentenceCase = () => {
        let newText = text.charAt(0).toUpperCase() + text.substring(1).toLowerCase();
        setText(newText);
        props.showAlert("Text successfully converted into sentence case!","info") // Alert.....
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
        props.showAlert("Copy To Clipboard!","info") // Alert.....
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("Space removed.","success") // Alert.....
    }
    return (
        <>
        <div className='p-4' 
        style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'light' ,
         color: props.mode ==='dark'?'white':'black' }}
          >

            <div className='container '

            style={{ color: props.mode ==='dark'?'white':'black'}}

             >
                <h1 >{props.heading}-</h1>
                <div className=" mb-1 ">
                    <textarea
                    
                        className="form-control"
                        id="Textarea-control"
                        value={text}
                        onChange={handleonChange}
                        rows={5}
                        defaultValue={""}
                        style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white' , color: props.mode ==='dark'?'white':'black' }}
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


            <div className="container my-3 " 
            style={{ backgroundColor:props.mode === 'dark'?'dark':'white', 
            color: props.mode ==='dark'?'white':'black'}} 
            >
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words, {text.length} characters</p>
                <p>{Math.ceil(0.008 * text.split(" ").length)} Minutes read.</p>
                <h2>Preview</h2>

                <figure  className="border border-secondary my-3">
                    <figcaption className="blockquote-footer mt-0">
                        This is  <cite title="Source Title">Only for read.</cite>
                    </figcaption>
                    <blockquote className="blockquote">
                <p className=' p-2 ' style={{ backgroundColor: props.mode === 'dark' ? 'light' : 'dark', color: props.mode === 'dark' ? 'white' : 'black' }} >{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
                    </blockquote>
                </figure>

            </div>
        </div>
        </>
    )
}
