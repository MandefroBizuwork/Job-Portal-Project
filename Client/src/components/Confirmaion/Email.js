import React, { useState } from "react";
import classes from './contact.module.css'
import SendCodeToEmail from "./SendCodeToEmail";
const SendEmail = () => {
  const [sent, setSendMail] = useState("");
  const [sending, setSending] = useState(false);
  const [emailData, setEmailData] = useState({
    from: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
    if (name === "message") {
      setCount(maxLength - value.length);
    }
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setSending(true);
    try {
      const response = await fetch("http://localhost:2000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      if (response.ok) {
        setSendMail(data.message);
        setEmailData({ from: "", subject: "", message: "" }); // Clear form
      } else {
        setSendMail(data.message);
      }
    } catch (error) {
      setSendMail(`Error sending email: ${error.message}`);
    } finally {
      setSending(false);
    }
  };
  const [capital, setCapital] = useState(false);
  const [font, setFont] = useState("Calibri");
  const [fontSize, setFontSize] = useState(12);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontColor, setFontColor] = useState("black");

  const toggleBold = () => setBold(!bold);
  const toggleItalic = () => setItalic(!italic);
  const toggleUnderline = () => setUnderline(!underline);
  const toggleCapital = () => setCapital(!capital);



  const fontType=["Calibri","Helvetica","Arial","Serif","Sans-serif","Monospace","Cursive","Fantasy"]
  const sampleTextStyle = {
    fontFamily: font,
    fontSize: `${fontSize}pt`,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    color: fontColor,
    textTransform:capital? "uppercase":"lowercase"
  };
  const maxLength = 100; 
const [charactorCount,setCount]=useState(maxLength)
  return (
    <div className={` container p-5 bg-light`}>
<SendCodeToEmail/>







      {sent && <p>{sent}</p>}

    

      {/* <form onSubmit={sendEmail}>
        <div className="my-3">
          <input
            className="form-control"
            type="email"
            name="from"
            placeholder="From"
            value={emailData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-3">
          <input 
            className="form-control"
            type="text"
            name="subject"
            placeholder="Subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`border   ${classes.formater}` } >
     




        <div className={`d-flex gap-2 mb-5 my-2 mx-2 ${classes.message}`}>
       
       <select
         value={font}
         onChange={(e) => setFont(e.target.value)}
         aria-label="Font"
       >
        { fontType.map((fonts,key)=>{

      return <option key={key} value={fonts}>{fonts}</option>
        })
          
          
        }
        
       </select>
    
  
       <select
         value={fontSize}
         onChange={(e) => setFontSize(parseInt(e.target.value))}
         aria-label="Font size"
       >
         {[8, 10, 12, 14, 16, 18, 24, 32].map((size) => (
           <option key={size} value={size}>
             {size}
           </option>
         ))}
       </select>
  

       <button
         onClick={toggleBold}
         className="o365button"
         title="Bold"
         aria-pressed={bold}
       >
         {bold ? <b>B</b> : <small>B</small>}
       </button>
       <button
         onClick={toggleCapital}
       
         title="Case"
       
         style={{textTransform:sampleTextStyle.textTransform}}
       >
       Case
      
       </button>
      
       <button
         onClick={toggleItalic}
         className="o365button"
         title="Italics"
         aria-pressed={italic}
       >
         {italic ? <i>I</i> : <small>I</small>}
       </button>


       <button
         onClick={toggleUnderline}
         className="o365button"
         title="Underline"
         aria-pressed={underline}
       >
         {underline ? <u>U</u> : <small>U</small>}
       </button>

  
       <div className={`${classes.f}  d-flex flex-column align-items-center`}>
         <button 
           type="button"
           onClick={() => document.getElementById("colorPicker").click()}
           style={{ color: fontColor,background:"none" }}
           aria-label="Select font color"
         >
           A
         </button>

         <input
           id="colorPicker"
        
           type="color"
           value={fontColor}
           onChange={(e) => setFontColor(e.target.value)}
           title="Font color"
         />
       </div>
  












        </div>
        <textarea
        cols={40}
        rows={5}
        maxLength={maxLength}
        className="form-control"
        name="message"
        placeholder="Message"
        value={emailData.message}
        onChange={handleChange}
        required
        style={sampleTextStyle}
      />
           <p>Remaining characters: <span id="remainingChars">{charactorCount}</span></p>
        </div>
        <div className="my-3">
          <button className=" btn btn-success" type="submit" disabled={sending}>
            {sending ? "Sending" : "Send email"}
          </button>
        </div>
      </form> */}
    </div>
  );
};

export default SendEmail;
