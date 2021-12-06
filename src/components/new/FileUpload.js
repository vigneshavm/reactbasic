import React, { useState } from 'react';
// import './FileUpload.css'



const FileUpload = () => {
   const [ selectedFiles, setselectedFiles ] = useState([]);


    const handleImageChange = (event) => {
         console.log(event.target.files)
         if(event.target.files) {

            const filesArray = Array.from(event.target.files).map((file) => URL.createObjectURL(file));
             setselectedFiles((prevImages) => prevImages.concat(filesArray));
             Array.from(event.target.files).map(
                 (file) => URL.revokeObjectURL(file) // avoid memory leak
             )
         }
    }

    const renderPhotos = (source) => {
        console.log('source is : -> ', source);
        return source.map((photo) => {
            return (
                <img src={photo} alt="" key={photo}></img>
            )

        });
    }

    return (
        <div>
            <input type="file" id="file" multiple accept="image/*" onChange={handleImageChange}></input>
            <div className="result">{renderPhotos(selectedFiles)}</div>
        </div>
    
    
    );
}

export default FileUpload;