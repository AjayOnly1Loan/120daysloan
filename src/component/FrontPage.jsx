import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import backgroundImage from "../assets/image/frontend.webp";

const FrontPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: { xs: "50vh", md: "100vh" }, // Responsive height for small and large screens
        padding: "30px",
        background: "linear-gradient(to bottom, black, #4D0F4A, #140514)", // Top-to-bottom gradient
        border: "none",
        height: {
          xs: "50vh", // Smaller height for extra small screens
          sm: "80vh", // Moderate height for small screens
          md: "100vh", // Full height for medium to large screens
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Prevents content overflow
      }}
    >
      {/* Background Image Section */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: {
            xs: "100%", // Image adjusts fully to container on small screens
            md: "100%", // Image maintains full height on larger screens
          },
          borderRadius: "20px", // Optional: Add inner container rounding
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        
      </Box>
    </Box>
  );
};

export default FrontPage;
