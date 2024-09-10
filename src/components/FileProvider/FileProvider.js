import React, { createContext, useState } from 'react';

// Create the context
export const FileContext = createContext();

// Create a provider component
export const FileProvider = ({ children }) => {
  const [fileContent, setFileContent] = useState(null);

  return (
    <FileContext.Provider value={{ fileContent, setFileContent }}>
      {children}
    </FileContext.Provider>
  );
};