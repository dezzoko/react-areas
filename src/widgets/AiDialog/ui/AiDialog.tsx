import { AiMessageList } from '@/entities/Ai/ui/AiMessageList/AiMessageList';
import { SendMessageToAi } from '@/features/SendMessageToAi';
import { Box } from '@mui/material';
import { useState } from 'react';

export function AiDialog() {
    const [isResponseLoading, setResponseLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const isLoadingHandler = (isLoading: boolean) => {
        setResponseLoading(isLoading);
    };
    const errorHandler = (error: boolean) => {
        setIsError(error);
    };

    return (
        <Box
            display="flex"
            height="88vh"
            marginTop={2}
            flexDirection="column"
            justifyContent="space-between"
        >
            <AiMessageList isError={isError} isLoading={isResponseLoading} />
            <SendMessageToAi
                setError={errorHandler}
                setIsLoading={isLoadingHandler}
            />
        </Box>
    );
}
