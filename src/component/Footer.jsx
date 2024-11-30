import React from 'react';
import { Box, Typography, Link, Grid ,Stack} from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        background: 'linear-gradient(to right, #140514, #350a35)', // Gradient background
        color: '#fff',
        padding: '30px ',
        paddingLeft:'50px'

      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          backgroundColor: '#ffffff',
          borderRadius: '30px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Left Column */}
        <Grid item xs={12} md={4}>
          <Box>
            
            <Box
              sx={{
                textAlign:{xs:'center',md:'left'},
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                fontWeight:650,
                marginLeft:{xs:'-12px',md:'30px'},
                marginTop:'15px',
                marginBottom:'35px'

              }}
            >
              <Link href="/" underline="none" sx={{ color: 'gray', fontSize: '35px' }}>
                Home
              </Link>
              <Link href="/about-us" underline="none" sx={{ color: 'gray', fontSize: '35px' }}>
                About
              </Link>
              <Link href="/contact-us" underline="none" sx={{ color: 'gray', fontSize: '35px' }}>
                Contact
              </Link>
              <Link href="/apply-now" underline="none" sx={{ color: 'gray', fontSize: '35px' }}>
                Apply
              </Link>
              <Link href="/repay-now" underline="none" sx={{ color: 'gray', fontSize: '35px' }}>
                Repay
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Middle Divider */}
        <Grid
          item
          xs={12}
          md={1}
          sx={{
            marginY:5,
            padding:3,
            marginLeft:-35,
            display: { xs: 'none', md: 'block' },
            borderRight: '2px dotted gray',
          }}
        ></Grid>

        {/* Right Column */}
        <Grid item xs={12} md={9.4}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: '600px',
              marginBottom: '16px',
              color: '#140514',
              textAlign: { xs: 'center', md: 'left' },
              marginLeft:{xs:'-13px',md:0},
              letterSpacing:0.7,

            }}
          >
            Unlock your business’s true potential with flexible finance solutions tailored to your growth.
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: 'gray',
              textAlign: { xs: 'center', md: 'left' },
              marginBottom: '26px',
              fontSize:{xs:'30px',md:'60px'},
              letterSpacing: '20px', // This will add spacing between the letters.
               marginTop:{xs:0,md:-3}
            }}
          >
            120 DAYS FINANCE
          </Typography>

          {/* Terms, Privacy, and FAQ */}
          <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '16px',
  }}
>
  {/* Terms, Privacy, and FAQ */}
  <Box
    sx={{
      marginLeft:{xs:0,md:2},
      marginTop: { xs: 0, md: '-40px' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: { xs: 'center', md: 'flex-start' },
    }}
  >
     <Typography
      sx={{
        color: 'black',
        fontSize: '24px',
        marginBottom: '6px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      Links
    </Typography>
    <Link
      href="/terms-condition"
      underline="none"
      sx={{
        color: '#333',
        marginBottom: '6px',
        fontSize: '20px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      Terms & Conditions
    </Link>
    <Link
      href="/privacy-policy"
      underline="none"
      sx={{
        color: '#333',
        marginBottom: '6px',
        fontSize: '20px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      Privacy Policy
    </Link>
    <Link
      href="/faq"
      underline="none"
      sx={{
        marginBottom: '6px',

        color: '#333',
        fontSize: '20px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      FAQs
    </Link>
  </Box>

  {/* Address and Contact Info */}
  <Box
    sx={{
      marginRight: { xs: 0, md: '70px' },
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    <Typography sx={{ color: 'black', fontSize: '24px', marginBottom: '10px' }}>
      Resources
    </Typography>
    <Typography sx={{ color: 'gray', fontSize: '20px', marginBottom: '10px' }}>
      Address: 123 Finance Street,
      <br />
      Business City, India
    </Typography>
    <Typography sx={{ color: 'gray', fontSize: '20px', marginBottom: '10px' }}>
      Phone: +91-9876543210
    </Typography>
    <Typography sx={{ color: 'gray', fontSize: '20px' }}>
      Email: support@finance.com
    </Typography>
  </Box>

  {/* Social Networking Links */}
  <Box
    sx={{
      marginRight: { xs: 0, md: '40px' },

      marginTop: { xs: '20px', md: 0 },
      textAlign: { xs: 'center', md: 'left' },
      alignItems: { xs: 'center', md: 'flex-start' },
    }}
  >
    <Typography
      sx={{
        color: 'black',
        fontSize: '24px',
        marginBottom: '10px',
        textAlign: { xs: 'center', md: 'left' },
      }}
    >
      Social Links
    </Typography>
    <Stack spacing={0}>
      <Link
        href="/facebook"
        underline="none"
        sx={{
          color: '#333',
          fontSize: '20px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Facebook
      </Link>
      <Link
        href="/linkedin"
        underline="none"
        sx={{
          color: '#333',
          fontSize: '20px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        LinkedIn
      </Link>
      <Link
        href="/twitter"
        underline="none"
        sx={{
          color: '#333',
          fontSize: '20px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Instagram
      </Link>
      <Link
        href="/instagram"
        underline="none"
        sx={{
          color: '#333',
          fontSize: '20px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
         Twitter
        
      </Link>
    </Stack>
  </Box>
</Box>

        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
