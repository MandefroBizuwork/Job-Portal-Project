import React, { useEffect, useState } from "react";
// import B from ''
// import A from '../../images/a.png'

function Video() {
  const [youtubeVideos, SetVideos] = useState([]);

  useEffect(() => {
    const api =
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDBsOJqKLRAFuHFykjJho-V-gku-nTWjd4&channelId=UCBJnd0rimovCUTRBErIcmPA&part=snippet&id,order=date&maxResults=4";
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        const videos = data.items;
        SetVideos(videos);
      })
      .catch((e) => {
        console.error(e.message); // "oh, no!"
      })

  }, []);

//   console.log(youtubeVideos);

if (youtubeVideos){
  return (
    <div className="card-wraper flex-wrap">
        
      {
    
      youtubeVideos.map((singleVideo) => {
        let MyVideoid = singleVideo.id.videoId;
        let videoUrl = `https://www.youtube.com/watch?v=${MyVideoid}`;
        let VideoWraper = (
          <div key={MyVideoid} className="card" style={{hight: "30rem",width: "20rem", boxSizing:"border-box"}}>
            <div className="card-header">
              <h2>{singleVideo.snippet.title}</h2>
            </div>
            <div className="card-body">
             <a href={videoUrl}><img src={singleVideo.snippet.thumbnails.high.url} /></a> 
            </div>
            <div className="card-footer">
              <h2></h2> {singleVideo.snippet.description}
            </div>
          </div>
          
        );
         
        return VideoWraper
        
      })

      }
      

{/* 


      <div className="card">
        <div className="card-header">
          <h2>Image 2</h2>
        </div>
        <div className="card-body">
          <img src="./images/cam (1).jpg " />
        </div>
        <div className="card-footer">
          <h2></h2> this is camera
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <h2>Image 3</h2>
        </div>
        <div className="card-body">
          <img src="./images/cam (2).jpg " />
        </div>
        <div className="card-footer">
          <h2></h2> this is special food
        </div>
      </div> */}



    </div>
  );




}
else return <h1>No video found</h1>
}

export default Video;
