import React from "react";
import { Typography, Box, Container } from "@mui/material";
import contentImage from "../assets/image/Frame 535 (1).png"; // Ensure the path to the image is correct

const WhyChooseUs = () => {
  const heading = "Why Choose Us"; // Define the heading

  return (
    <Box sx={{        background: "linear-gradient(to bottom,#140514, black, #4D0F4A, #140514)",paddingTop:{sx:'20px',ms:'60px'}
    }}>
      {/* Heading */}
      <Typography
  sx={{
    mt: { xs: 0, md: 0 },
    fontWeight: 700, // Bold text
    fontSize: { xs: "40px", md: "60px" }, // Responsive font size
    color: "#D9D9D9", // Text color
    marginBottom: { xs: 1, md: 5 }, // Responsive margin
    textAlign: "center", // Center the text horizontally
  }}
>
  {heading}
</Typography>


      {/* Image */}
      <Box
        component="img"
        src={contentImage}
        alt={heading}
        sx={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: 6, // Space below the image
        }}
      />
    </Box>
  );
};

export default WhyChooseUs;
