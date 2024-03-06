import { switchAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle } = createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
    thumb: {
        bg: 'black',
        _checked: {
            bg: 'white',
        },
    },
    track: {
        bg: 'white',
        _checked: {
            bg: 'black',
        },
    },
});

export const switchTheme = ({ baseStyle });

export default baseStyle; 
