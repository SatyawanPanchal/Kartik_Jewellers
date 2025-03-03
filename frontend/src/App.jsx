import React from "react";
import HomePage from "./Pages/HomePage/HomePage.jsx";

import theme from "./theme.js";
import { Box } from "@mui/system";

const App = () => {
  return (
    <Box width={`100%`}>
      <HomePage />
    </Box>
  );
};

export default App;
