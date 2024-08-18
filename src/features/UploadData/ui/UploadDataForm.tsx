import {
    Autocomplete,
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Grid,
    InputLabel,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { ChangeEvent, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { cancelButtonStyles, submitButtonStyles } from './UploadData.styles';
const projectTypeList = [
    'Company Research',
    'Market Research',
    'Industry Research',
];

const checkboxes = [
    { label: 'All', value: 'all' },
    { label: 'Industry Consultant', value: 'industryConsultant' },
    { label: 'Competitor', value: 'competitor' },
    { label: 'Former Executive', value: 'formerExecutive' },
    { label: 'Customer', value: 'customer' },
    { label: 'Partner', value: 'partner' },
];

type ExpertTypes = {
    all: boolean;
    industryConsultant: boolean;
    competitor: boolean;
    formerExecutive: boolean;
    customer: boolean;
    partner: boolean;
    [key: string]: boolean;
};

type UploadDataFormValues = {
    projectName: string;
    projectType: string;
    companies: string;
    projectDescription: string;
    projectScope: string;
    expert: ExpertTypes;
};

interface UploadDataFormProps {
    onClose: () => void;
    onSuccessfulUpload: () => void;
}

function UploadDataForm(props: UploadDataFormProps) {
    const { onClose, onSuccessfulUpload } = props;
    const {
        register,
        control,
        setValue,
        formState: { errors },
        handleSubmit,
        watch,
        trigger,
    } = useForm<UploadDataFormValues>({
        defaultValues: {
            projectName: '',
            projectType: '',
            companies: '',
            projectDescription: '',
            projectScope: '',
            expert: {
                all: false,
                industryConsultant: false,
                competitor: false,
                formerExecutive: false,
                customer: false,
                partner: false,
            },
        },
    });

    const expertValues = watch('expert');

    const projectType = watch('projectType');

    useEffect(() => {
        const allSelected = Object.values(expertValues)
            .slice(1)
            .every((value) => value);
        if (allSelected !== expertValues.all) {
            setValue('expert.all', allSelected);
        }
    }, [expertValues, setValue]);

    const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        checkboxes.forEach((checkbox) =>
            setValue(`expert.${checkbox.value}`, isChecked),
        );
    };

    const validateCheckbox = () => {
        const expertValues = watch('expert');
        if (!Object.values(expertValues).some((value) => value === true)) {
            return 'At least one expert type is required';
        }
        return true;
    };

    const onSubmit = () => {
        onSuccessfulUpload();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack minWidth="100%" width="815px" rowGap={2} margin="20px 0">
                <div>
                    <InputLabel>
                        Project name
                        <Typography component="span" color="error.main">
                            *
                        </Typography>
                    </InputLabel>
                    <TextField
                        fullWidth
                        {...register('projectName', {
                            required: 'Project name is required',
                        })}
                        placeholder="E.g. Microsoft Research"
                        error={!!errors.projectName}
                        helperText={errors.projectName?.message}
                    />
                </div>
                <div>
                    <InputLabel>
                        Project type
                        <Typography component="span" color="error.main">
                            *
                        </Typography>
                    </InputLabel>

                    <Controller
                        render={({ field, fieldState: { error } }) => {
                            const { onChange, value, ref } = field;
                            return (
                                <>
                                    <Autocomplete
                                        value={
                                            value
                                                ? projectTypeList.find(
                                                      (option) => {
                                                          return (
                                                              value === option
                                                          );
                                                      },
                                                  ) ?? null
                                                : null
                                        }
                                        onChange={(_: unknown, newValue) => {
                                            onChange(
                                                newValue ? newValue : null,
                                            );
                                        }}
                                        options={projectTypeList}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                inputRef={ref}
                                            />
                                        )}
                                    />
                                    {error ? (
                                        <Typography
                                            color="error.main"
                                            fontSize="0.75em"
                                            marginLeft="14px"
                                        >
                                            {error.message}
                                        </Typography>
                                    ) : null}
                                </>
                            );
                        }}
                        rules={{
                            required: 'Project type is requried',
                        }}
                        name="projectType"
                        control={control}
                    />
                </div>
                {projectType === 'Company Research' && (
                    <div>
                        <InputLabel>
                            Companies
                            <Typography component="span" color="error.main">
                                *
                            </Typography>
                        </InputLabel>
                        <TextField
                            fullWidth
                            {...register('companies', {
                                required: 'Companies is required',
                            })}
                            placeholder="E.g. Microsoft"
                            error={!!errors.companies}
                            helperText={errors.companies?.message}
                        />
                    </div>
                )}
                <div>
                    <InputLabel>Project Description</InputLabel>
                    <TextField
                        {...register('projectDescription')}
                        fullWidth
                        placeholder="Please define the purpose for this project."
                        error={!!errors.projectDescription}
                        helperText={errors.projectDescription?.message}
                    />
                </div>
                <div>
                    <InputLabel>Project Scope</InputLabel>
                    <TextField
                        {...register('projectScope')}
                        multiline
                        fullWidth
                        rows={2}
                        placeholder="Tell us the range for the numbers of experts you want us to include for this research and the type of experts in order for us to start expert screening stage."
                        error={!!errors.projectScope}
                        helperText={errors.projectScope?.message}
                    />
                </div>
                <div>
                    <InputLabel>
                        Expert
                        <Typography component="span" color="error.main">
                            *
                        </Typography>
                    </InputLabel>

                    {validateCheckbox() && errors.expert && (
                        <Typography color="error.main" fontSize="0.75em">
                            {errors.expert.all?.message}
                        </Typography>
                    )}
                    <Grid container>
                        {checkboxes.map((checkbox, index) => (
                            <Grid item xs={6} key={index}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            {...register(
                                                `expert.${checkbox.value}` as const,
                                                {
                                                    validate: validateCheckbox,
                                                },
                                            )}
                                            checked={
                                                expertValues[checkbox.value]
                                            }
                                            onChange={(event) => {
                                                checkbox.value === 'all'
                                                    ? handleSelectAll(event)
                                                    : setValue(
                                                          `expert.${checkbox.value}` as const,
                                                          event.target.checked,
                                                      );
                                                trigger(`expert`);
                                            }}
                                        />
                                    }
                                    label={checkbox.label}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Stack>
            <Box display="flex" columnGap={2}>
                <Button onClick={onClose} sx={cancelButtonStyles}>
                    Cancel
                </Button>
                <Button
                    type="submit"
                    sx={submitButtonStyles}
                    variant="contained"
                >
                    Upload
                </Button>
            </Box>
        </form>
    );
}

export default UploadDataForm;
