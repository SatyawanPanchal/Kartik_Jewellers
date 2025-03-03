import React from "react";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Carsousal1 from "../../Components/Carousal1/Carsousal1.jsx";
import { Box } from "@mui/material"; // Use MUI Box from @mui/material
import background from "../../assets/background1.png";
import Features from "../../Components/Features/Features.jsx";
import PopularProducts from "../../Components/PopularProducts/PopularProducts.jsx";
import Carousal2 from "../../Components/Carousal2/Carousal2.jsx";
import NewCollection from "../../Components/NewCollection/NewCollection.jsx";
import FamilyTradition from "../../Components/FamilyTradition/FamilyTradition.jsx";
import Carousal3 from "../../Components/Carousal3/Carousal3.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: {xs:"72vh",md:"80vh"}, // Ensure it covers full height
          width: "100%", 
          marginBottom:"1.5rem"         
        }}
      >
        <Navbar />
        <Carsousal1 />
      </Box>
      <Features/>
      <PopularProducts/>
      <Carousal2/>
      <NewCollection/>
      <FamilyTradition/>
      <Carousal3/>
      <Footer/>
    </>
  );
};

export default HomePage;
