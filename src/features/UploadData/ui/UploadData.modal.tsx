import { Modal, Box, Backdrop, Fade, Typography } from '@mui/material';
import CrossIcon from '@/shared/assets/svg/cross-icon.svg?react';
import { UploadDataFormAsync } from './UploadDataForm.async';
import { Suspense } from 'react';
import { backDropStyles, modalStyles } from './UploadDataForm.styles';

interface UploadDataModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function UploadDataModal(props: UploadDataModalProps) {
    const { isOpen, onClose } = props;
    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    sx: backDropStyles,
                },
            }}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
        >
            <Fade in={isOpen}>
                <Box sx={modalStyles}>
                    <Box position="absolute" right={24} top={24}>
                        <button onClick={onClose}>
                            <CrossIcon />
                        </button>
                    </Box>
                    <Typography variant="h3">New Data</Typography>
                    <Suspense fallback={<div>Loading</div>}>
                        <UploadDataFormAsync
                            onClose={onClose}
                            onSuccessfulUpload={onClose}
                        />
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    );
}
