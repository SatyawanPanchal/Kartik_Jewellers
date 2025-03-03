import { Box } from "@mui/system";
import React from "react";
import Carsoual2Style from "./Carousal2Style";
import { Typography } from "@mui/material";


const Carousal2 = () => {
  return (
    <Box sx={Carsoual2Style.C2Container}>
      <Box sx={Carsoual2Style.C2Wrapper}>
        <Box sx={Carsoual2Style.C2Date}>
          <Box sx={Carsoual2Style.C2Time}>
            <Typography variant="h4" sx={Carsoual2Style.c2TimeText}>14</Typography>
            <Typography variant="h4" sx={Carsoual2Style.c2TimeText}>Days</Typography>
          </Box>
          |
          <Box sx={Carsoual2Style.C2Time}>
            <Typography variant="h4" sx={Carsoual2Style.c2TimeText}>336</Typography>
            <Typography variant="h4" sx={Carsoual2Style.c2TimeText}>Hrs</Typography>
          </Box>
          |
          <Box sx={Carsoual2Style.C2Time}>
            <Typography variant="h4" sx={Carsoual2Style.c2TimeText}>20,160</Typography>
            <Typography variant="h4" sx={Carsoual2Style.c2TimeText}>Min</Typography>
          </Box>
        </Box>
        <Box sx={Carsoual2Style.C2TextContainer}>
          <Typography variant="body1" sx={Carsoual2Style.smallText}>
            Shop Now, Save Big
          </Typography>
          <Typography variant="h1" sx={Carsoual2Style.largeText}>
            Sparkling Deals , Grab Your Shine!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousal2;
