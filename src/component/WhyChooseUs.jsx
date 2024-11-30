import { Box, Typography } from "@mui/material";
import contentImage from "../assets/image/Frame 535.png"; // Correct image path

const WhyChooseUs = () => {
  return (
    <Box
      sx={{
        padding: 2,
        background: "linear-gradient(to bottom, black,  #140514,#4D0F4A)", // Top-to-bottom gradient
      }}
    >
      {/* Heading */}
      <Typography
        sx={{mt:5,
          fontWeight: 700,  // Bold text
          fontSize: "60px",  // Font size of 40px
          color: "#D9D9D9 ", // White color to make the text stand out against the dark background
          marginBottom: 5, // Some margin at the bottom for spacing
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
    </Box>
  );
};

export default WhyChooseUs;
