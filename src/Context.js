import React, { createContext, useState } from 'react'
export const Cart=createContext();

function Context({children}) {
const [isOpen,setIsOpen]=useState(false);
const [click,setclick]=useState({});
  return (
    <Cart.Provider value={{isOpen,setIsOpen,click,setclick}}>{children}</Cart.Provider>
  )
}

export default Context