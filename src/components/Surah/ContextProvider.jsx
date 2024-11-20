"use client"
import React, { createContext, useState, useContext } from "react";

// Create the context
const DuaContext = createContext();

// Create a provider component
export const DuaProvider = ({ children }) => {
  const [subcategoryId, setSubcategoryId] = useState(null);
const [sectionTitle,setSectionTitle] = useState(null)
   console.log('sectionTitle:', sectionTitle)
   return (
    <DuaContext.Provider value={{ subcategoryId, setSubcategoryId,sectionTitle,setSectionTitle }}>
      {children}
    </DuaContext.Provider>
  );
};

// Custom hook to use the context
export const useDuaContext = () => useContext(DuaContext);
