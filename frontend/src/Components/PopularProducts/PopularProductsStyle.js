import { border } from "@mui/system";

const popularStyle = {
    pContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      py: 6,
      px: 4,
      maxWidth: "1200px",
      margin: "0 auto",
    },
    pWrapper: {
      width: "100%",
      textAlign: "center",
    },
    pCardContainer: {
      display: "grid",
      width: "100%",
      gap: "16px",
      gridTemplateColumns: {
        xs: "repeat(2, 1fr)", // Two cards per row for extra-small screens
        sm: "repeat(2, 1fr)", // Two cards per row for small screens
        md: "repeat(3, 1fr)", // Three cards per row for medium screens
        lg: "repeat(4, 1fr)", // Four cards per row for large screens
      },
    },
    popularHeading: {
      fontWeight: "bold",
      color: "#593C2D",
      mb: 4,
      fontFamily: "Playfair Display, serif",
      fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font size
    },
    popularProductCard: {
      width: "100%", // Allows grid to control width dynamically      
      borderRadius: 2,
      overflow: "hidden",
      transition: "transform 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.05)",
      },
    },
    pCardImg: {
      width: "100%",
      height: "150px",
      objectFit: "cover",      
    },
    pCardText: {
      fontWeight: "400",
      textAlign: "center",
      color: "#745431",
      mt: 2,
      fontFamily: "Lora, serif",
      fontSize: { xs: "1rem", sm: "1.2rem" }, // Adjust font size for small screens
    },
  };
  
  export default popularStyle;
  