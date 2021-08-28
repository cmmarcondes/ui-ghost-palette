import React from 'react';
import { useApplicationContext } from '../../context/ApplicationContext';
import { Colors, Container } from './styles';

const Palette = () => {
    const { paletteArray } = useApplicationContext();
    console.log(paletteArray);
    return(
        <Container>
            {paletteArray.map((hex) => {
                return <Colors hex={hex}>#{hex}</Colors>
            })}
        </Container>
    );
}

export default Palette;