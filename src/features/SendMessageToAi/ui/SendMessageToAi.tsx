import { aiActions } from '@/entities/Ai';
import { Box, InputAdornment, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import SendIcon from '@/shared/assets/svg/send-icon.svg?react';
import { useGetChatResponseMutation } from '@/entities/Ai';
import { useAppDispatch } from '@/shared';
interface SendMessageToAiProps {
    setIsLoading: (isLoading: boolean) => void;
    setError: (error: boolean) => void;
}

type SendMessageToAiForm = {
    message: string;
};
export function SendMessageToAi(props: SendMessageToAiProps) {
    const { setIsLoading, setError } = props;

    const { register, handleSubmit, setValue, watch } =
        useForm<SendMessageToAiForm>({
            mode: 'all',
            defaultValues: { message: '' },
        });

    const message = watch('message');

    const dispatch = useAppDispatch();

    const [submitResponse, { isLoading, error }] = useGetChatResponseMutation();

    const onSubmit = (data: SendMessageToAiForm) => {
        dispatch(aiActions.pushAiQuestion(data.message));
        setValue('message', '');
        setIsLoading(true);
        submitResponse(data.message)
            .unwrap()
            .then((response) => {
                setIsLoading(isLoading);
                dispatch(aiActions.updateLastAiResponse(response));
            })
            .catch(() => {
                setError(true);
                setIsLoading(false);
            });
    };
    return (
        <Box width="100%">
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    disabled={isLoading}
                    fullWidth
                    {...register('message', { required: true })}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {message.length && !isLoading && !error ? (
                                    <button type="submit">
                                        <SendIcon />
                                    </button>
                                ) : (
                                    <></>
                                )}
                            </InputAdornment>
                        ),
                    }}
                    placeholder="Hi, I’m Aura, you AI Assistant. Tell me, what question do you have?"
                />
            </form>
        </Box>
    );
}
