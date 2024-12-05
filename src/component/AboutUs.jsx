import React, { useEffect, useRef,useState } from 'react';
import { Typography, Grid, Box ,Container,Button,Link,Fade,
  AccordionSummary,
  AccordionDetails, } from '@mui/material';
import VisionImage from '../assets/image/image.png'; // Import your vision image here
import MissionImage from '../assets/image/image1.png'; // Import your mission image here
import aboutImage from '../assets/image/About-us-Banner.jpg-120-Days.jpg'; // Correct image path for about us
import contentImage from "../assets/image/Frame 535 (1).png"; // Correct image path
import { useInView } from 'react-intersection-observer';






const AboutUs = () => {

  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const [missionInView, setMissionInView] = useState(false);
  const [visionInView, setVisionInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === missionRef.current) {
            setMissionInView(entry.isIntersecting);
          } else if (entry.target === visionRef.current) {
            setVisionInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (missionRef.current) observer.observe(missionRef.current);
    if (visionRef.current) observer.observe(visionRef.current);

    return () => {
      if (missionRef.current) observer.unobserve(missionRef.current);
      if (visionRef.current) observer.unobserve(visionRef.current);
    };
  }, []);



  const videoRef = useRef(null);
 // Hooks to detect visibility of the elements
 const [titleRef, titleInView] = useInView({ triggerOnce: false, threshold: 0.7 });
  const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.3 });
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset animation when the box leaves the viewport
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the box is visible
    );

    const target = document.getElementById("image-box");
    if (target) observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

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
   
   <Box
      id="image-box"
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "50vh", sm: "60vh", md: "60vh", lg: "110vh" },
        overflow: "hidden",
        mb: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 1s ease-out, opacity 1s ease-out",
        transform: isVisible ? "scale(1)" : "scale(0.5)", // Animation scaling effect
        opacity: isVisible ? 1 : 0, // Fade in and out
      }}
    >
      <Box
        component="img"
        src={aboutImage}
        alt="Contact Us"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "90%",
          objectFit: "cover",
          padding: { xs: "1px", md: "10px" },
          border: "2px solid transparent",
          borderRadius: "40px",
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
At 120daysfinance, we understand that life can throw unexpected challenges so every business needs to meet their urgent requirements. And sometimes, a little financial boost can make a huge difference.
That’s why we are here to help you – a leading financial partner for small businesses across India. We provide our users with the quickest, most reliable, and complete hassle-free solutions for their financial concerns.
We are not just another financial service provider but an established NBFC. Our main motto lies in empowering entrepreneurs with the confidence to manage their expenses without hassles.
        </Typography>
      </Fade>
    

   

      
            


{/* Mission & Vision */}
<Box>
      {/* Mission Section */}
      <Box
        ref={missionRef}
        sx={{
          backgroundColor: '#ffff',
          borderRadius: '30px',
          marginLeft: { xs: 0, md: '50px' },
          marginRight: { xs: 0, md: '50px' },
          marginTop: { xs: '20px', md: '100px' },
          marginBottom: '50px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          padding: 3,
          position: 'relative',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Content Box */}
        <Box
          sx={{
            border: 'none',
            padding: 3,
            textAlign: 'left',
            flex: 1,
            zIndex: 1,
            width: { xs: '100%', md: '50%' },
            backgroundColor: 'transparent',
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
              fontSize: '20px',
            }}
          >
            At 120daysfinance, our mission is to provide quick, reliable, and
            affordable financing solutions for small businesses, ensuring they
            have the resources they need to succeed. If you're approved, the
            funds are transferred directly to your bank account—no delays, no
            hassle. Our goal is to ensure that accessing financial help is
            straightforward and efficient, so you can focus on what really
            matters.
          </Typography>
        </Box>

        {/* Image Box with Flip Animation */}
        <Box
          component="img"
          src={MissionImage}
          alt="Our Mission"
          sx={{
            width: { xs: '100%', md: '50%' },
            height: '400px',
            borderRadius: '30px',
            objectFit: 'cover',
            marginTop: { xs: '20px', md: '0' },
            marginLeft: { md: 3 },
            marginBottom: { xs: '20px', md: '0' },
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: missionInView ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        />
      </Box>

      {/* Vision Section */}
      <Box
        ref={visionRef}
        sx={{
          backgroundColor: '#ffff',
          borderRadius: '30px',
          marginLeft: { xs: 0, md: '50px' },
          marginRight: { xs: 0, md: '50px' },
          marginTop: { xs: '20px', md: '100px' },
          marginBottom: '50px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          padding: 3,
          position: 'relative',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Image Box with Flip Animation */}
        <Box
          component="img"
          src={VisionImage}
          alt="Our Vision"
          sx={{
            width: { xs: '100%', md: '50%' },
            height: '400px',
            borderRadius: '30px',
            objectFit: 'cover',
            marginTop: { xs: '20px', md: '0' },
            marginLeft: { md: 3 },
            marginBottom: { xs: '20px', md: '0' },
            transition: 'transform 0.6s',
            transformStyle: 'preserve-3d',
            transform: visionInView ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        />

        {/* Content Box */}
        <Box
          sx={{
            border: 'none',
            padding: 3,
            textAlign: 'left',
            flex: 1,
            zIndex: 1,
            width: { xs: '100%', md: '50%' },
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
            Our Vision
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '20px',
            }}
          >
            At 120daysfinance.com, we are dedicated to empowering small
            businesses in India with fast, flexible, and reliable financing
            solutions. Our mission is to provide quick access to the capital
            you need, without the complexities of traditional lending. Whether
            you are looking to manage your working capital, purchase new
            equipment, or fund an upcoming project, we are here to help with
            straightforward loans that put your business first.
          </Typography>
        </Box>
      </Box>
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
