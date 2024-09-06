import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(menuAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
    // define the part you're going to style
    button: {
        // this will style the MenuButton component
        // fontWeight: 'medium',
        // bg: 'teal.500',
        // color: 'gray.200',
        // _hover: {
        //     bg: 'teal.600',
        //     color: 'white',
        // },
    },
    list: {
        zIndex: "9999999"
        // this will style the MenuList component
        // py: '4',
        // borderRadius: 'xl',
        // border: 'none',
        // bg: 'teal.500',
    },
    item: {
        // this will style the MenuItem and MenuItemOption components
        // color: 'gray.200',
        // px: "12px",

        _hover: {
            bg: '#F1F3FD',
            // mx: "3px"
        },
        // _focus: {
        //     bg: 'teal.600',
        // },
    },
    groupTitle: {
        // this will style the text defined by the title prop
        // in the MenuGroup and MenuOptionGroup components
        // textTransform: 'uppercase',
        // color: 'white',
        // textAlign: 'center',
        // letterSpacing: 'wider',
        // opacity: '0.7',
    },
    command: {
        // this will style the text defined by the command
        // prop in the MenuItem and MenuItemOption components
        // opacity: '0.8',
        // fontFamily: 'mono',
        // fontSize: 'sm',
        // letterSpacing: 'tighter',
        // pl: '4',
    },
    divider: {
        // this will style the MenuDivider component
        // my: '4',
        // borderColor: 'white',
        // borderBottom: '2px dotted',
    },
});

// define custom styles
const lg = defineStyle({
    fontSize: 'md',
    my: '1',
});

const xl = defineStyle({
    fontSize: 'lg',
    px: '4',
    py: '2',
});

// define custom sizes
const sizes = {
    // apply custom styles to parts
    xl: definePartsStyle({
        button: xl,
        item: xl,
        groupTitle: lg,
        command: xl,
    }),
};

// define custom variants
const variants = {
    roundLeft: definePartsStyle({
        button: {
            borderLeftRadius: 'full',
            pl: '6',
        },
    }),

    converterMenu: definePartsStyle({
        button: {
            borderLeftRadius: 'full',
            pl: '6',
        },
    }),

    roundRight: definePartsStyle({
        button: {
            borderRightRadius: 'full',
            pr: '6',
        },
    }),
};

// export the component theme
export const menuTheme = defineMultiStyleConfig({
    baseStyle,
    sizes,
    variants,
    defaultProps: {
        // define which size is applied by default
        size: 'xl',
    },
});