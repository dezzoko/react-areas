import { SignInForm } from '@/features/SignIn';
import { RoutePath } from '@/shared/constants/router';
import { useAppSelector } from '@/shared/hooks/redux-hooks/redux-hooks';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import AuraLogoSvg from '@/shared/assets/svg/aura-logo.svg?react';

function SignInPage() {
    const isAuth = useAppSelector((state) => state.user.isAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate(RoutePath.home, {
                replace: true,
            });
        }
    }, [isAuth, navigate]);
    return (
        <Box
            bgcolor={'background.default'}
            width="100%"
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            minHeight="100vh"
        >
            <Box position="absolute" top={22} left={37}>
                <AuraLogoSvg />
            </Box>
            <Typography
                marginBottom={5}
                fontFamily="Inter"
                variant="h1"
                color="primary"
            >
                Welcome
            </Typography>
            <SignInForm />
        </Box>
    );
}

export default SignInPage;
