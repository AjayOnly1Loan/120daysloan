import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Import your images
import image1 from '../assets/image/MakeUp-Artist-Image-New.jpg';
import image2 from '../assets/image/Entrepreneur.png';
import image3 from '../assets/image/Butique.png';
import image4 from '../assets/image/Saloon.png';
import image5 from '../assets/image/Contractor.png';
import image6 from '../assets/image/Small Buisness Owner.png';
import image7 from '../assets/image/Startup.png'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '150vh',
    backgroundColor: '#140514',
    paddingLeft: '20px',
    paddingRight: '40px',
  },
  outerBox: {
    width: '100%',
    height: '85%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontWeight: 600,
    fontSize: '50px',
    color: '#333',
  },
  middleBox: {
    border: '1.5px solid #000000',
    width: '97%',
    height: '80%',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
    padding: 10,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  innerBox: {
    width: '100%',
    height: '100%',
    padding: 10,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    border: '1.8px solid #333333',
  },
  innerBox2: {
    width: '100%',
    height: '100%',
    padding: 10,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    border: '1.7px solid #666666',
  },
  innerBox3: {
    width: '100%',
    height: '100%',
    padding: 10,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    border: '1.5px solid #999999',
  },
  innerBox4: {
    width: '100%',
    height: '100%',
    padding: 10,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
  },
  scrollContainer: {
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
    scrollBehavior: 'smooth',
    /* Hide scrollbar */
    scrollbarWidth: 'none', // For Firefox
    '-ms-overflow-style': 'none', // For IE and Edge
    '&::-webkit-scrollbar': {
      display: 'none', // For Chrome, Safari, and Opera
    },
  },
  imageWrapper: {
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    borderRadius: '10px',
    width: '100%',
    height: '800px', // Adjust as needed for large screens
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  textBox: {
    position: 'absolute',
    borderBottom: 'none',
    bottom: '0px', // Move text box to the bottom
    left: '20px', // Move text box to the left
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent white background
    color: 'Black',
    border: '2px solid white',
    width: '300px', // Width to make it square
    height: '200px', // Height to make it square
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '25px',
    borderTopRightRadius: '25px',
    fontSize: '34px', // Smaller font size to fit in the square box
    textAlign: 'center',
    padding: '5px',
  },

  // Media query for smaller screens
  '@media (max-width: 600px)': {
    container: {
      height: '60vh', // Decrease height on small screens
      paddingLeft: '10px',
      paddingRight: '10px',
    },
    imageWrapper:{
      height:'300px'

    },
    textBox:{
      width: '60px', // Width to make it square
    height: '50px', // Height to make it square
    fontSize:'15px'

    },
    image:{
      height:'30vh'

    },
    imageContainer: {
      height: '100vh', // Adjust height to show one image at a time on small screens
    },
    
    scrollContainer: {
      height: '100%', // Ensure container fills the available space
    },
  },
}));

const ScrollImages = () => {
  const classes = useStyles();
  const images = [image1, image2, image3, image4,image5,image6,image7];
  const texts = ['Make-up Artist  ', 'Entrepreneur', 'Butique', 'Salon','Contractor','Small Buisness Owner','Startup'];
  const scrollRef = useRef();

  const handleScroll = () => {
    const scrollTop = scrollRef.current.scrollTop;
    const scrollThreshold = 300; // Height of each image container
    const newImageIndex = Math.floor(scrollTop / scrollThreshold);

    setCurrentImageIndex(newImageIndex);
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);

    return () => scrollElement.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box className={classes.container}>
      <Box className={classes.outerBox}>
        <Typography className={classes.title} >
          Eligible People  
        </Typography>
        <Box className={classes.middleBox}>
          <Box className={classes.innerBox}>
            <Box className={classes.innerBox2}>
              <Box className={classes.innerBox3}>
                <Box className={classes.innerBox4}>
                  <Box className={classes.scrollContainer} ref={scrollRef}>
                    <Box className={classes.imageWrapper}>
                      {images.map((img, index) => (
                        <Box className={classes.imageContainer} key={index}>
                          <img src={img} alt={`image-${index}`} className={classes.image} />
                          <Box className={classes.textBox}>{texts[index]}</Box>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ScrollImages;
