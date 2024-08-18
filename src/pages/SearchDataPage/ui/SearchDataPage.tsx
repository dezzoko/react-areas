import { FinancialDataAutocomplete } from '@/features/SearchFinancialData';
import { Stack, Typography } from '@mui/material';
import SiteStatsImage from '@/shared/assets/svg/site-stats.svg?react';
import { CompanyList } from '@/entities/Finance';
function SearchDataPage() {
    return (
        <main>
            <Stack
                direction="row"
                padding={4}
                marginTop={10}
                justifyContent="space-around"
                alignItems="center"
            >
                <Stack>
                    <Typography color="secondary.light" variant="h2">
                        5,000+ companies with data and insight for you
                    </Typography>
                    <Typography fontFamily="Sansation_Regular" marginTop={1}>
                        Find the company you are interested in.
                    </Typography>
                    <Typography fontFamily="Sansation_Regular" marginBottom={1}>
                        This will help us customize your experience.
                    </Typography>
                    <FinancialDataAutocomplete />
                    <CompanyList />
                </Stack>
                <Stack>
                    <SiteStatsImage />
                </Stack>
            </Stack>
        </main>
    );
}

export default SearchDataPage;
