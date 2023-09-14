import React, { createContext, useContext, useState, ReactNode } from 'react';


type SearchContextType = {
  searchTerm: string;
  setSearch: (term: string) => void;
};


const SearchContext = createContext<SearchContextType | undefined>(undefined);

type SearchProviderProps = {
  children: ReactNode;
};


export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const setSearch = (term: string) => {
    setSearchTerm(term);
  };

  const contextValue: SearchContextType = {
    searchTerm,
    setSearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};
