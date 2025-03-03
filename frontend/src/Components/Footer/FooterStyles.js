const footerStyles = {
    footerContainer: {
      backgroundColor: "#1c1c1c",
      color: "#fff",
      padding: "40px 0",
    },
    logoContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    logo: {
      width: "120px", // Adjust size as needed
      height: "auto",
      marginBottom: "10px",
    },
    brandName: {
      fontFamily: "Playfair Display, serif",
      fontWeight: "bold",
      fontSize: "20px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "10px",
      borderBottom: "2px solid #CE8B39",
      display: "inline-block",
      paddingBottom: "5px",
    },
    text: {
      fontSize: "14px",
      color: "#ccc",
      marginBottom: "8px",
    },
    link: {
      display: "block",
      color: "#fff",
      textDecoration: "none",
      fontSize: "14px",
      marginBottom: "6px",
      "&:hover": {
        color: "#CE8B39",
      },
    },
    iconButton: {
      color: "#CE8B39",
      "&:hover": {
        color: "#fff",
      },
    },
    copyright: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "14px",
      color: "#ccc",
      borderTop: "1px solid #444",
      paddingTop: "10px",
    },
  };
  
  export default footerStyles;
  