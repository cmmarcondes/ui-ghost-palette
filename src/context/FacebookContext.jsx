import React, { createContext, useContext, useState } from 'react';

const FacebookContext = createContext({});

const FacebookContextProvider = ({ children, ...props }) => {
    const [picture, setPicture] = useState('');
    
    function handleSetPicture(url) {
        setPicture(url)
    }

  return (
    <FacebookContext.Provider
      value={{
        handleSetPicture,
        picture
      }}
      {...props}
    >
      {children}
    </FacebookContext.Provider>
  );
};

export default FacebookContextProvider;

export function useFacebookContext() {
  const context = useContext(FacebookContext);

  if (!context) {
    throw new Error(
      'useFacebookContext must be used within a FacebookContextProvider.',
    );
  }

  const {
    handleSetPicture,
    picture
  } = context;

  return {
    handleSetPicture,
    picture
  };
}
