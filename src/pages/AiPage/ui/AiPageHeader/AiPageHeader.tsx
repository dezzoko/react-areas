import { IconButton, Stack, Typography } from '@mui/material';
import ArrowBackIcon from '@/shared/assets/svg/arrow-back.svg?react';
import { useId } from 'react';
import { useNavigate } from 'react-router-dom';

export function AiPageHeader() {
    const navigate = useNavigate();
    const id = useId();
    return (
        <header>
            <Stack
                direction="row"
                alignContent="center"
                alignItems="center"
                width="100%"
            >
                <Stack flex="1 1 5%" direction="row" alignItems="center">
                    <IconButton id={id} onClick={() => navigate(-1)}>
                        <ArrowBackIcon />
                    </IconButton>

                    <label
                        style={{
                            cursor: 'pointer',
                        }}
                        htmlFor={id}
                    >
                        <Typography fontSize="1em">Return</Typography>
                    </label>
                </Stack>

                <Typography
                    flex="1 1 95%"
                    textAlign="center"
                    variant="h1"
                    fontSize="1.5em"
                >
                    Aura Ai
                </Typography>
            </Stack>
        </header>
    );
}
