import { Box, Typography } from '@mui/material';
import { ButtonHTMLAttributes } from 'react';

interface ImageButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    imgSrc: string;
    text: string;
}

export function ImageButton(props: ImageButtonProps) {
    const { imgSrc, text, ...rest } = props;
    return (
        <button {...rest}>
            <Box
                bgcolor="primary.main"
                padding="5px 20px"
                sx={{
                    border: 1,
                    borderColor: 'grey.100',
                    borderRadius: 1,
                }}
            >
                <img src={imgSrc}></img>
                <Typography
                    fontFamily="Sansation"
                    color="grey.200"
                    fontWeight="bold"
                >
                    {text}
                </Typography>
            </Box>
        </button>
    );
}
