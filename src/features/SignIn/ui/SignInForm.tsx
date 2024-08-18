import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import userJson from '../mock/user-auth.json';
import { userActions } from '@/entities/User';
import { Box, InputLabel } from '@mui/material';
import { useId } from 'react';
import { emailRegex, useAppDispatch } from '@/shared';
import {
    inputLabelStyles,
    inputStyles,
    submitButtonStyles,
} from './SignInForm.styles';

type Inputs = {
    username: string;
    password: string;
};

export function SignInForm() {
    const {
        handleSubmit,
        register,
        setError,
        formState: { errors, isValid },
    } = useForm<Inputs>({ mode: 'all' });

    const dispatch = useAppDispatch();

    const loginId = useId();
    const passwordId = useId();
    const onSubmit = (data: Inputs) => {
        if (
            data.username === userJson.username &&
            data.password === userJson.password
        ) {
            dispatch(userActions.setUserData({ username: data.username }));
            return;
        }

        setError('username', { message: 'Invalid username or password' });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box display="flex" flexDirection="column" gap="40px" width={400}>
                <Box>
                    <InputLabel sx={inputLabelStyles} htmlFor={loginId}>
                        User
                    </InputLabel>
                    <TextField
                        fullWidth
                        {...register('username', {
                            required: 'Username is required',
                            pattern: {
                                value: emailRegex,
                                message: 'Invalid email address',
                            },
                        })}
                        id={loginId}
                        placeholder="johndoe"
                        sx={inputStyles}
                        error={!!errors.username}
                        helperText={errors.username?.message}
                    />
                </Box>
                <Box>
                    <InputLabel sx={inputLabelStyles} htmlFor={passwordId}>
                        Password
                    </InputLabel>
                    <TextField
                        fullWidth
                        {...register('password', {
                            required: 'Password is required',
                        })}
                        id={passwordId}
                        sx={inputStyles}
                        placeholder="123456789"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </Box>
                <Button
                    disabled={!isValid}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={submitButtonStyles}
                >
                    Sign In
                </Button>
            </Box>
        </form>
    );
}
