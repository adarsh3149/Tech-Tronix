import React, { useState } from "react";
import Overlay from "./Overlay";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
import ConclaveListing from "./Conclave_listing";

const Conclaves = ({ data }) => {
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

      <ConclaveListing data={data} open={openModal} />
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

export default Conclaves;