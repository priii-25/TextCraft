import React, {useState} from 'react'
export default function TextForm(props){
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
  }
  const handleCopy = () =>{
    var text=document.getElementById("textArea");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  const handleClear=()=>{
    let newText='';
    setText(newText)
  }
    //listening for event other you cannot listen
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    //state/ text cannot pe updated without state fucntion
    const [text, setText]=useState('Enter text here');
   // text="fghjkl" //wrong way chang the text
   // setText("NEW TEXT");
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textArea" rows="5"></textarea>
      </div>
      <button className='btn btn-primary mx-2 my-2' onClick={handleUpClick} >Convert to Uppercase</button>
      <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Convert to Lowercase</button>
      <button className='btn btn-primary mx-2 my-2' onClick={handleClear} >Clear</button>
      <button className='btn btn-primary mx-2 my-2' onClick={handleCopy} >Copy Text</button>
      <button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpace} >Remove Extra Spaces</button>

    </div>
    <div className="container my-2">
      <h1>Your text summary:</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
    </div>

    </>
  )
}
