import { border, borderRadius, fontWeight, letterSpacing, width } from "@mui/system";
import background from "../../assets/background1.png";

const carsousal1Styles = {
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "1rem",
  },
  wrapper: {
    display: "flex",
    flexDirection: { xs: "column",sm: "row", md: "row" }, // Stack on small screens
    justifyContent:"center",
    padding: "0 1rem",
    gap: { xs: "2rem", md: "4.5rem" },
    width: "100%",
    maxWidth: "1400px",
    alignItems: "center",    
  },
  leftImagesContainer: {
    display: "flex",
    flexDirection: { xs: "row", sm: "row" }, // Stack vertically on extra small screens
    gap: "1.5rem",
    width: "100%",    
  },
  largeImage: {
    width: { xs: "19.5rem", sm: "22.875rem", md: "25rem", lg: "37.5rem", xl: "43.75rem" }, // Converted from px to rem
    height: { xs: "15.625rem", sm: "25rem", md: "31.25rem", lg: "33.125rem" }, // Converted from px to rem
    maxWidth: "100%",
    borderRadius: "0.5rem", // Converted 8px to rem
    boxShadow: "none",
  },  
  textContent: {
    width: "100%",
    textAlign: { xs: "center", md: "left" }, // Center text on small screens    
  },
  heading: {
    fontFamily: "Playfair Display",
    fontWeight: "700",
    marginBottom: { xs: "1rem", sm: "1.5rem" },
    color: "#593C2D",
    fontSize: { xs: "1.95rem", sm: "2.2rem", md: "3rem", lg: "6rem" }, // Responsive font sizes
  },
  description: {
    fontFamily: "Lora,Serif",
    color: "#745431",
    marginBottom: { xs: "1rem", sm: "1.5rem", lg: "3rem" },
    textAlign: { xs: "center", md: "justify" },
    fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem", lg: "1.7rem" },
    fontWeight: "400",
    letterSpacing:"-1px",  
    wordSpacing: "2px",  
  },
  button: {
    fontFamily: "Lato",
    color: "#745431",
    padding: "0.8rem 2rem",
    borderRadius: "20rem",
    border: "2px solid #745431",
    fontWeight: "600",
    fontSize: { xs: "14px", sm: "16px", md: "18px" },
    "&:hover": { backgroundColor: "#b8860b" },
  },
};

export default carsousal1Styles;
