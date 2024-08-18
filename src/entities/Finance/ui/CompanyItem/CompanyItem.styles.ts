import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';

export const companyWrapperStyles: SxProps<Theme> = {
    padding: 0,
};

export const companyItemStyles: SxProps<Theme> = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '&:last-child': {
        paddingBottom: '16px',
    },
};
