// eslint-disable-next-line object-curly-newline
import React, { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext({});

const ApplicationContextProvider = ({ children, ...props }) => {
    const [song, setSong] = useState();
    const [songName, setSongName] = useState();

    function handleChangeSong(event) {
        const { files } = event.target;
        const uploadSong = new window.p5.prototype.loadSound(files[0]);
        setSong(uploadSong);
        setSongName(files[0].name)
    }

  return (
    <ApplicationContext.Provider
      value={{
        song,
        songName,
        handleChangeSong,
      }}
      {...props}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationContextProvider;

export function useApplicationContext() {
  const context = useContext(ApplicationContext);

  if (!context) {
    throw new Error(
      'useApplicationContext must be used within a ApplicationContextProvider.',
    );
  }

  const {
    song,
    songName,
    handleChangeSong,
  } = context;

  return {
    song,
    songName,
    handleChangeSong,
  };
}
