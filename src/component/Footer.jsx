import React from 'react';
import { Box, Typography, Link, Grid ,Stack} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

Being a one-stop solution for your financial needs, we're here to make your journey smoother!

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

          <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: { xs: 4, md: 6 },
    marginBottom: '16px',
    padding: { xs: 2, md: 4 },
  }}
>
  {/* Links Section */}
  <Box sx={{ flex: 1, marginBottom: { xs: 4, md: 0 } }}>
    <Typography
      sx={{
        color: '#333', // Same color for title and links
        fontSize: '24px',
        marginBottom: '25px',
        textAlign: { xs: 'center', md: 'left' },
        fontWeight: 'bold', // Same font weight for consistency
      }}
    >
      Links
    </Typography>
    {['Terms & Conditions', 'Privacy Policy', 'FAQs'].map((text, index) => {
      const links = ['/terms-condition', '/privacy-policy', '/faq'];
      return (
        <Link
          key={index}
          href={links[index]}
          underline="none"
          sx={{
            display: 'block',
            color: '#333', // Same color for links as the title
            fontSize: '20px',
            textAlign: { xs: 'center', md: 'left' },
            position: 'relative',
            marginBottom: '8px',
            '&::before': {
              content: { xs: 'none', md: '"•"' },
              position: 'absolute',
              left: '-12px',
              color: '#333', // Same color for bullet points
            },
          }}
        >
          {text}
        </Link>
      );
    })}
  </Box>

  {/* Social Links Section */}
  <Box sx={{ flex: 1, marginBottom: { xs: 4, md: 0 } }}>
    <Typography
      sx={{
        color: '#333', // Same color for title and links
        fontSize: '24px',
        marginBottom: '10px',
        textAlign: { xs: 'center', md: 'left' },
        fontWeight: 'bold', // Same font weight for consistency
      }}
    >
      Social Links
    </Typography>
    <Stack spacing={1} sx={{ fontSize: '20px', color: '#333' }}>
      {['Facebook', 'LinkedIn', 'Instagram', 'Twitter'].map((platform, index) => {
        const socialLinks = ['/facebook', '/linkedin', '/instagram', '/twitter'];
        return (
          <Link
            key={index}
            href={socialLinks[index]}
            underline="none"
            sx={{
              display: 'block',
              color: '#333', // Same color for links as the title
              textAlign: { xs: 'center', md: 'left' },
              position: 'relative',
              '&::before': {
                content: { xs: 'none', md: '"•"' },
                position: 'absolute',
                left: '-12px',
                color: '#333', // Same color for bullet points
              },
            }}
          >
            {platform}
          </Link>
        );
      })}
    </Stack>
  </Box>

  {/* Resources Section */}
  <Box sx={{ flex: 1 }}>
    <Typography
      sx={{
        color: '#333', // Same color for title and links
        fontSize: '24px',
        marginBottom: '20px',
        textAlign: { xs: 'center', md: 'left' },
        fontWeight: 'bold', // Same font weight for consistency
      }}
    >
      Resources
    </Typography>
    <Stack spacing={2} sx={{ fontSize: '20px', color: 'gray' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocationOnIcon sx={{ marginRight: 1 }} />
        <Typography>
          S-370, Panchsheel Park,
          <br />
          New Delhi, 110017, India
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PhoneIcon sx={{ marginRight: 1 }} />
        <Typography>+91-9999999341</Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <EmailIcon sx={{ marginRight: 1 }} />
        <Typography>info@120daysfinance.com</Typography>
      </Box>
    </Stack>
  </Box>
</Box>




        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
