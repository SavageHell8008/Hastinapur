import { useState } from 'react';
import { Box, Container, Typography, TextField, MenuItem, Button, Grid, Paper, Snackbar, Alert } from '@mui/material';

const Reservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        requests: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        console.log(formData);
        setOpenSnackbar(true);
        setFormData({ name: '', phone: '', date: '', time: '', guests: '', requests: '' });
    };

    return (
        <Box
            id="reservation"
            sx={{
                py: 15,
                position: 'relative',
                backgroundImage: 'url("https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', bgcolor: 'rgba(0,0,0,0.7)' }} />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Paper elevation={24} sx={{ p: 6, borderRadius: 4, bgcolor: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)', border: '1px solid rgba(212,175,55,0.3)' }}>
                    <Typography variant="h3" align="center" gutterBottom sx={{ color: 'primary.main', mb: 1 }}>
                        Reserve Your Table
                    </Typography>
                    <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 5 }}>
                        Secure your spot for an unforgettable evening.
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth label="Your Name" name="name"
                                    value={formData.name} onChange={handleChange} required
                                    variant="outlined"
                                    sx={{ input: { color: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth label="Phone Number" name="phone"
                                    value={formData.phone} onChange={handleChange} required
                                    variant="outlined"
                                    sx={{ input: { color: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth type="date" label="Date" name="date"
                                    value={formData.date} onChange={handleChange} required
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ input: { color: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth type="time" label="Time" name="time"
                                    value={formData.time} onChange={handleChange} required
                                    InputLabelProps={{ shrink: true }}
                                    sx={{ input: { color: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    select fullWidth label="Number of Guests" name="guests"
                                    value={formData.guests} onChange={handleChange} required
                                    sx={{ input: { color: 'white' } }}
                                >
                                    <MenuItem value="2">2 Guests</MenuItem>
                                    <MenuItem value="4">4 Guests</MenuItem>
                                    <MenuItem value="6">6 Guests</MenuItem>
                                    <MenuItem value="Large">Large Group (8+)</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth multiline rows={3} label="Special Requests" name="requests"
                                    placeholder="Anniversary, Birthday, Allergies..."
                                    value={formData.requests} onChange={handleChange}
                                    sx={{ textarea: { color: 'white' } }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    sx={{ py: 2, fontSize: '1.1rem' }}
                                >
                                    Confirm Reservation
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
                    Reservation request received! We will confirm shortly.
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Reservation;
