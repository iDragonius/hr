import { useState } from 'react'
import { toast } from 'react-toastify'
import * as React from 'react'
import {
    CssBaseline,
    Box,
    Container,
    TextField,
    Stack,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Button,
    Input,
    FormHelperText,
} from '@mui/material'
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

const StaffAdding = () => {
    let today = new Date(),
        date =
            today.getFullYear() +
            '-' +
            (today.getMonth() + 1) +
            '-' +
            today.getDate()
    const [status, setStatus] = useState(false)
    const [value, setValue] = React.useState(dayjs(today))
    const [option, setOption] = React.useState('')

    const handleChange1 = (event) => {
        setOption(event.target.value)
    }
    const handleChange = (newValue) => {
        setValue(newValue)
    }

    return (
        <div>
            {status && (
                <Container
                    sx={{
                        m: 5,
                        borderRadius: '16px',

                        bgcolor: '#fff',
                        height: '120vh',
                        width: '70vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '3% 0',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: 50,
                            borderRadius: '20px',
                            backgroundColor: '#377DFF',
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
                        ??????il??rin sistem?? daxil edilm??si
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            padding: '5%',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Ad"
                            placeholder="Ad"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Soyad"
                            placeholder="Soyad"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Ata ad??"
                            placeholder="Ata ad??"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack sx={{ width: '48%', mb: 3 }}>
                                <DesktopDatePicker
                                    label="Tarix se??in"
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
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Fin Kod"
                            placeholder="Fin kod"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="??nvan"
                            placeholder="??nvan"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Telefon n??mr??si"
                            placeholder="Telefon n??mr??si"
                        />
                        <FormControl required sx={{ mb: 3, width: '48%' }}>
                            <InputLabel id="demo-simple-select-required-label">
                                Cinsiyy??t
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={option}
                                label="Cinsiyy??t"
                                onChange={handleChange1}
                            >
                                <MenuItem value={'women'}>Qad??n</MenuItem>
                                <MenuItem value={'men'}>Ki??i</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="V??zif??"
                            placeholder="V??zif??"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="G??nl??k i?? saat??"
                            placeholder="G??nl??k i?? saat??"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="???? rejimi"
                            placeholder="???? rejimi"
                        />
                        <Stack
                            spacing={4}
                            direction="row"
                            sx={{ width: '30%', height: '50px' }}
                        >
                            <Button
                                sx={{
                                    marginTop: '30%',
                                    height: '50px',
                                    width: '100%',
                                    fontSize: '17px',
                                }}
                                variant="contained"
                            >
                                ??lav?? et
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            )}
            {!status && (
                <Container
                    sx={{
                        m: 5,
                        bgcolor: '#fff',
                        height: '120vh',
                        width: '70vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        padding: '3% 0',
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
                        ??????il??rin sistem?? daxil edilm??si
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            padding: '5%',
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Ad"
                            placeholder="Ad"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Soyad"
                            placeholder="Soyad"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Ata ad??"
                            placeholder="Ata ad??"
                        />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack sx={{ width: '48%', mb: 3 }}>
                                <DesktopDatePicker
                                    label="Tarix se??in"
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
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Fin Kod"
                            placeholder="Fin kod"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="??nvan"
                            placeholder="??nvan"
                        />
                        <TextField
                            sx={{ mb: 3, width: '48%' }}
                            required
                            id="outlined-required"
                            label="Telefon n??mr??si"
                            placeholder="Telefon n??mr??si"
                        />
                        <FormControl required sx={{ mb: 3, width: '48%' }}>
                            <InputLabel id="demo-simple-select-required-label">
                                Cinsiyy??t
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={option}
                                label="Cinsiyy??t"
                                onChange={handleChange1}
                            >
                                <MenuItem value={'women'}>Qad??n</MenuItem>
                                <MenuItem value={'men'}>Ki??i</MenuItem>
                            </Select>
                        </FormControl>

                        <Stack
                            spacing={4}
                            direction="row"
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'flex-end',
                                height: '50px',
                            }}
                        >
                            <Button
                                sx={{
                                    marginTop: '3%',
                                    height: '50px',
                                    width: '30%',
                                    fontSize: '17px',
                                }}
                                variant="contained"
                            >
                                ??lav?? et
                            </Button>
                        </Stack>
                    </Box>
                </Container>
            )}
            <CssBaseline />
        </div>
    )
}
export default StaffAdding
