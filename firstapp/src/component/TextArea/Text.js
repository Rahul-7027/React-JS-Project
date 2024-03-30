import React, { useState } from 'react'

function Text({ heading }) {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }

    // upperCase
    const handleUpper = () => {
        setText(text.toUpperCase())
    }

    // loweCase
    const handleLower = () => {
        setText(text.toLowerCase())
    }

    // clean
    const handleClean = () => {
        setText("");
    }

    // handlecapital
    const handleCapital = () => {
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText)
    }

    // remove space
    const handleRemove = () => {
        setText(text.trim().split(/ +/).join(' '))
    }

    // copy clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    return (
        <div className='container my-3'>
            <h2>{heading}</h2>
            <div className="form-floating my-3">
                <textarea className="form-control" value={text} onChange={handleChange} rows="8" placeholder="Enter Your Text" id="floatingTextarea2" style={{ height: "300px" }}></textarea>
            </div>
            <div className="button">
                <button type="button" className="btn btn-primary mx-3" onClick={handleUpper}>UpperCase</button>
                <button type="button" className="btn btn-secondary mx-3" onClick={handleLower}>LowerCase</button>
                <button type="button" className="btn btn-info" onClick={handleCapital}>First Letter Capital</button>
                <button type="button" className="btn btn-success mx-3" onClick={handleClean}>Clean</button>
                <button type="button" className="btn btn-danger mx-3" onClick={handleRemove}>Remove Space</button>
                <button type="button" className="btn btn-warning mx-3" onClick={handleCopy}>Copy</button>
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </div>
    )
}

export default Text
