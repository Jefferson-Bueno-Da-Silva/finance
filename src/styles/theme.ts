import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadius: "8px",
  primary: {
    white: "#FFFFFF",
    whiteSmoke: "#F7F7F7",
    black: "#171930",
    darkGreen: "#00930F",
    cleanGreen: "#04D361",
    darkRed: "#B50000",
    gray: "#A8A8B3",
  },
  secondary: {
    separator: "rgba(0, 0, 0, 0.1)",
    white: "#F4F4F4",
    black: "rgba(23, 25, 48, 0.7)",
  },
  commons: {
    error: "#FF5343",
  },
  gradientColors: {
    red: ["#9D0000", "#FF0000"],
    purple: ["#654EA3", "#EAAFC8"],
    gray: ["#313346", "#54566E"],
    black: ["#040404", "#595959"],
    white: ["#FFFFFF", "#C9C9C9"],
    green: ["#00920E", "#52FF00"],
    blue: ["#030088", "#0500FF"],
  },
};
