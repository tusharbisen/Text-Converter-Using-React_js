import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState(" ");
    const  handleUpclicked = ()=>
    {
        // console.log("Uppercase Was Clicked" + text);//
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handleLoclicked  = ()=>
    {
        // console.log("Uppercase Was Clicked" + text);//
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const Clear =()=>
    {
        let newtext =" ";
        setText(newtext);
    }

    const handlechange = (event)=>
    {
        // console.log("On Change");
        setText(event.target.value);
    }

     
  return (
    <>
     <div className="container">
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control my-3" value={text} id="mytext" onChange={handlechange} rows="8"></textarea>
      <button className="btn btn-primary mx-2 px-2" onClick={handleUpclicked}>Convert to UpperCase</button>
      <button className="btn btn-danger mx-2" onClick={handleLoclicked}>Convert to Lowercase</button>
      <button className="btn btn-danger mx-2" onClick={Clear}>Clear Text</button>

      </div>
      </div>
      <div className="container my-3">
          <h2>Your Text Summary</h2>
          <p>Word {text.split(" ").length} Character {text.length }</p>
          <p>{0.008 * text.split(" ").length} Minutes Read</p>
          <h2>Preview </h2>
          <p>{text}</p>
      </div>

      </>

      
       
     
  )
 
}
