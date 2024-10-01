import React from "react";

import { StatusBar } from "react-native";

import Groups from "./src/Groups";

export default function App() {
  return (
    <>
      <Groups />
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    </>
  );
}
