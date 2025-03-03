import { Typography, Box } from "@mui/material";
import React from "react";
import popularProducts from "../../assets/popularProductsData";
import popularStyle from "./PopularProductsStyle.js";

const PopularProducts = () => {
  return (
    <Box sx={popularStyle.pContainer}>
      <Box sx={popularStyle.pWrapper}>
        <Typography variant="h2" sx={popularStyle.popularHeading}>
          Our Most Exquisite & Popular Jewelry
        </Typography>
        <Box sx={popularStyle.pCardContainer}>
          {popularProducts.map((product) => (
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
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularProducts;
