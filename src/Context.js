import React, { createContext, useState } from 'react'
export const Cart=createContext();

function Context({children}) {
const [isOpen,setIsOpen]=useState(false);
  return (
    <Cart.Provider value={{isOpen,setIsOpen}}>{children}</Cart.Provider>
  )
}

export default Context