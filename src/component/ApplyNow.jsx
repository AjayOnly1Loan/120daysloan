import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Grid, InputAdornment, Checkbox, FormControlLabel } from '@mui/material';
import { Person, Email, Phone, Business, CurrencyRupee, AccountBalance, LocationCity, PinDrop, Map } from '@mui/icons-material';
import Swal from 'sweetalert2'; // Import SweetAlert2
import ApplyNowImage from '../assets/image/Apply-Now-Banner-Image.jpg'; // Replace with your image path

const ApplyNow = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [formValues, setFormValues] = useState({
    fullName:'',
        pan:'',
        mobile:'',
        personalEmail:'',
        businessName:'',
        propertyType:'',
        gstNo:'',
        loanAmount:'',
        turnover:'',
        pinCode:'',
        state:'',
        city:'',
    
  });
  const [formErrors, setFormErrors] = useState({});

  const handlePincodeChange = async (e) => {
    const value = e.target.value;
  
    // Only allow numeric input and ensure the pincode has no more than 6 digits
    if (/^\d{0,6}$/.test(value)) {
      setFormValues({ ...formValues, pinCode: value });
  
      // If the pincode has exactly 6 digits, fetch city and state
      if (value.length === 6) {
        try {
          const response = await fetch(`https://api.postalpincode.in/pincode/${value}`);
          const data = await response.json();
  
          if (data[0].Status === "Success") {
            const { Block, State } = data[0].PostOffice[0];
            setCity(Block);
            setState(State);
            console.log('City:', Block, 'State:', State);
          } else {
            // Handle invalid pin code case
            setCity('');
            setState('');
            Swal.fire({
              icon: 'error',
              title: 'Invalid Pincode',
              text: 'Please enter a valid pincode.',
            });
          }
        } catch (error) {
          console.error('Error fetching pincode data:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'An error occurred while fetching data. Please try again later.',
          });
        }
      } else {
        // Reset city and state if pincode is incomplete
        setCity('');
        setState('');
      }
    } else {
      // Clear the pincode and reset city/state if input is invalid
      setFormValues({ ...formValues, pinCode: '' });
      setCity('');
      setState('');
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("the pan value is 1",value)
  
    // Validation for input fields (only block if invalid input is entered)
  
    // Mobile: Only digits and max 10 characters
    if (name === 'fullName' && !/^[A-Za-z\s]*$/.test(value)) return;
  
    if (name === 'mobile' && (!/^\d*$/.test(value) || value.length > 10)) return;
  
    // Salary and Loan Amount: Only digits
    if ((name === 'salary' || name === 'loanAmount') && !/^\d*$/.test(value)) return;
  
    // PinCode: Only digits and max 6 characters
    if (name === 'pinCode' && (!/^\d*$/.test(value) || value.length > 6)) return;
  
    // Aadhaar: Only digits and max 12 characters
    // if (name === 'aadhaar' && (!/^\d*$/.test(value) || value.length > 12)) return;
    
    if (name === 'pan') {
      // Convert to uppercase for consistency
      const panInput = value.toUpperCase();
  
      // Allow only up to 10 characters and validate per character
      if (panInput.length <= 10) {
          // Regular expression to match PAN format progressively
          if (
              /^[A-Z]{0,5}$/.test(panInput) || // First 5 characters must be letters
              /^[A-Z]{5}\d{0,4}$/.test(panInput) || // Next 4 characters must be digits
              /^[A-Z]{5}\d{4}[A-Z]?$/.test(panInput) // Last character must be a letter
          ) {
              setFormValues({ ...formValues, [name]: panInput });
              setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear any error message
          } else {
              setFormErrors((prevErrors) => ({
                  ...prevErrors,
                  [name]: 'PAN format should be 5 letters, 4 digits, and 1 letter (e.g., ABCDE1234F).',
              }));
          }
      }
      return; // Prevent further processing if input exceeds 10 characters
  }
  

  
    

    console.log("the pan value is ",value)
    // Update form values and reset errors for the specific field
    setFormValues({ ...formValues, [name]: value });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };


  const validateForm = () => {
    const errors = {};
    const mobileValid = /^\d{10}$/.test(formValues.mobile); // Ensure 10-digit mobile
    const panValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formValues.pan); // Validate PAN format

    // Other validations...

    if (!mobileValid) errors.mobile = 'Mobile number must be a 10-digit number'; // Display error if invalid
    if (!panValid) errors.pan = 'Invalid PAN format (e.g., ABCDE1234F)'; // Display error if invalid

    // Other errors...

    return errors;
};



  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const errors = validateForm(); // Validate form and get errors
    
    console.log("the values of onject ",Object.keys(errors).length)
    // Check for validation errors
    if (Object.keys(errors).length >=2) {
      setFormErrors(errors); // Set the errors in state
      return; // Prevent submission
    }
  
    // Proceed with form submission if there are no errors
    try {
      const response = await fetch('https://api.120daysfinance.com/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formValues,
          state: state,
          city: city,
          termsAccepted,
          source: 'website',
        }),
      });
  
      if (!response.ok) throw new Error('Network response was not ok');
  
      const result = await response.json();
  
      Swal.fire({
        title: 'Success!',
        text: 'Our executive will call you or revert you back in 24 hours.',
        icon: 'success',
        confirmButtonText: 'OK',
      });
  
      // Reset form after successful submission
      setFormValues({
        pan:'',
        mobile:'',
        personalEmail:'',
        businessName:'',
        propertyType:'',
        gstNo:'',
        loanAmount:'',
        turnover:'',
        pinCode:'',
        state:'',
        city:'',
      });
      setTermsAccepted(false);
     
      setFormErrors({}); // Reset form errors
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  };
  

  return (
    <div>
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
          src={ApplyNowImage}
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


      <Container maxWidth="xl" sx={{ mt: 4 }}>
       
        {/* Form Section */}
        <Box 
          component="form" 
          id="loanForm" 
          onChange={handleInputChange}
        
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

        
      onChange={handleInputChange}

      name="fullName" 
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
        onChange={handleInputChange}
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
            color: 'white',
            borderRadius: '8px',
            transition: 'transform 0.2s',
            '&:hover': {
                transform: 'scale(1.02)',
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
            '& .MuiInputLabel-root': {
                color: 'white',
            },
            '& .MuiInputBase-input': {
                color: 'white',
            },
            '& .MuiOutlinedInput-root .MuiInputBase-input::placeholder': {
                color: 'white',
            },
        }} 
    />
    {formErrors.pan && <Typography color="error">{formErrors.pan}</Typography>} {/* Error message */}
</Grid>

  <Grid item xs={12} md={6}>
    <TextField 
      label="Mobile Number" 
      type="tel" 
      variant="outlined" 
      fullWidth 
      required 
      onChange={handleInputChange}

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
      onChange={handleInputChange}

      name="personalEmail" 
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
          onChange={handleInputChange}

          name="businessName"
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
    onChange={handleInputChange}

    select
    name="propertyType"
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
          name="gstNo"
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
          name="loanAmount"
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
          name="turnover"
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
         fullWidth
         required
         name='state'
         label="State"
         value={state}
         error={!!formErrors.state}
         helperText={formErrors.state || ''}
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
         fullWidth
         required
         name='city'
         label="City"
         value={city}
         error={!!formErrors.city}
         helperText={formErrors.city || ''}

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
          name="pinCode"
          onChange={handlePincodeChange}

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
            onClick={handleSubmit}

            sx={{ 
              backgroundColor: 'white', 
              color: 'black', 
              fontWeight:'bold',
              borderRadius:'30px',
              '&:hover': { backgroundColor: '#e0e0de' },
              fontSize: '14px', // Smaller font size for the button
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
