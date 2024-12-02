import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Grid, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import { Person, Email, Phone, Business, CurrencyRupee, AccountBalance, LocationCity, PinDrop, Map } from '@mui/icons-material';
import Swal from 'sweetalert2'; // Import SweetAlert2
import ApplyNowImage from '../assets/image/Apply-Now-Banner-Image.jpg'; // Replace with your image path

const ApplyNow = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Show SweetAlert on button click
    Swal.fire({
      title: 'Success!',
      text: 'Our executive will call you or revert you back in 24 hours.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div>
      <Box 
        sx={{ 
          background: "linear-gradient(to bottom, #4D0F4A, black,  #140514)", // Top-to-bottom gradient

          minHeight: '100vh', // Adjust height as needed
          padding: '30px',
        }}
      >
      {/* Image Section - Full Width */}
      <Box 
        sx={{ 
          position: 'relative', // Make the container relative for absolute positioning
          mb: 4 
        }}
      >
        {/* Image on the bottom */}
        <img 
          src={ApplyNowImage} 
          alt="Apply Now" 
          style={{ width: '100%', height: '90vh',marginTop:'0px' ,borderRadius:'30px'}} 
        />
        
      </Box>


      <Container maxWidth="xl" sx={{ mt: 4 }}>
       
        {/* Form Section */}
        <Box 
          component="form" 
          id="loanForm" 
          onSubmit={handleSubmit} // Add onSubmit handler
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3, 
            backgroundColor: ' transparent', 
            padding: 2, 
            borderRadius: 2, 
            boxShadow: 3,
            width: '100%',
          }}
        >
          {/* Personal Information Section */}
          <Typography variant="h6" gutterBottom sx={{color:'white'}}>
            Personal Information
          </Typography>
<Grid container spacing={3}>
  <Grid item xs={12} md={6}>
    <TextField 
      label="Full Name" 
      variant="outlined"
      fullWidth 
      required 
      name="first_name" 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
              <Person sx={{ color: 'black' }} />
            </Box>
          </InputAdornment>
        ),
        style: {
          color: 'white',  // Text color
        },
      }}
      placeholder="Enter your full name"
      sx={{ 
        mb: 2, 
        color: 'white',  // Text color
        borderRadius: '8px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',  // Border color
          },
          '&:hover fieldset': {
            borderColor: 'white',  // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',  // Border color on focus
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',  // Label color
        },
        '& .MuiInputBase-input': {
          color: 'white',  // Text input color
        },
        '& .MuiOutlinedInput-root .MuiInputBase-input::placeholder': {
          color: 'white',  // Placeholder color
        },
      }} 
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField 
      label="PAN Card" 
      variant="outlined" 
      fullWidth 
      required 
      name="pan" 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
              <AccountBalance sx={{ color: 'black' }} />
            </Box>
          </InputAdornment>
        ),
        style: {
          color: 'white',  // Text color
        },
      }}
      placeholder="Enter your PAN number"
      sx={{ 
        mb: 2, 
        color: 'white',  // Text color
        borderRadius: '8px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',  // Border color
          },
          '&:hover fieldset': {
            borderColor: 'white',  // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',  // Border color on focus
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',  // Label color
        },
        '& .MuiInputBase-input': {
          color: 'white',  // Text input color
        },
        '& .MuiOutlinedInput-root .MuiInputBase-input::placeholder': {
          color: 'white',  // Placeholder color
        },
      }} 
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField 
      label="Mobile Number" 
      type="tel" 
      variant="outlined" 
      fullWidth 
      required 
      name="mobile" 
      inputProps={{ minLength: 10, maxLength: 10 }} 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
              <Phone sx={{ color: 'black' }} />
            </Box>
          </InputAdornment>
        ),
        style: {
          color: 'white',  // Text color
        },
      }}
      placeholder="Enter your mobile number"
      sx={{ 
        mb: 2, 
        color: 'white',  // Text color
        borderRadius: '8px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',  // Border color
          },
          '&:hover fieldset': {
            borderColor: 'white',  // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',  // Border color on focus
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',  // Label color
        },
        '& .MuiInputBase-input': {
          color: 'white',  // Text input color
        },
        '& .MuiOutlinedInput-root .MuiInputBase-input::placeholder': {
          color: 'white',  // Placeholder color
        },
      }} 
    />
  </Grid>
  <Grid item xs={12} md={6}>
    <TextField 
      label="Personal Email" 
      type="email" 
      variant="outlined" 
      fullWidth 
      required 
      name="email_personal" 
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" >
            <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
              <Email sx={{ color: 'black' }} />
            </Box>
          </InputAdornment>
        ),
        style: {
          color: 'white',  // Text color
        },
      }}
      placeholder="Enter your personal email"
      sx={{ 
        mb: 2, 
        color: 'white',  // Text color
        borderRadius: '8px',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white',  // Border color
          },
          '&:hover fieldset': {
            borderColor: 'white',  // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'white',  // Border color on focus
          },
        },
        '& .MuiInputLabel-root': {
          color: 'white',  // Label color
        },
        '& .MuiInputBase-input': {
          color: 'white',  // Text input color
        },
        '& .MuiOutlinedInput-root .MuiInputBase-input::placeholder': {
          color: 'white',  // Placeholder color
        },
      }} 
    />
  </Grid>
