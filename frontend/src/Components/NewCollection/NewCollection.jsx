import { Box } from "@mui/system";
import React from "react";
import popularStyle from "../PopularProducts/PopularProductsStyle";
import { Typography } from "@mui/material";
import newCollection from "../../assets/newCollection";

const NewCollection = () => {
  return (
    <Box sx={popularStyle.pContainer}>
      <Box sx={popularStyle.pWrapper}>
        <Typography variant="h2" sx={popularStyle.popularHeading}>
          Our Most Exquisite & Popular Jewelry
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr 1fr", // 1 column on extra small screens (mobile)
              sm: "1fr 1fr", // 2 columns on small screens (tablets)
              md: "1fr 1fr 1fr", // 3 columns on medium screens
              lg: "1fr 1fr 1fr 1fr", // 4 columns on large screens (desktops)
            },
            gap: "2rem",
          }}
        >
          {newCollection.map((product) => {
            return (
              <Box key={product.id} sx={popularStyle.popularProductCard}>
                <Box
                  component="img"
                  src={product.image}
                  sx={popularStyle.pCardImg}
                                    
                />
                <Typography variant="body1" sx={popularStyle.pCardText}>
                  {product.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default NewCollection;
