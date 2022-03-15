import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button";
import style from "./SelectedFileUpload.module.scss";
import { GrFormClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { uploadFile } from "../../../../Firebase/firebase";

export default function SelectedFileUpload({
  imageUrl,
  closeBtnOnclick,
  file,
}) {
  const variants = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };

  const [uploadCompleted, isUploadCompleted] = useState(false);
  const [snapshot, setSnapshot] = useState(null);

  const percentageCompleted =
    snapshot !== null ? snapshot.bytesTransferred / snapshot.totalBytes : 0;

  return (
    <motion.div
      className={style.sf__container}
      initial="hidden"
      animate="show"
      variants={variants}
      transition={{ duration: 0.3 }}
      exit={{ scale: 0 }}
      key="modal"
    >
      <GrFormClose className={style.sf__close_btn} onClick={closeBtnOnclick} />
      <img src={imageUrl} alt="img" className={style.sf__image} />
      <Button
        text={"Submit"}
        onClick={() => uploadFile(file, setSnapshot, isUploadCompleted)}
      />
      PercentageCompleted: {percentageCompleted}
      {uploadCompleted && <Button text={"uploadCompleted"} />}
    </motion.div>
  );
}
