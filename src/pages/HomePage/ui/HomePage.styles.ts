import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const buttonStyles: SxProps<Theme> = {
    width: '160px',
    border: 1,
    textTransform: 'capitalize',
    borderColor: 'grey.300',
    color: 'grey.200',
};

export const listIconStyles: SxProps<Theme> = {
    minWidth: '40px',
};
