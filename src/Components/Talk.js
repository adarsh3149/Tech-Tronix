import React, { useState } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";

const Talk = ({ data }) => {
  const [open, setOpen] = useState(false);
  open?document.body.style.overflow="hidden":document.body.style.overflow="auto";
  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Listing data={data} open={openModal} />
      <AnimatePresence>
        {open && (
          <Overlay close={closeModal}>
            <Modal data={data} close={closeModal} />
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Talk;
