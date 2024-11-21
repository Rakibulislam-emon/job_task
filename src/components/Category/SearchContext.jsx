"use client"
// context/SearchContext.js
import { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, search,setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
