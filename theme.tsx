'use client';
import { Input, Select, createTheme, rem } from '@mantine/core';
import { generateColors } from '@mantine/colors-generator';
import ChevronDown from './icons/src/system/ChevronDown';
import classes from './theme.module.css';

import { dfdsFont } from './fonts';

export const theme = createTheme({
  fontFamily: dfdsFont.style.fontFamily,

  fontSizes: {
    xs: rem(16),
    sm: rem(16),
    md: rem(16),
    lg: rem(16),
    xl: rem(16),
  },
  colors: {
    // Surface
    'surface-primary': generateColors('#FFFFFF'),
    'surface-secondary': generateColors('#eef0f1'),
    'surface-tertiary': generateColors('#002b45'),

    // Primary
    'primary-light': generateColors('#345370'),
    'primary-main': generateColors('#002b45'),
    'primary-dark': generateColors('#00001e'),

    // Secondary
    'secondary-light': generateColors('#bbddf3'),
    'secondary-main': generateColors('#49a2df'),
    'secondary-dark': generateColors('#1874bc'),

    // Status
    'status-info': generateColors('#002b45'),
    'status-infomuted': generateColors('#bbddf3'),
    'status-success': generateColors('#4caf50'),
    'status-successmuted': generateColors('#B8E0B9'),
    'status-warning': generateColors('#ED8800'),
    'status-warningmuted': generateColors('#FFD399'),
    'status-alert': generateColors('#be1e2d'),
    'status-alertmuted': generateColors('#F1A7AE'),

    // Divider
    'divider-light': generateColors('#ffffff29'),
    'divider-dark': generateColors('#4d4e4c29'),

    // Text Dark
    'text-dark-primary': generateColors('#4d4e4c'),
    'text-dark-secondary': generateColors('#4d4e4cb3'),
    'text-dark-disabled': generateColors('#4d4e4c4d'),

    // Text Light
    'text-light-primary': generateColors('#ffffff'),
    'text-light-secondary': generateColors('#ffffffb3'),
    'text-light-disabled': generateColors('#ffffff4d'),

    // Text Primary
    'text-primary-primary': generateColors('#002b45'),
    'text-primary-secondary': generateColors('#002b45b3'),
    'text-primary-disabled': generateColors('#002b454d'),

    // Text Secondary
    'text-secondary-primary': generateColors('#49a2df'),
    'text-secondary-secondary': generateColors('#49a2dfb3'),
    'text-secondary-disabled': generateColors('#49a2df4d'),
  },

  headings: {
    fontFamily: dfdsFont.style.fontFamily,
  },

  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
        section: classes.inputSection,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
        classNames: {
          error: classes.inputError,
          required: classes.inputAsterisk,
        },
      },
    }),

    Select: Select.extend({
      defaultProps: {
        rightSection: (
          <>
            <ChevronDown />
          </>
        ),
        classNames: {
          dropdown: classes.selectDropdown,
        },
      },
    }),
  },

  defaultRadius: 'xs',
  /* Put your mantine theme override here */
});
