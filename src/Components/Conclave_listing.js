import React from "react";
// import Feature from "./Feature";
import "./Listing.css";
import { motion } from "framer-motion";

const Conclave_listing = ({ data, open }) => {
  const { img, name } = data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.1 }}>
      <div className="listing__content">
        <div className="listing__image-container">
          <img className="listing__image" alt={name} src={img} />
        </div>
        <div className="listing__details">
          <div className="listing__row">
            <span className="listing__price">{name}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Conclave_listing;