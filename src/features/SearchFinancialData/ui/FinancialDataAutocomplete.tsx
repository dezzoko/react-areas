import { useLazySearchFinancialDataQuery } from '@/entities/Finance';
import {
    Autocomplete,
    Box,
    CircularProgress,
    TextField,
    Typography,
} from '@mui/material';
import React, { useState, useEffect } from 'react';

const autocompleteStyles = {
    width: 300,
};

const boxStyles = {
    '&.MuiAutocomplete-option.Mui-focused': {
        backgroundColor: 'primary.light',
    },
};
export function FinancialDataAutocomplete() {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [fetchData, { data, isLoading, isError }] =
        useLazySearchFinancialDataQuery();

    useEffect(() => {
        if (searchTerm) {
            fetchData(searchTerm);
        }
    }, [searchTerm, fetchData]);

    return (
        <Autocomplete
            sx={autocompleteStyles}
            open={open}
            noOptionsText={
                isError ? (
                    <Typography color="error.main">
                        Error fetching data
                    </Typography>
                ) : (
                    'No results found'
                )
            }
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onInputChange={(_, newInputValue) => {
                setSearchTerm(newInputValue);
            }}
            getOptionLabel={(option) => `${option.name}`}
            forcePopupIcon={false}
            isOptionEqualToValue={(option, value) =>
                `${option.symbol} ${option.name}` ===
                `${value.symbol} ${value.name}`
            }
            options={data || []}
            renderOption={(props, option) => {
                //It is necessary to remove separated key from props provided by MUI...
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line react/prop-types
                const { key, ...rest } = props;
                return (
                    <div key={key}>
                        <Box
                            component="li"
                            margin="0 5px"
                            {...rest}
                            sx={boxStyles}
                        >
                            <Typography
                                fontFamily="Roboto Condensed"
                                fontWeight={700}
                                marginRight={2}
                            >
                                {option.symbol}
                            </Typography>
                            <Typography fontFamily="Roboto Condensed">
                                {option.name}
                            </Typography>
                        </Box>
                    </div>
                );
            }}
            loading={isLoading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Search company or ticker"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {isLoading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}
