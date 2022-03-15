import React, { useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { LanguagesScreen } from "./src/screens/Languages/LanguagesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { LanguageProvider } from "./contexts/languageContext";

const Stack = createNativeStackNavigator();

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <LanguageProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen name="Languages" options={{ headerShown: false }}>
                {(props) => (
                  <LanguagesScreen
                    selectedLanguage={selectedLanguage}
                    setLanguage={(val) => setSelectedLanguage(val)}
                  />
                )}
              </Stack.Screen>
            </Stack.Navigator>
            {/*<View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>*/}
            {/*  <Text>list</Text>*/}
            {/*</View>*/}
          </NavigationContainer>
        </LanguageProvider>
      </SafeAreaView>
      <ExpoStatusBar q="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
