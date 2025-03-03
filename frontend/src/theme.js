import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#593C2D", // Font color
    },
    background: {
      default: "#F7F1EA", // Background color
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: (theme) => ({
    fontFamily: "Playfair Display, serif",
    h1: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: 1.2,            
      fontFamily: "Playfair Display, serif",
      [`@media (max-width:600px)`]: {
        fontSize: "32px",
      },
    },
    h2: {
      fontSize: "32px",
      fontWeight: 700,
      lineHeight: 1.3,            
      [`@media (min-width:960px)`]: {
        fontSize: "64px",
        lineHeight: "78px",
      },
    },
    h3: {
      fontSize: "28px",
      fontWeight: 600,
      lineHeight: 1.4,            
      [`@media (min-width:960px)`]: {
        fontSize: "48px",
        lineHeight: "58px",
      },
    },
    h4: {
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.4,            
      [`@media (min-width:960px)`]: {
        fontSize: "36px",
        lineHeight: "44px",
      },
    },
    h5: {
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: 1.5,            
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      lineHeight: 1.5,            
    },
    body1: {
      fontSize: "16px",
      fontWeight: 400,            
    },
    caption: {
      fontSize: "14px",
      fontWeight: 400,            
    },
    overline: {
      fontSize: "12px",
      fontWeight: 300,            
    },
    button: {
      fontSize: "16px",
      fontWeight: 600,
      lineHeight: 1.4,            
    },
    input: {
      fontSize: "16px",
      fontWeight: 400,            
    },
  }),
});

export default theme;
