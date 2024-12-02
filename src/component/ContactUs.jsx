import React from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import Swal from 'sweetalert2'; // Import SweetAlert
import aboutImage from '../assets/image/Contact-Us-Banner-Image (1) (1).jpg';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Thank You!',
      text: 'Thank you for connecting!',
      confirmButtonText: 'OK',
    });
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom, black, #4D0F4A, #140514)',

        minHeight: '100vh',
        padding: '30px',
      }}
    >
      {/* About Image Section */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '40vh', sm: '70vh', md: '80vh', lg: '90vh' },
          overflow: 'hidden',
          mb: 2,
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="Contact Us"
          sx={{
            
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            border: '2px solid none',
            borderRadius: '30px',
          }}
        />
      </Box>

      <Box
  component="form"
  onSubmit={handleSubmit}
  sx={{
    background: 'transparent',
    padding: '10px',
    borderRadius: '20px',
    color: 'white', // Text color white
    mb: 10,
    mx: 'auto',
    maxWidth: '900px',
  }}
>
  <Grid container spacing={3}>
    {/* Row 1 */}
    <Grid item xs={12} sm={6}>
      <TextField
        label="Full Name"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          sx: { borderRadius: '15px', height: '50px', color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' }, // Make label white
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white', // White border for text field
            },
            '&:hover fieldset': {
              borderColor: 'orange', // Hover effect
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange', // Focus effect
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        required
        type="email"
        InputProps={{
          sx: { borderRadius: '15px', height: '50px', color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
        }}
      />
    </Grid>

    {/* Row 2 */}
    <Grid item xs={12} sm={6}>
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        required
        type="tel"
        InputProps={{
          sx: { borderRadius: '15px', height: '50px', color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
        }}
      />
    </Grid>
    <Grid item xs={12} sm={6}>
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        required
        InputProps={{
          sx: { borderRadius: '15px', height: '50px', color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
        }}
      />
    </Grid>

    {/* Full-Width Message Field */}
    <Grid item xs={12}>
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        required
        InputProps={{
          sx: { borderRadius: '15px', color: 'white' },
        }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'orange',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
        }}
      />
    </Grid>

    {/* Submit Button */}
    <Grid item xs={12}>
      <Button
        variant="contained"
        type="submit"
        fullWidth
        sx={{
          padding: '10px',
          borderRadius: '15px',
          backgroundColor: 'white',
          color: 'black',
          '&:hover': { backgroundColor: 'orange' },
        }}
      >
        Submit
      </Button>
    </Grid>
  </Grid>
</Box>


    {/* Contact Information */}
<Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
  <Grid container justifyContent="center" alignItems="center" sx={{ mt: 6 }}>
    {/* Email */}
    <Grid
      item
      xs={12}
      sm={4}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: { sm: '2px dotted #ccc', xs: 'none' },
      }}
    >
      <Box
        sx={{
          padding: '20px',
          color: '#fff',
          borderRadius: '12px',
          backgroundColor: 'transparent',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">Email</Typography>
        <Typography>info@120daysfinance.com</Typography>
      </Box>
    </Grid>

    {/* Phone */}
    <Grid
      item
      xs={12}
      sm={4}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRight: { sm: '2px dotted #ccc', xs: 'none' },
      }}
    >
      <Box
        sx={{
          padding: '20px',
          color: '#fff',
          borderRadius: '12px',
          backgroundColor: 'transparent',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">Phone</Typography>
        <Typography>+91 9999999341</Typography>
      </Box>
    </Grid>

    {/* Address */}
    <Grid
      item
      xs={12}
      sm={4}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          padding: '20px',
          color: '#fff',
          borderRadius: '12px',
          backgroundColor: 'transparent',
          textAlign: 'center',
        }}
      >
        <Typography variant="h6">Address</Typography>
        <Typography>S-370, Panchsheel Park, New Delhi 110017, India</Typography>
      </Box>
    </Grid>
  </Grid>
</Box>




      {/* Google Map */}
      <Box
        component="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.246459582324!2d-122.08574968468185!3d37.42206527982659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c44d6b41d3%3A0x30a9d6a89a2384e!2sGoogleplex!5e0!3m2!1sen!2sus!4v1614693744843!5m2!1sen!2sus"
        sx={{
          width: '100%',
          height: '400px',
          border: 0,
          borderRadius: '20px',
          mt: 5,
        }}
        allowFullScreen
        loading="lazy"
      />
    </Box>
  );
};

export default ContactUs;
