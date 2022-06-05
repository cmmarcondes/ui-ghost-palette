import React, { useCallback, useEffect, useState } from "react";
import Collection from "../../compositions/Collection";
import { NavBar } from "../../elements";
import { getAllPalettes } from "../../firebase-config/config";

const Galeria = () => {
  const [palettes, setPalettes] = useState([]);

  const fetchPalettes = useCallback(async () => {
    const palettes = await getAllPalettes();
    setPalettes(palettes);
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  return (
    <NavBar>
      <Collection palettes={palettes} />
    </NavBar>
  );
};

export default Galeria;
