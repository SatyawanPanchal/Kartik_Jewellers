import background from "../../assets/carousal2Background.png";

const Carousal2Style = {
  C2Container: {
    display: {xs:"none",md:"flex"},
    justifyContent: "center",
    alignItems: "center",
    height: "350px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundImage: `url(${background})`,
    backgroundSize: "contain", // Ensures the full image is visible
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
    padding: "40px 20px",    

    "@media (max-width: 900px)": {
      height: "auto",
      padding: "30px 15px",
      backgroundSize: "contain", // Keep full background visible on small screens
    },
  },
  C2Wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "900px",
    gap: "20px",
    padding: "20px",    
    marginRight: "12rem",

    "@media (max-width: 900px)": {
      flexDirection: "column-reverse",
      alignItems: "flex-start",
      justifyContent: "center",
      textAlign: "center",
      gap: "10px",
      marginRight: "3rem",
    },
  },
  C2Date: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1.5rem",
    padding: "10px 15px",
    borderRadius: "8px",
    fontFamily: "Lora, Serif",

    "@media (max-width: 600px)": {
      flexDirection: "row",
      gap: "0.5rem",
      textAlign: "center",
    },
  },
  C2Time: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  c2TimeText: {
    fontWeight: "bold",
    fontFamily: "Lora, Serif",
    fontSize: "20px",

    "@media (max-width: 900px)": {
      fontSize: "16px",
    },
    "@media (max-width: 600px)": {
      fontSize: "14px",
    },
  },
  C2TextContainer: {
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "450px",
    textAlign: "left",

    "@media (max-width: 900px)": {
      maxWidth: "100%",
      textAlign: "center",
    },
  },
  smallText: {
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontFamily: "Lora, Serif",
    fontSize: "16px",

    "@media (max-width: 900px)": {
      fontSize: "14px",
    },
    "@media (max-width: 600px)": {
      fontSize: "12px",
      color: "#745431",
    },
  },
  largeText: {
    fontWeight: "bold",
    lineHeight: "1.2",
    fontSize: "50px",
    fontFamily: "Playfair Display, Serif",

    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 600px)": {
      fontSize: "20px",
      color: "#745431",
    },
  },
};

export default Carousal2Style;
