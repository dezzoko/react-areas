import { Box, Stack, Typography } from '@mui/material';
import HeaderBg from '@/shared/assets/svg/header-bg.svg';
import FinancialIcon from '@/shared/assets/svg/search-financial-icon.svg';
import UploadDataIcon from '@/shared/assets/svg/upload-file-icon.svg';
import AiIcon from '@/shared/assets/svg/ai-icon.svg';
import { ImageButton } from '@/shared/ui/ImageButton';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/constants/router';
import { useState } from 'react';
import { UploadDataModal } from '@/features/UploadData';

export function Header() {
    const navigate = useNavigate();

    const [isUploadDataModalOpen, setIsUploadDataModalOpen] = useState(false);

    const onCloseUploadDataModal = () => {
        setIsUploadDataModalOpen(false);
    };
    return (
        <header>
            <Stack
                sx={{
                    backgroundImage: `url('${HeaderBg}')`,
                    backgroundSize: 'cover',
                    boxShadow: '0px 9px 10px 0px rgba(34, 60, 80, 0.2)',
                }}
                height={400}
                width="100%"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Box marginBottom={3}>
                    <Typography
                        textAlign="center"
                        fontFamily="Sansation"
                        marginTop={2}
                        variant="h1"
                        sx={{
                            userSelect: 'none',

                            textShadow:
                                '2px  2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px  1px 0 #000, 1px  1px 0 #000;',
                        }}
                        color="primary"
                        marginBottom={2}
                    >
                        AURA
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontFamily="Sansation"
                        marginBottom={1}
                        variant="h2"
                        color="primary"
                    >
                        Augmented Universal Research Assistant
                    </Typography>
                    <Typography
                        textAlign="center"
                        fontFamily="Sansation_Regular"
                        variant="h3"
                        color="primary"
                    >
                        Your in one single intuitive platform along side with
                        your team.
                    </Typography>
                </Box>
                <Stack direction="row" columnGap={3}>
                    <ImageButton
                        onClick={() => navigate(RoutePath['search-data'])}
                        imgSrc={FinancialIcon}
                        text="Search Data"
                    />
                    <ImageButton
                        onClick={() => setIsUploadDataModalOpen(true)}
                        imgSrc={UploadDataIcon}
                        text="Upload your data"
                    />
                    <ImageButton
                        onClick={() => navigate(RoutePath.ai)}
                        imgSrc={AiIcon}
                        text="Try our AI Tool"
                    />
                </Stack>
            </Stack>
            <UploadDataModal
                isOpen={isUploadDataModalOpen}
                onClose={onCloseUploadDataModal}
            />
        </header>
    );
}
