import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import styles from "./ProfileImage.module.css";

const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));
    image.setAttribute("crossOrigin", "anonymous");
    image.src = url;
  });

const getCroppedImg = async (imageSrc, pixelCrop) => {
  const image = await createImage(imageSrc);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((file) => {
      if (!file) {
        reject(new Error("Canvas is empty"));
        return;
      }
      file.name = "cropped.jpeg";
      const croppedImage = URL.createObjectURL(file);
      resolve(croppedImage);
    }, "image/jpeg");
  });
};

const ProfileImage = () => {
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [adjustedImage, setAdjustedImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
        setShowModal(true);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(image, croppedArea);
      setAdjustedImage(croppedImage);
      setShowModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  const handleClickPlaceholder = () => {
    if (image) {
      setShowModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        {adjustedImage ? (
          <img
            src={adjustedImage}
            alt="Profile"
            className={styles.image}
            onClick={() => setShowModal(true)}
          />
        ) : (
          <div className={styles.placeholder} onClick={handleClickPlaceholder}>
            <span>Profile</span>
          </div>
        )}
      </div>
      <div className={styles.fileInputContainer}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.fileInput}
          id="fileInput"
        />
        <label htmlFor="fileInput" className={styles.fileInputLabel}>
          Upload Profile
        </label>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Cropper
              image={image}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <div className={styles.buttonContainer}>
              <button className={styles.saveBtn} onClick={handleSave}>
                Save
              </button>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImage;
