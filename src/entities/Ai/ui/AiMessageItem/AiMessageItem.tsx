import { Box, Typography, Stack } from '@mui/material';
import { Ai } from '../../model/types/ai';
import ThumbUpIcon from '@/shared/assets/svg/thumb-up-icon.svg?react';
import ThumbsDownIcon from '@/shared/assets/svg/thumb-down-icon.svg?react';
import OptionsIcon from '@/shared/assets/svg/options-icon.svg?react';
import RefreshIcon from '@/shared/assets/svg/refresh-icon.svg?react';
import StarIcon from '@/shared/assets/svg/star-icon.svg?react';
import DocumentIcon from '@/shared/assets/svg/document-icon.svg?react';
import DocumentFilledIcon from '@/shared/assets/svg/filled-document-icon.svg?react';

interface AiMessageItemProps {
    message: Ai;
    isError: boolean;
}

const titleStyles = {
    backgroundColor: 'primary.100',
};

export function AiMessageItem(props: AiMessageItemProps) {
    const { message, isError } = props;
    return (
        <Box>
            <Typography padding={1} sx={titleStyles} textAlign="center">
                {message.question}
            </Typography>
            <Box marginTop="20px">
                {!isError && message.choices && (
                    <>
                        <Typography fontFamily="Roboto Condensed">
                            {message.choices &&
                                message.choices[0].message.content}
                        </Typography>
                        <Stack
                            paddingBottom={1}
                            direction="row"
                            alignItems="center"
                        >
                            <RefreshIcon />
                            <Box marginLeft={5} paddingTop={1}>
                                <StarIcon />
                            </Box>
                            <Box display="flex" columnGap="10px" marginLeft={5}>
                                <DocumentIcon />
                                <DocumentFilledIcon />
                            </Box>
                            <Box
                                marginLeft={5}
                                display="flex"
                                alignItems="center"
                                columnGap="10px"
                            >
                                <ThumbUpIcon />
                                <ThumbsDownIcon />
                            </Box>
                            <Box marginLeft={5} paddingTop={1}>
                                <OptionsIcon />
                            </Box>
                        </Stack>
                    </>
                )}
                {isError && (
                    <Typography color="error.main">
                        Some error was occurred
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
