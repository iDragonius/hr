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
import dayjs from 'dayjs'
import { toast } from 'react-toastify'

const WorkingHours = () => {
    let today = new Date(),
        date =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
    const [value, setValue] = React.useState(dayjs(today))
    const [option, setOption] = React.useState('')

    const handleChange1 = (event) => {
        setOption(event.target.value)
    }
    const handleChange = (newValue) => {
        setValue(newValue)
    }

    const notify = () => {
        toast.success('Əməliyyat uğurla tamamlandı!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        })
    }
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
                    Qeyri-iş günlərinin sistemə daxil edilməsi
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
                                label="Tarix seçin"
                                width="100%"
                                inputFormat="DD/MM/YYYY"
                                value={value}
                                onChange={handleChange}
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
                            Qeyri-iş gününün növü
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={option}
                            label="Qeyri-iş gününün növü"
                            onChange={handleChange1}
                        >
                            <MenuItem value={10}>İş günü</MenuItem>
                            <MenuItem value={20}>İstirahət günü</MenuItem>
                            <MenuItem value={30}>Bayram günü</MenuItem>
                            <MenuItem value={40}>Hüzn günü</MenuItem>
                        </Select>
                    </FormControl>
                    <Stack
                        spacing={4}
                        direction="row"
                        sx={{ width: '40%', height: '50px' }}
                    >
                        <Button
                            onClick={notify}
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

export default WorkingHours
