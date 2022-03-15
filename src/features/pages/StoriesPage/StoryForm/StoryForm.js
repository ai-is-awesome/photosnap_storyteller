import React, { useState, useEffect } from "react";
import FormClose from "./FormClose";
import style from "./StoryForm.module.scss";
import { motion } from "framer-motion";
// import { ImFolderUpload } from "react-icons/im";
// import { AiFillCloseCircle } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import Button from "../../../../components/Button";
import SelectedFileUpload from "./SelectedFileUpload";

export default function StoryForm(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    console.log("event", e.target.files[0]);

    console.log("target result  ", e.target.result);
  };

  const processFileName = (name) => {
    return name.slice(0, 24) + " ...";
  };

  const getFileSizeObject = (size) => {
    // returns an object of type {size: 495, unit: "kb"}
    let sizeToShow = size;
    let unitToShow = "Kb";
    if (size > 1000) {
      sizeToShow = sizeToShow / 1000;
      unitToShow = "Mb";
    }
    return {
      size: sizeToShow,
      unit: unitToShow,
    };
  };

  useEffect(() => {
    if (selectedFile === null) {
      console.log("this shouldt be happening");
    } else {
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  }, [selectedFile]);

  if (!selectedFile) {
    return (
      <motion.section
        className={style.sf__parent_container}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
      >
        <FormClose setStoryForm={props.setStoryForm} />
        <div className={style.sf__container}>
          <div className={style.sf__upload_container}>
            <div className={style.sf__text_container}>
              {!selectedFile && (
                <>
                  {/* <ImFolderUpload /> */}
                  <input
                    type={"file"}
                    onChange={handleFileChange}
                    className={style.sf__file_input}
                    onLoad={(e) => console.log("target reutl", e.target.result)}
                  />
                  <p>OR</p>
                  <p>Drop your images here or browse!</p>
                </>
              )}

              {selectedFile && (
                <SelectedFileUpload imageUrl={""} fileName={""} fileURL={""} />
              )}
              {selectedFile && (
                <div className={style.sf__file_details_container}>
                  <img
                    src={imageUrl}
                    alt="hello"
                    width={250}
                    height={150}
                    className={style.sf__uploaded_img}
                  />
                  <div className={style.sf__file_details}>
                    <div>
                      {/* <span>File Name: </span> */}
                      <span>{processFileName(selectedFile.name)}</span>
                    </div>

                    <div>
                      {/* <span>File Size: </span> */}
                      <span className={style.sf__file_size}>
                        {getFileSizeObject(selectedFile.size).size +
                          getFileSizeObject(selectedFile.size).unit}
                      </span>
                    </div>
                    <GrFormClose
                      className={style.sf__close_icon}
                      onClick={() => setSelectedFile(null)}
                    />
                  </div>
                  {/* <button onClick={() => setSelectedFile(null)}>CROSS </button> */}
                </div>
              )}
            </div>
          </div>
          <Button text={"Submit"} />
        </div>
      </motion.section>
    );
  } else if (selectedFile) {
    console.log("hellllllo", selectedFile);
    return (
      <>
        <motion.section
          className={style.sf__parent_container}
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
        >
          <FormClose setStoryForm={props.setStoryForm} />

          <SelectedFileUpload
            imageUrl={imageUrl}
            file={selectedFile}
            closeBtnOnclick={() => setSelectedFile(null)}
          />
        </motion.section>
      </>
    );
  }
}
