import React, { useState } from "react";
import "./User.css";
import { useSelector } from "react-redux";
import userImage from "../assets/userDefault-01.svg";
const User = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const { user, token } = useSelector((state) => state.auth);
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    console.log(hiddenFileInput);
    hiddenFileInput.current.click();
  };

  const dfImg =
    "https://www.citypng.com/public/uploads/preview/download-profile-user-round-orange-icon-symbol-png-11639594360ksf6tlhukf.png";

  const defaultImg = user?.img === dfImg ? userImage : user?.img;
  return (
    <div className="profile-container">
      <h2>User Info</h2>
      <div>
        <img
          className="image-profile"
          src={!selectedImage ? defaultImg : URL.createObjectURL(selectedImage)}
          alt={user?.name}
        />
        {selectedImage && (
          <>
            <br />
            <button
              className="button-upload-remove-save remove-btn"
              onClick={() => setSelectedImage(null)}
            >
              Remove
            </button>
          </>
        )}

        <p>{user?.name}</p>
        <p>{user?.email}</p>

        {selectedImage ? (
          <button className="button-upload-remove-save">Save image</button>
        ) : (
          <button className="button-upload-remove-save" onClick={handleClick}>
            Upload your image profile
          </button>
        )}

        <input
          type="file"
          name="myImage"
          ref={hiddenFileInput}
          style={{ display: "none" }}
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
    </div>
  );
};

export default User;
