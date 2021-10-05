import React from 'react';
import { Container } from './styles';
import '../../util/addons/p5.sound';
import { useApplicationContext } from '../../context/ApplicationContext';

function FileInput() {
    const { song, handleChangeSong, songName } = useApplicationContext();

  return (
      <Container>
        <label htmlFor="uploaded-audio">{songName || "Procurar música"}</label>
        <input
            id="uploaded-audio"
            type="file" 
            files={song}
            onChange={handleChangeSong}
        />
    </Container>
  );
}

export default FileInput;
