import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')

    const[align , setAlign] = useState({
        textAlign: 'left'
    })

    const handleUppercase = () => {
        setText(text.toUpperCase())
    }

    const handleLowercase = () => {
        setText(text.toLowerCase())
    }

    const handleClearText = () => {
        setText('')
    }

    const editText = (event) => {
        setText(event.target.value)

    }

    const handleAlign = () => {

        setAlign({
            textAlign: align.textAlign === 'left'? 'center' : 'left'
        })
      
    }
 


    return (
        <>

            <div className="mb-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={editText} style={align}></textarea>

                <button className='btn btn-primary my-2 mx-2' onClick={handleUppercase}>Uppercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleLowercase}>Lowercase</button>
                <button className='btn btn-danger  my-2 mx-2' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleAlign}>Align</button>
            </div>

            <div className="container my-3">
                <h1>Your text summarry here</h1>
                <p>{text.split(" ").length} words and {text.length} charaters</p>
                <p>{text.split(" ").length * 0.008} minutes to read</p>
            </div>
        </>


    )
}
