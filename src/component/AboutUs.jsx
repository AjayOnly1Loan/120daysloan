import React, { useEffect, useRef,useState } from 'react';
import { Typography, Grid, Box ,Container,Button,Link,Fade,
  AccordionSummary,
  AccordionDetails, } from '@mui/material';
import VisionImage from '../assets/image/image.png'; // Import your vision image here
import MissionImage from '../assets/image/image1.png'; // Import your mission image here
import aboutImage from '../assets/image/photo requested 1 aman .webp'; // Correct image path for about us
import contentImage from "../assets/image/Frame 535.png"; // Correct image path
import { useInView } from 'react-intersection-observer';






const AboutUs = () => {
  const videoRef = useRef(null);
 // Hooks to detect visibility of the elements
 const [titleRef, titleInView] = useInView({ triggerOnce: false, threshold: 0.7 });
  const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.3 });


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current.play();
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.5 } // Adjust this threshold as needed
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);


  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              const entry = entries[0];
              if (entry.isIntersecting) {
                  setIsVisible(true);
              } else {
                  setIsVisible(false);
              }
          },
          { threshold: 0.1 }
      );

      if (faqRef.current) {
          observer.observe(faqRef.current);
      }

      return () => {
          if (faqRef.current) {
              observer.unobserve(faqRef.current);
          }
      };
  }, []);

  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);


  
  return (
    <Box 
        sx={{ 
          background: "linear-gradient(to bottom, #4D0F4A, black,  #140514)", // Top-to-bottom gradient

          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh', // Adjust height as needed
          padding: '30px',
        }}
      >
   
      {/* Image Section */}
      <Box 
      
      sx={{ 
        position: 'relative',
        width: '100%',
        height: { xs: '50vh', sm: '60vh', md: '60vh', lg: '110vh' },          
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
          padding: {xs:'1px',md:'10px'},

          border: '2px solid transparent', // Added a solid border for consistency
          borderRadius: '50px',
        }}
      />
    </Box>
        


   

{/* Animated Title */}
<Fade in={titleInView} timeout={1000}>
        <Typography
          ref={titleRef}
          variant="h4"
          sx={{
            color: 'white',
            marginTop: '50px',
            fontFamily: 'Inter',
            fontSize: { xs: '2rem', sm: '2.4rem', md: '3rem' },
            fontWeight: 700,
            lineHeight: { xs: '45px', md: '73px' },
            letterSpacing: '-0.408px',
            textAlign: 'center',
            marginBottom: { xs: '20px', md: '2px' },
          }}
        >
          About Us
        </Typography>
      </Fade>

      {/* Animated Description */}
      <Fade in={textInView} timeout={1000}>
        <Typography
          ref={textRef}
          variant="body1"
          sx={{
            width: '100%',
            maxWidth: '90%', // Restrict width for better readability
            margin: '0 auto', // Center the content
            paddingLeft: { xs: '0px', sm: '20px', md: '50px' },
            paddingRight: { xs: '0px', sm: '20px', md: '50px' },
            fontFamily: 'Inter',
            fontSize: { xs: '14px', sm: '16px', md: '22px' },
            fontWeight: 500,
            lineHeight: { xs: '22px', md: '40px' },
            color: 'white',
            textAlign: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Light background for better visibility
            borderRadius: '8px',
            marginBottom: { xs: '20px', md: '90px' },
          }}
        >
          Welcome to 120daysfinance.com, a pioneering financial partner for small businesses across India.
          Our mission is simple: to empower entrepreneurs with quick, hassle-free loans designed to meet their urgent
          capital needs. With a streamlined application process, we specialize in providing 120-day loans, ensuring
          businesses have the working capital to grow and thrive.

          As a proud lending partner of Naman Finlease Private Limited, an established Non-Banking Financial Company
          (NBFC), we bring credibility and trust to every loan we provide. At 120daysfinance.com, we understand that
          time is of the essence for businesses, and that's why our solutions are built around speed, flexibility, and
          transparency.

          Whether you need capital for new inventory, marketing, or to manage daily operations, we’ve got your back.
          With easy repayment options and personalized support, we’re here to help you unlock growth and seize new
          opportunities. At 120daysfinance.com, we’re more than just lenders — we’re partners in your business success.
          Let’s grow together.
        </Typography>
      </Fade>
    

   

      
            


{/* Mission & Vision */}
<Box
  sx={{
    marginLeft: { xs: 0, md: '55px' }, // Remove margin for small screens

    marginRight: { xs: 0, md: '55px' },
    padding: 3,
    backgroundColor: '#C9DDE4',
    borderRadius: '30px',
    boxShadow: 2,
    textAlign: 'left',
    flex: 1,
    zIndex: 1,
    width: { xs: '100%', md: '90%' }, // Match image width for small screens
  }}
>
  <Typography
    variant="h4"
    component="h2"
    gutterBottom
    sx={{
      fontWeight: 'bold',
    }}
  >
    Our Mission
  </Typography>
  <Typography
    variant="body1"
    sx={{
      marginRight: { xs: 0, md: '400px' }, // No margin on small screens
      fontSize: '20px',
    }}
  >
    At 120daysfinance, our mission is to provide quick, reliable, and affordable financing solutions for small businesses, ensuring they have the resources they need to succeed. If you're approved, the funds are transferred directly to your bank account—no delays, no hassle. Our goal is to ensure that accessing financial help is straightforward and efficient, so you can focus on what really matters.
  </Typography>
</Box>

{/* Image */}
<Box
  component="img"
  src={MissionImage}
  alt="Our Mission"
  sx={{
    width: { xs: '80%', sm: '70%', md: '27%' }, // Adjust width for smaller screens
    height: 'auto',
    borderRadius: '8px',
    maxWidth: '100%',
    position: { xs: 'static', md: 'absolute' }, // Static for small screens, absolute for larger screens
    left: { md: '74%' }, // Apply left positioning only on larger screens
    transform: { md: 'translate(-50%, -20%)' }, // Only for larger screens
    zIndex: 6,
    marginTop: { xs: '20px', md: -32 }, // Add spacing for smaller screens
    marginX: { xs: 'auto', md: 0 }, // Center the image horizontally on small screens
    marginLeft: { xs: '30px', sm: '0', md: '0' }, // Center on small screens
    marginRight: { xs: 'auto', sm: '0', md: '0' }, // Ensure it's centered
  }}
/>



      <Box
         sx={{
          marginLeft: { xs: 0, md: '40px' }, // Remove margin for small screens
          marginRight: { xs: 0, md: '40px' },
          marginTop:{xs:'20px',md:'100px'} ,
          marginBottom: '50px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'column' }, // Keep stacked vertically
          padding: 3,
          position: 'relative', // Maintain zIndex stacking
        }}
      >
        {/* Content Box */}
        <Box
          sx={{
            padding: 4,
            backgroundColor: '#DED3EE',
            boxShadow: 2,
            textAlign: 'left',
            flex: 1,
            zIndex: 1,
            borderRadius: '30px',

            width: { xs: '120%', md: '100%' }, // Adjust width for smaller screens
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              marginLeft: { xs: 0, md: '400px' }, // Reset margin on smaller screens
              fontWeight: 'bold',
            }}
          >
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginLeft: { xs: 0, md: '400px'  },
              fontSize:'20px'
              // Reset margin on smaller screens
            }}
          >
       At 120daysfinance.com, we are dedicated to empowering small businesses in India with fast, flexible, and reliable financing solutions. Our mission is to provide quick access to the capital you need, without the complexities of traditional lending. Whether you are looking to manage your working capital, purchase new equipment, or fund an upcoming project, we are here to help with straightforward loans that put your business first.          </Typography>
        </Box>

        {/* Image */}
        <Box
          component="img"
          src={VisionImage}
          alt="Our Vision"
          sx={{
            width: { xs: '100%', md: '33%' }, // Set size for smaller and larger screens
            height: 'auto',
            borderRadius: '30px',
            maxWidth: { xs: 'none', md: '60%' }, // Allow larger width on small screens
            position: { xs: 'static', md: 'absolute' }, // Absolute position only for larger screens
            right: { md: '45%' }, // Position for larger screens
            transform: { md: 'translate(-50%, -20%)' }, // Apply only on larger screens
            zIndex: 6,
            marginTop: { xs: '20px', md: 4 }, // Add spacing for smaller screens
          }}
        />

      </Box>
      {/* why choose us */}
      <Container
      sx={{
        background: "transparent", // Top-to-bottom gradient
      }}
    >
      {/* Heading */}
      <Typography
        sx={{mt:{xs:0,md:5},
          fontWeight: 700,  // Bold text
          fontSize:{xs:"40px",md:'60px'},  // Font size of 40px
          color: "#D9D9D9 ", // White color to make the text stand out against the dark background
          marginBottom:{xs:1,md:5} , // Some margin at the bottom for spacing
        }}
      >
        Why Choose Us
      </Typography>

      {/* Image */}
      <Box
        component="img"
        src={contentImage}
        alt="Why Choose Us"
        sx={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: 6, // Margin below the image to create space
        }}
      />
    </Container>
 


              
         {/* <Technology/> */}

         
            

         <Box
      sx={{
        background:'transparent',
        padding: '40px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Grid container alignItems="center">
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Typography
            sx={{mt:'-30px',
              fontWeight: 'bold',
              marginBottom: '26px',
              color: 'white',
              fontSize:{xs:"40px",md:'60px'},  // Font size of 40px

              textAlign: { xs: 'center', md: 'left' },

            }}
          >
            Enquire for Loan
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              color: 'white',
              marginBottom: '16px',
            }}
          >
            We're here to help! Contact us with any questions or concerns about
            our services. Your feedback is important to us.
          </Typography>
          
          <Button
            component={Link}
            href="/contact-us"
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              padding:'7px',
              paddingX:'20px',
              fontSize:'20px',
              borderRadius:'30px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#5e0d5e',
              },
            }}
          >
            Read More
          </Button>
        </Grid>
      </Grid>
    </Box>
 


        
        </Box>
        
   
  );
};


export default AboutUs;
