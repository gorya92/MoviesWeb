import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  backgroundColor: "#191919",
  textColor: "#f9f9f9",
  textColor2: "#000000",
  infoIconColor: "#2D2F34", //
  iconColor: "#FAFAFA", //
  accentColor1: `#3DD2CC`,
  accentColor2: "rgba(249, 249, 249)",
  shadowColor: "rgba(0,0,0,0.2)", // 

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const lightTheme = {
  backgroundColor: "white",
  textColor: "#F8B319",
  infoIconColor: "#black",
  iconColor: "black",
  accentColor1: `#F8B319`,
  accentColor2: "rgba(249, 249, 249)",
  shadowColor: "rgba(0,0,0,0.2)",

  textSizeTitle: "25px",
  textSizeTitle900: "22px",
  textSizeTitle700: "22px",
  textSizeTitle500: "22px",

  textSizeTextL: "22px",
  textSizeTextL900: "20px",
  textSizeTextL700: "20px",
  textSizeTextL500: "20px",

  textSizeTextM: "16px",
  textSizeTextM900: "14px",
  textSizeTextM700: "14px",
  textSizeTextM500: "14px",

  textSizeTextS: "12px",
  textSizeTextS900: "10px",
  textSizeTextS700: "10px",
  textSizeTextS500: "10px",

  borderRadius: "15px",
};

export const GlobalStyle = createGlobalStyle`
  a{
    font-family: 'Roboto';
    text-decoration: none;
    color: ${(props) => props.theme.textColor};
  }
  body{
    margin: 0;
    padding: 0;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: 0.1s;
    color: ${(props) => props.theme.textColor};
  }
`;
