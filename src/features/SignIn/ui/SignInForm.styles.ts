import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const inputLabelStyles: SxProps<Theme> = {
    color: 'primary.main',
};

export const inputStyles: SxProps<Theme> = {
    '& .MuiOutlinedInput-root': {
        color: '#000',
        backgroundColor: '#ffffff',
    },
};

export const submitButtonStyles: SxProps<Theme> = {
    '&.Mui-disabled': {
        background: '#eaeaea',
        color: '#c0c0c0',
    },
};
