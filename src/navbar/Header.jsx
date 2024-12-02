import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, Button ,Box} from '@mui/material';

import logo from '../assets/image/120 Days Logo     Hindi.webp'; // Adjust the path based on your structure
import sidebarBg from '../assets/image/Vector.png'; // Your SVG background

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="absolute" // Full cover positioning
        sx={{
          backgroundColor: 'transparent', // Semi-transparent overlay effect
          boxShadow: 'none',
          zIndex: 1400, // Ensure it appears above all other components
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: '64px',
            margin: '40px',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }} onClick={scrollToTop}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                width: { xs: '100px', md: '15%' }, // Responsive sizing
                height: 'auto', // Maintain aspect ratio
              }}
            />
          </Link>

          {/* Sticky Apply Now button on the right */}
          <Button
  component={Link}
  to="/apply-now"
  variant="contained"
  sx={{
    position: 'fixed',
    top: { xs: '60px', sm: '60px', md: '70px', lg: '70px' }, // Increased and responsive top margin
    right: { xs: '35px', sm: '35px', md: '40px', lg: '50px' }, // Increased and responsive right margin
    fontWeight: 100,
    fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '18px' }, // Adjusted font size
    borderRadius: '50px', // Rounded button
    padding: { xs: '5px 12px', sm: '7px 15px', md: '10px 20px' }, // Responsive padding
    backgroundColor: '#4D0F4A',
    color: 'white',
    whiteSpace: 'nowrap', // Prevent text wrapping
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    zIndex: 1000, // Keeps the button above other elements
    '&:hover': {
      backgroundColor: 'gray',
    },
  }}
>
  Apply Now
</Button>



        </Toolbar>
      </AppBar>

      {/* Right Sticky Sidebar with Toggle Button */}
      <Drawer
  anchor="right"
  variant="persistent"
  open={true} // Keep the drawer open at all times
  sx={{
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: {
      width: 100, // Fixed width
      height: '250px',
      position: 'fixed',
      top: '200px',
      bottom: '200px',
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0)',
      overflowX: 'hidden',
      paddingTop: '20px',
      paddingBottom: '16px',
      backgroundImage: `url(${sidebarBg})`,
      backgroundSize: 'cover',
      border: 'none',
    },
  }}
>
  {/* Sidebar Content */}
  <List
    sx={{
      position: 'relative',
      zIndex: 1,
      paddingY: 3, // Remove padding around the List
    }}
  >
    <ListItem
      button
      component={Link}
      to="/"
      onClick={scrollToTop}
      sx={{ paddingY: 0.5,color:'black' }} // Adjust vertical padding
    >
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/about-us"
      onClick={scrollToTop}
      sx={{ paddingY: 0.5,color:'black' }} // Adjust vertical padding
    >
      <ListItemText primary="About" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/repay-now"
      onClick={scrollToTop}
      sx={{ paddingY: 0.5,color:'black' }} // Adjust vertical padding
    >
      <ListItemText primary="Repay" />
    </ListItem>
    <ListItem
      button
      component={Link}
      to="/contact-us"
      onClick={scrollToTop}
      sx={{ paddingY: 0.5,color:'black' }} // Adjust vertical padding
    >
      <ListItemText primary="Contact" />
    </ListItem>
  </List>
</Drawer>
    </>
  );
};

export default Header;
