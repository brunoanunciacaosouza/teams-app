import React from "react";
import { StatusBar, ActivityIndicator } from "react-native";

import { ThemeProvider } from "styled-components";
import theme from "@theme/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import Groups from "@screens/Groups";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Groups /> : <ActivityIndicator />}
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      </ThemeProvider>
    </>
  );
}
