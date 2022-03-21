import React, { useState } from "react";
import { Button } from "react-bootstrap"

export default function Photos() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
        <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <Button variant="success" onClick={()=>setSelectedImage(null)}>Remove</Button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
        />
        <Button size="sm" type="submit" variant="success">Add Photo</Button>
    </div>
  );
};
