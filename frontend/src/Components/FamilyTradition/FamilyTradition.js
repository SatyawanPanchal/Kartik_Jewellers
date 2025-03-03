import { border, textAlign, textTransform } from "@mui/system";

export const FamilyTraditionStyle = {
    FTCtoainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "40px 20px",
    },
    FTWrapper: {
      maxWidth: "1200px",
      width: "100%",
      textAlign: "center",
    },
    FTtitle: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700,
      color: "#593C2D",
      marginBottom: "40px",
      fontSize: { xs: "24px", md: "36px" }, // Responsive font size
    },
    FtCardContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    FTcard: {
      display: "flex",
      flexDirection: { xs: "column", md: "row" }, // Column on small screens, row on large
      alignItems: "center",
      justifyContent: "space-around",
      gap: "20px",
      padding: "20px",
      borderRadius: "12px",      
    },
    fttextside: {
      width: { xs: "100%", md: "45%" },
      textAlign: { xs: "center", md: "left" }, // Center text on small screens
      padding: { xs: "10px", md: "20px" }, // Adjust padding for responsiveness
    },
    ftrImgside: {
      display: "flex",
      justifyContent: "center",
      width: { xs: "100%", md: "45%" },      
    },
    ftImage: {
        width: { xs: "50%", md: "100%" },
      maxWidth: "300px",
      borderRadius: "12px",            
    },
    FTcardTitle: {
      fontSize: { xs: "20px", md: "24px", lg: "28px" },
      fontWeight: 500,
      color: "#593C2D",
      marginBottom: "10px",
      fontFamily: "Playfair Display, serif",
    },
    cardText: {
      fontSize: { xs: "14px", md: "16px" }, // Smaller text on small screens
      color: "#745431",
      fontFamily: "Lora, serif",
      textAlign:"justify"
    },
    ftcardbtn: {
      background: "none",
      color: "#745431",
      padding: "10px 20px",
      fontSize: "16px",
      textTransform: "capitalize",
      borderBottom: "2px solid transparent",
      transition: "border-bottom 0.3s ease",
      "&:hover": {
        borderBottom: "2px solid #745431",
      },
    },
  };
  