import { styled } from "@mui/material/styles";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";

// Styled AppBar
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none", 
  padding:"0 2.5rem" 
}));

// Styled Toolbar
export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// Styled Button
export const StyledButton = styled(Button)({
  backgroundColor: "#593C2D",
  color: "white",
  "&:hover": {
    backgroundColor: "#4A3125",
  },
  
});

// Styled IconButton
export const StyledIconButton = styled(IconButton)({
  color: "#593C2D",
  fontSize: 30,
});

// Styled Box for layout
export const RightBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});
