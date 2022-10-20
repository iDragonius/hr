import React from 'react'
import {
    Box,
    Button,
    Container,
    CssBaseline,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

const Duty = () => {
    return (
        <div>
            <CssBaseline />
            <Container
                sx={{
                    m: 5,
                    borderRadius: '16px',
                    bgcolor: '#fff',
                    height: '80vh',
                    width: '80vw',
                    display: 'flex',
                    flexDirection: 'column',
                    paddingTop: '50px',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: 50,
                        borderRadius: '20px',
                        backgroundColor: 'primary.main',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            opacity: 1,
                        },
                        padding: '0 20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}
                >
                    Employee leave form
                </Box>
                <Box
                    sx={{
                        width: '60%',
                        padding: '5%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                    }}
                >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack
                            spacing={3}
                            sx={{ width: '100%', marginBottom: '5%' }}
                        >
                            <DesktopDatePicker
                                label="Start"
                                width="100%"
                                inputFormat="DD/MM/YYYY"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        required
                                        sx={{
                                            svg: { color: '#0275d8' },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack
                            spacing={3}
                            sx={{ width: '100%', marginBottom: '5%' }}
                        >
                            <DesktopDatePicker
                                label="End"
                                width="100%"
                                inputFormat="DD/MM/YYYY"
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        required
                                        sx={{
                                            svg: { color: '#0275d8' },
                                        }}
                                    />
                                )}
                            />
                        </Stack>
                    </LocalizationProvider>

                    <FormControl
                        required
                        sx={{ marginBottom: '5%', width: '100%' }}
                    >
                        <InputLabel id="demo-simple-select-required-label">
                            Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            label="Qeyri-iş gününün növü"
                        >
                            <MenuItem value={10}>Paid</MenuItem>
                            <MenuItem value={20}>Free</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        required
                        sx={{ marginBottom: '5%', width: '100%' }}
                    >
                        <TextField
                            labelId="demo-simple-select-required-label1"
                            id="demo-simple-select-required2"
                            label="Reason"
                        />
                    </FormControl>
                    <Stack
                        spacing={4}
                        direction="row"
                        sx={{ width: '40%', height: '50px' }}
                    >
                        <Button
                            sx={{ width: '100%', fontSize: '17px' }}
                            variant="contained"
                        >
                            Əlavə et
                        </Button>
                    </Stack>
                </Box>
            </Container>
        </div>
    )
}

export default Duty
