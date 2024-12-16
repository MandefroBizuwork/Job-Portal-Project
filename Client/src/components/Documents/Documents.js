import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Documents = () => {
  const [file, setFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const response = await fetch("http://localhost:2000/documents");
        if (response.ok) {
          const data = await response.json();
          setDocuments(data.Documents || []);
        } else {
          console.error("Failed to fetch documents");
        }
      } catch (err) {
        console.error("Error fetching documents:", err);
      }
    };

    loadDocuments();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("myDocument", file);

    try {
      const response = await fetch("http://localhost:2000/documents/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "File uploaded successfully.");
        setFile(null);
        e.target["myFile"].value=[]
        //Refresh the document list
        const updatedResponse = await fetch("http://localhost:2000/documents");
        const updatedData = await updatedResponse.json();
        setDocuments(updatedData.Documents || []);
    
      } else {
        setError(data.error || "Failed to upload the file.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
      console.error(err);
    }
  };

  const handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = url.split("/").pop();
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        console.error("Failed to download file");
      }
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/documents/delete/${id}`, {
        method: "DELETE", // Proper HTTP method
        headers: {
          "Content-Type": "application/json", // Specify JSON format
        },
       
      });
  
      if (response.ok) {
        const data = await response.json(); // Parse the JSON response
        setMessage(data.message || "Document deleted successfully");
  
        // Remove the deleted document from state
       // setDocuments((prevDocuments) => prevDocuments.filter((doc) => doc.id !== id)     );
        const updatedResponse = await fetch("http://localhost:2000/documents");
        const updatedData = await updatedResponse.json();
        setDocuments(updatedData.Documents || []);
      } else {
        console.error("Failed to delete the document");
      }
    } catch (err) {
      console.error("Error deleting document:", err.message);
    }
  };
  
  return (
    <div className="container-fluid login-bg">
      <div className="container">
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="doc"><strong>Choose file:</strong></label>
          <div className="my-3 d-flex col-6">
            <input
              className="form-control"
              type="file"
              name="myFile"
              onChange={handleFileChange}
            />
            <button className="btn btn-success" type="submit">
              Upload
            </button>
          </div>
        </form>

        <table className="table table-striped table-hover">
          <thead style={{ backgroundColor: "lightgray" }}>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Doc ID</th>
              <th scope="col">Filename</th>
              <th style={{ textAlign: "center" }} colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {documents.length > 0 ? (
              documents.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>
                    <a
                      style={{ textDecoration: "underline", color: "blue" }}
                      href={`http://localhost:2000/documents/${item.Documents}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Documents}
                    </a>
                  </td>
                  <td style={{ display: "flex",justifyContent:"center", columnGap: "10px" }}>
                    <button
                      onClick={() =>
                        handleDownload(
                          `http://localhost:2000/documents/${item.Documents}`
                        )
                      }
                      className="btn btn-success"
                    >
                      Download
                    </button>
                 
                    <button onClick={() =>handleDelete(item.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No files available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
