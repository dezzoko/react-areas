import { createTheme } from '@mui/material';

export const theme = createTheme({
    typography: {
        fontFamily: 'Sansation',
    },
    palette: {
        background: {
            default: '#1B093C',
        },
        primary: {
            main: '#ffffff',
            light: '#E8E5F9',
            dark: '#AEADD5',
            '100': '#F9F5FD',
        },
        error: {
            main: '#d32f2f',
        },

        secondary: {
            main: '#2D3648',
            light: '#6869AC',
            dark: '#000000',
        },
        grey: {
            '100': '#CFCFD4',
            '200': '#3E4551',
            '300': '#787C84',
            '400': '#4E5159',
        },
    },
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    '&.Mui-checked': {
                        color: '#AEADD5',
                    },
                },
            },
        },

        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root.Mui-focused': {
                        '& > fieldset': {
                            borderColor: 'rgba(0, 0, 0, 0.23)',
                        },
                    },
                },
            },
        },
    },
});

theme.typography.h1 = {
    fontSize: '3rem',
};
theme.typography.h2 = {
    fontSize: '2rem',
};
theme.typography.h3 = {
    fontSize: '1.5rem',
};
