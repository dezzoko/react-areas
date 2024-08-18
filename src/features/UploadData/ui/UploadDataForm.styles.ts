import { SxProps, Theme } from '@mui/material';

export const modalStyles: SxProps<Theme> = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '90vh',
    maxHeight: '80%',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    borderRadius: 1,
    boxShadow: 24,

    width: 1024,
    p: 4,
};

export const backDropStyles: SxProps<Theme> = {
    backgroundColor: 'transparent',
};
