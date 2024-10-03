import React from "react";

import { ThemeProvider } from "styled-components";

import { StatusBar } from "react-native";

import Groups from "@screens/Groups";

import theme from "@theme/index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Groups />
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      </ThemeProvider>
    </>
  );
}