</Grid>


          {/* Financial Information Section */}
          <Typography variant="h6" gutterBottom sx={{ mt: 4,color:'white' }}>
            Financial Information
          </Typography>
          <Grid container spacing={3}>
      {/* Business Name */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Business Name"
          variant="outlined"
          fullWidth
          name="business-name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <Business sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter your business name"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
  <TextField
    label="Business Property"
    variant="outlined"
    fullWidth
    required
    select
    name="businessProperty"
    placeholder="Property Type"
    sx={{
      mb: 2,
      borderRadius: '8px',
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.02)',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white', // Border color
        },
        '&:hover fieldset': {
          borderColor: 'white', // Border color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white', // Border color on focus
        },
      },
      '& .MuiInputLabel-root': {
        color: 'white', // Label color
      },
      '& .MuiInputBase-input': {
        color: 'white', // Text input color
      },
      '& .MuiSelect-icon': {
        color: 'white', // Dropdown icon color
        position: 'absolute',
        right: '16px', // Align to the right of the input box
        top: '50%', // Vertically align icon
        transform: 'translateY(-50%)', // Center the icon
      },
      '& option': {
        backgroundColor: 'white', // Dropdown option background
        color: 'black', // Dropdown option text color
      },
    }}
    SelectProps={{
      native: true, // Native HTML <select>
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
            <Business sx={{ color: 'black' }} />
          </Box>
        </InputAdornment>
      ),
    }}
    defaultValue="" // Ensures the default placeholder works properly
  >
    <option value="" disabled>
      Property Type
    </option>
    <option value="own">Own</option>
    <option value="rental">Rental</option>
  </TextField>
</Grid>




      

      {/* GST Number */}
      <Grid item xs={12} md={6}>
        <TextField
          label="GST No"
          variant="outlined"
          fullWidth
          name="gst-no"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <Business sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter your GST number"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>

      {/* Loan Amount */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Loan Amount (₹)"
          type="number"
          variant="outlined"
          fullWidth
          required
          name="loan_amount"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <CurrencyRupee sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter loan amount"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>

      {/* Yearly Turnover */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Yearly Turnover (₹)"
          type="number"
          variant="outlined"
          fullWidth
          required
          name="yearly-turn-over"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <CurrencyRupee sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter yearly turnover"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>

      {/* State */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Select State"
          variant="outlined"
          fullWidth
          required
          name="state_id"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <Map sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter state"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>

      {/* City */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Select City"
          variant="outlined"
          fullWidth
          required
          name="city_id"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <LocationCity sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter city"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>

      {/* Pincode */}
      <Grid item xs={12} md={6}>
        <TextField
          label="Select Pincode"
          variant="outlined"
          fullWidth
          required
          name="pincode"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Box sx={{ backgroundColor: 'white', borderRadius: '50%', padding: '4px' }}>
                  <PinDrop sx={{ color: 'black' }} />
                </Box>
              </InputAdornment>
            ),
          }}
          placeholder="Enter pincode"
          sx={{
            mb: 2,
            borderRadius: '8px',
            '& input': {
              color: 'white',
            },
            '& ::placeholder': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
            '&:hover': {
              transform: 'scale(1.02)',
            },
          }}
        />
      </Grid>
      
    </Grid>
          {/* Checkbox for Terms and Privacy */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                required

                  checked={termsAccepted}
                  onChange={handleCheckboxChange}
                  sx={{color:'white'}}
                />
              }
              label={
                <span style={{color:'white'}}>
                  I accept the <a href="/terms-condition" style={{ color: '#4caf50' }}>Terms and Conditions</a> and <a href="/privacy-policy" style={{ color: '#4caf50' }}>Privacy Policy</a>
                </span>
              }
            />
          </Box>

          {/* Submit Button */}
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ 
              backgroundColor: 'white', 
              color: 'black', 
              fontWeight:'bold',
              borderRadius:'30px',
              '&:hover': { backgroundColor: '#216daf' },
              fontSize: '0.75rem', // Smaller font size for the button
              padding: '8px ', // Smaller padding
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
      </Box>
    </div>
  );
};

export default ApplyNow;
