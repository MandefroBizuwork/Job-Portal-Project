import React, { useEffect, useState } from 'react';

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [imagedata, setImagesData] = useState();

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch("http://localhost:300/");
        const data = await response.json();
        if(response.ok){
          setImagesData(data)
         console.log(imagedata)
        }
       
      } catch (err) {
        console.log(err);
      }
    };

    loadImage();
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myimage", file);

    try {
      const response = await fetch("http://localhost:300/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Image posted successfully!");
        // Re-fetch the image data to update the displayed image
        const updatedResponse = await fetch("http://localhost:300/");
        const updatedData = await updatedResponse.json();
        setImagesData(updatedData);
      } else {
        console.log("An error occurred.");
      }
    } catch (err) {
      console.log("An unexpected error occurred.");
      console.error(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="myimage">Upload image</label>
        <input type="file" name="myimage" onChange={handleFileChange} />
        <button type="submit">Submit</button>
      </form>

      {/* {imagedata ? (
        <img src={`http://localhost:300/images/${imagedata.image}`} alt="Uploaded" />
      ) : null} */}
    </div>
  );
};

export default ImageUpload;
