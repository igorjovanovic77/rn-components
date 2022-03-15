import * as React from "react";
import { View } from "react-native";
import { LanguageButton } from "../components/LanguageButton";

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 4, backgroundColor: "#F0F8FD" }}>
        <LanguageButton screenName={"Languages"} />
      </View>
    </View>
  );
};
