import React from 'react';
import { Container } from './styles';
import '../../util/addons/p5.sound';
import { useApplicationContext } from '../../context/ApplicationContext';

function FileInput() {
    const { song, handleChangeSong, songName } = useApplicationContext();

  return (
      <Container>
        <label htmlFor="upload-photo">{songName || "Procurar música"}</label>
        <input
            id="upload-photo"
            type="file" 
            files={song}
            onChange={handleChangeSong}
        />
    </Container>
  );
}

export default FileInput;
