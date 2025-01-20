import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConfirmDeleteModal from "../Pages/JobPage/ConfirmDeleteModal";

const Documents = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [documents, setDocuments] = useState([]);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, id: null });


  const loadDocuments = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:2000/documents");
      if (response.ok) {
        const data = await response.json();
        setDocuments(data.Documents || []);
      } else {
        setError("Failed to fetch documents.");
      }
    } catch (err) {
      setError("Error fetching documents.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
  

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
    formData.append("description", description);

    setLoading(true);
    try {
      const response = await fetch("http://localhost:2000/documents/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (response.status===200) {
        setMessage(data.message || "File uploaded successfully.");
        setFile(null);
        setDescription("");
        loadDocuments(); // Refresh document list
       // Reset the form fields explicitly
      document.getElementById("uploadForm").reset(); // Reset the form
      } else {
        setError(data.ERROR || "Failed to upload the file.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
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
        setError("Failed to download file.");
      }
    } catch (err) {
      setError("Error downloading file.");
    }
  };

  const handleDelete = async () => {
    if (!modalState.id) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:2000/documents/delete/${modalState.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status===200) {
        const data = await response.json();
        setMessage(data.msg || "Document deleted successfully.");
        closeModal();
        loadDocuments(); // Refresh document list
      } else {
        setError("Failed to delete the document.");
      }
    } catch (err) {
      setError("Error deleting document.");
    } finally {
      setLoading(false);
    }
  };

  const openModal = (id) => setModalState({ isOpen: true, id });
  const closeModal = () => setModalState({ isOpen: false, id: null });

  return (
    <div className="container-fluid login-bg">
      <div className="container">
        {loading && <p>Loading...</p>}
        {message && <p style={{ color: "green" }}>{message}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSubmit} id="uploadForm">
          <label htmlFor="description"><strong>Description:</strong></label>
          <div className="my-3">
            <input
              className="form-control"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <label htmlFor="myFile"><strong>Choose file:</strong></label>
          <div className="my-3">
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
              <th scope="col">Description</th>
              <th scope="col">Filename</th>
              <th style={{ textAlign: "center" }} colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {documents.length > 0 ? (
              documents.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.description}</td>
                  <td>
                    <a
                      style={{ textDecoration: "underline", color: "blue" }}
                      href={`http://localhost:2000/documents/${item.document}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.document}
                    </a>
                  </td>
                  <td style={{ display: "flex", justifyContent: "center", columnGap: "10px" }}>
                    <button
                      onClick={() => handleDownload(`http://localhost:2000/documents/${item.document}`)}
                      className="btn btn-success"
                    >
                      Download
                    </button>
                    <button onClick={() => openModal(item.id)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">No files available.</td>
              </tr>
            )}
          </tbody>
        </table>
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          isOpen={modalState.isOpen}
          onCancel={closeModal}
        />
      </div>
    </div>
  );
};

export default Documents;