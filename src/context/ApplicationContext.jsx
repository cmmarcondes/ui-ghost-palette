import React, { createContext, useContext, useState } from 'react';
import { NUMBER_OF_COLORS_IN_PALETTE } from '../util/constants';

const ApplicationContext = createContext({});

const ApplicationContextProvider = ({ children, ...props }) => {
    const [song, setSong] = useState();
    const [songName, setSongName] = useState();
    const [paletteArray, setPaletteArray] = useState([]);

    function handleChangeSong(event) {
        const { files } = event.target;
        const uploadedSong = new window.p5.prototype.loadSound(files[0]);
        setSong(uploadedSong);
        setSongName(files[0].name)
    }

    function preparePalette(arrayDivider, frequencyArray) {
      const updatedPaletteArray = [...paletteArray];
      const uploadedHexStringArray = [];

      for(let i = 0; i < NUMBER_OF_COLORS_IN_PALETTE; i++) {
        const palette = frequencyArray.slice(arrayDivider * i, arrayDivider * (i+1));
        updatedPaletteArray.push(palette.reduce((previousValue, currentValue) => previousValue + currentValue));
      }

      updatedPaletteArray.forEach((element) => {
        uploadedHexStringArray.push((element*10000).toString(16));
      });

      const stringFormatedPalette = uploadedHexStringArray.map((string) => string.slice(0, 6));
      setPaletteArray(stringFormatedPalette);
    }

  return (
    <ApplicationContext.Provider
      value={{
        song,
        songName,
        handleChangeSong,
        preparePalette,
        paletteArray
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
    preparePalette,
    paletteArray
  } = context;

  return {
    song,
    songName,
    handleChangeSong,
    preparePalette,
    paletteArray
  };
}
