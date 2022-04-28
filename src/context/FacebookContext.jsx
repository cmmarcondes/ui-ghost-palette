import React, { createContext, useContext, useState } from 'react';

const FacebookContext = createContext({});

const FacebookContextProvider = ({ children, ...props }) => {
    const [picture, setPicture] = useState('');
    const [isFacebookButtonLoading, setIsFacebookButtonLoading] = useState(false);
    
    function handleSetPicture(url) {
        setPicture(url)
    }

    function toggleFacebookButton(state) {
      setIsFacebookButtonLoading(state);
    }

  return (
    <FacebookContext.Provider
      value={{
        handleSetPicture,
        toggleFacebookButton,
        isFacebookButtonLoading,
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
    toggleFacebookButton,
    isFacebookButtonLoading,
    picture
  } = context;

  return {
    handleSetPicture,
    toggleFacebookButton,
    isFacebookButtonLoading,
    picture
  };
}
