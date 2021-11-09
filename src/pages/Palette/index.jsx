import React from 'react';
import { useApplicationContext } from '../../context/ApplicationContext';
import {Body, Color, Palette} from '../../elements';

const Palettes = () => {
    const { paletteArray } = useApplicationContext();
    console.log(paletteArray);
    return(
        <Body>
            <Palette>
                {paletteArray.map((hex) => {
                    return <Color hex={hex}>#{hex}</Color>
                })}
            </Palette>
        </Body>
    );
}

export default Palettes;