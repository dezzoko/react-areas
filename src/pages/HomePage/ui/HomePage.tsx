import {
    Button,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material';
import MarkIcon from '@/shared/assets/svg/mark-icon.svg?react';
import PersonalGoalsImage from '@/shared/assets/svg/personal-goals.svg?react';
import { useAppSelector } from '@/shared';
import { buttonStyles, listIconStyles } from './HomePage.styles';

const abilitiesList = [
    'Save  companies of your interest and see new entries',
    'Use our AI tool to summarize interviews',
    'Get exclusive data',
    'Common questions',
    'Make reports',
];

function HomePage() {
    const username = useAppSelector((state) => state.user.user?.username);
    return (
        <main>
            <Stack
                padding={5}
                margin="20px 120px"
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Stack flex="1 1 40%">
                    <Typography
                        fontFamily="Sansation"
                        color="secondary.light"
                        variant="h2"
                        marginBottom={2}
                    >
                        Welcome {username}!
                    </Typography>
                    <Typography color="secondary.dark" marginBottom={2}>
                        We are so glad to have in Aura.
                    </Typography>
                    <Typography fontFamily="Sansation_Regular" marginBottom={2}>
                        We have 500+ companies with interviews and data for your
                        investment analysis and research.
                    </Typography>
                    <Typography fontFamily="Sansation_Regular">
                        You will be able to:
                    </Typography>
                    <List>
                        {abilitiesList.map((ability) => (
                            <ListItem disablePadding key={ability}>
                                <ListItemIcon sx={listIconStyles}>
                                    <MarkIcon />
                                </ListItemIcon>
                                <ListItemText primary={ability} />
                            </ListItem>
                        ))}
                    </List>
                    <Button sx={buttonStyles} variant="contained">
                        Let&apos; begin!
                    </Button>
                </Stack>
                <Stack
                    flex="1 1 70%"
                    width="100%"
                    alignItems="center"
                    justifyContent="center"
                >
                    <PersonalGoalsImage />
                </Stack>
            </Stack>
        </main>
    );
}

export default HomePage;
