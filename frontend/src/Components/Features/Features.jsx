import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";

import handbagIcon from "../../assets/handbagIcon.png";
import diamondIcon from "../../assets/diamondIcon.png";
import necklaceIcon from "../../assets/necklaceIcon.png";
import hallmarkIcon from "../../assets/hallmarkIcon.svg";

const features = [
  { icon: necklaceIcon, label: "Exclusive Design" },
  { icon: hallmarkIcon, label: "Hallmark Gold" },
  { icon: diamondIcon, label: "Highest Quality" },
  { icon: handbagIcon, label: "Good Packaging" },
];

const Features = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", py: { xs: 2, sm: 4 } }}>
      <Grid container spacing={{ xs: 2, sm: 4 }} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Stack alignItems="center" spacing={1}>
              <Box
                component="img"
                src={feature.icon}
                alt={feature.label}
                sx={{
                  width: { xs: "40px", sm: "50px" },
                  height: { xs: "40px", sm: "50px" },
                }}
              />
              <Typography
                variant={{ xs: "body1", sm: "h6" }}
                fontWeight={500}
                sx={{ fontFamily: "Lora,Serif", color: "#745431" }}
              >
                {feature.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
