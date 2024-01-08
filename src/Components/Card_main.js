import React, { useState,useEffect } from "react";
import Listing from "./Listing";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import Modal2 from "./Modal2";

const Card_main = ({ data }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // Update body overflow when the modal is opened/closed
    document.body.style.overflow = open ? "hidden" : "auto";

    // Cleanup function to restore body overflow on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
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

export default Card_main;
