import { Grid, CardContent, Typography, Card, IconButton } from '@mui/material';
import { Company } from '../../model/types/finance';

import AddIcon from '@/shared/assets/svg/add-icon.svg?react';
import { companyItemStyles, companyWrapperStyles } from './CompanyItem.styles';
interface CompanyItemProps {
    company: Company;
}

export function CompanyItem(props: CompanyItemProps) {
    const { company } = props;

    return (
        <Grid item xs={6} padding={0}>
            <Card variant="outlined" sx={companyWrapperStyles}>
                <CardContent sx={companyItemStyles}>
                    <Typography>
                        <strong>{company.ticker}</strong> {company.name}
                    </Typography>
                    <IconButton color="primary">
                        <AddIcon />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    );
}
