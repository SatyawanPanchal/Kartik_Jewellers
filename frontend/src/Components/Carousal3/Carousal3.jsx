import React from "react";
import image from "../../assets/Carousal3Image.png";
import { Box } from "@mui/system";

const Carousal3 = () => {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" ,margin:"2rem 0"}}>
      <Box
        component="img"
        src={image}
        alt="Carousal Image"
        sx={{
          width: "100%", // Ensures it takes full width of the container
          maxWidth: "1200px", // Limits max width for larger screens
          height: "auto", // Maintains aspect ratio
          objectFit: "cover", // Ensures a neat fit
          borderRadius: "8px", // Optional: adds smooth edges
        }}
      />
    </Box>
  );
};

export default Carousal3;
