import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#B83E1C",
    },

    background: {
      default: "#FCF9F5",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#211B18",
      secondary: "#81756C",
    },

    divider: "#EEE7DF",
  },

  typography: {
    fontFamily: [
      "Inter",
      "Noto Sans Devanagari",
      "sans-serif",
    ].join(","),
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;