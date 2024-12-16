import React, { useState } from "react";
// import "./Toolbar.css"; // Assume custom styles for layout similar to your HTML

const ContactPage = () => {
  // State for font, font size, and text styles
  const [font, setFont] = useState("Calibri");
  const [fontSize, setFontSize] = useState(12);
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontColor, setFontColor] = useState("#000000");

  // Toggle style functions
  const toggleBold = () => setBold(!bold);
  const toggleItalic = () => setItalic(!italic);
  const toggleUnderline = () => setUnderline(!underline);

  // Sample text style object
  const sampleTextStyle = {
    fontFamily: font,
    fontSize: `${fontSize}pt`,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    color: fontColor,
  };



  

  const [sent, setSendMail] = useState('');
  const [sending, setSending]=useState(false)
  const [emailData, setEmailData] = useState({
    from: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    setSending(true)
    try {
      const response = await fetch('http://localhost:2000/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      if (response.ok) {
        setSendMail(data.message); // Message from the server if email sent successfully
        setSending(false)
      } else {
        setSendMail(data.message); // Error message from server response
        setSending(false)
      }
    } catch (error) {
      setSendMail(`Error sending email: ${error.message}`);
      setSending(false)
    }
  };

  return (
    <div className="toolbar">
      {/* Font Selector */}
      <div className="pickerContainer" title="Font">
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          aria-label="Font"
        >
          <option value="Calibri">Calibri</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Arial">Arial</option>
        </select>
      </div>

      {/* Font Size Selector */}
      <div className="pickerContainer" title="Font size">
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
      </div>

      {/* Bold Button */}
      <button
        onClick={toggleBold}
        className="o365button"
        title="Bold"
        aria-pressed={bold}
      >
        <b>B</b>
      </button>

      {/* Italics Button */}
      <button
        onClick={toggleItalic}
        className="o365button"
        title="Italics"
        aria-pressed={italic}
      >
        <i>I</i>
      </button>

      {/* Underline Button */}
      <button
        onClick={toggleUnderline}
        className="o365button"
        title="Underline"
        aria-pressed={underline}
      >
        <u>U</u>
      </button>

      {/* Font Color Picker */}
      <input
        type="color"
        value={fontColor}
        onChange={(e) => setFontColor(e.target.value)}
        title="Font color"
      />

      {/* Sample Text */}
      <div className="sampleTextContainer" style={{ height: "144px" }}>
        <div className="container p-5">
          {sent && <p>{sent}</p>} {/* Display success or error message */}
          <form onSubmit={sendEmail}>
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
            <div className="my-3">
              <textarea
                className="form-control"
                name="message"
                placeholder="Message"
                value={emailData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="my-3">
              <button className="form-control btn btn-success" type="submit">
                {sending ? "Sending" : "Send email"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
