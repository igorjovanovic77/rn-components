import * as React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import i18n from "../languages";
import changeLanguage from "../languages/index";
import GermanFlag from "../../assets/flag_germany.svg";
import ItalianFlag from "../../assets/flag_italy.svg";
import EnglishFlag from "../../assets/flag_england.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import { useNavigation } from "@react-navigation/native";

export const LanguageButton = ({ screenName }) => {
  const navigation = useNavigation();

  const getFlag = () => {
    switch (i18n.locale) {
      case "de":
        return <GermanFlag />;
      case "it":
        return <ItalianFlag />;
      default:
        return <EnglishFlag />;
    }
  };
  return (
    <View style={styles.langButtonHolder}>
      <TouchableOpacity
        onPress={() => navigation.navigate(screenName)}
        style={styles.languageButton}
      >
        {getFlag()}
        <ArrowDown width={20} style={{ color: "red" }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  langButtonHolder: {
    height: 45,
    alignSelf: "flex-end",
    right: 20,
  },
  languageButton: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
