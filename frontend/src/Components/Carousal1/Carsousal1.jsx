import { Box } from "@mui/system";
import React from "react";
import image4 from "../../assets/image4.png";
import { Button, Typography } from "@mui/material";
import carsousal1Styles from "./CarousalStyle.js";

const Carsousal1 = () => {
  return (
    <Box sx={carsousal1Styles.container}>
      <Box sx={carsousal1Styles.wrapper}>       
        <Box sx={carsousal1Styles.leftImagesContainer}>        
            <Box component="img" src={image4} sx={carsousal1Styles.largeImage} />          
        </Box>

        {/* Text Content */}
        <Box sx={carsousal1Styles.textContent}>
          <Typography variant="h1" sx={carsousal1Styles.heading}>
            A Legacy of Gold & Grace
          </Typography>
          <Typography variant="h4" sx={carsousal1Styles.description}>
          Where Elegance Meets Eternity – Exquisite Jewelry for a Lifetime of Brilliance.
          </Typography>
          <Button variant="outlined" sx={carsousal1Styles.button}>
            Know More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Carsousal1;
