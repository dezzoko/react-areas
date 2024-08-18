import { useAppSelector } from '@/shared/hooks/redux-hooks/redux-hooks';
import { AiMessageItem } from '../AiMessageItem/AiMessageItem';
import { Skeleton, Stack } from '@mui/material';

interface AiMessageListProps {
    isLoading: boolean;
    isError: boolean;
}

const aiMessageListStyles = {
    overflowY: 'auto',
    paddingBottom: '20px',
};
export function AiMessageList(props: AiMessageListProps) {
    const { isLoading, isError } = props;
    const messages = useAppSelector((state) => state.ai.aiResponses);

    return (
        <Stack maxHeight="800px" sx={aiMessageListStyles}>
            {messages.map((item) => {
                return (
                    <AiMessageItem
                        key={item.createdAt}
                        isError={isError}
                        message={item}
                    />
                );
            })}
            {isLoading && (
                <Stack>
                    <Skeleton variant="rectangular" height={100} width="100%" />
                </Stack>
            )}
        </Stack>
    );
}
