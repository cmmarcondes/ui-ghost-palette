import React from "react";
import { Container } from "./styles";
import { useApplicationContext } from "../../context/ApplicationContext";

function FileInput({ loadSound }) {
  const { song, handleChangeSong, songName } = useApplicationContext();

  return (
    <Container>
      <label htmlFor="uploaded-audio">{songName || "Procurar música"}</label>
      <input
        id="uploaded-audio"
        type="file"
        files={song}
        onChange={(e) => handleChangeSong(e, loadSound)}
      />
    </Container>
  );
}

export default FileInput;
