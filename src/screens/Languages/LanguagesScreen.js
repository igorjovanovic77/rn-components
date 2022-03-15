import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text } from "react-native";
import { getStyles } from "./Styles";
import ArrowLeft from "../../../assets/arrow-left.svg";
import GermanFlag from "../../../assets/flag_germany.svg";
import ItalianFlag from "../../../assets/flag_italy.svg";
import EnglishFlag from "../../../assets/flag_england.svg";
import i18n from "../../languages";

export const LanguagesScreen = ({ setLanguage, selectedLanguage }) => {
  const navigation = useNavigation();
  console.log(i18n);

  // useEffect(() => {
  //   if (selectedLanguage) {
  //     navigation.goBack();
  //   }
  // }, [navigation, selectedLanguage]);

  return (
    <View style={getStyles().container}>
      <View style={getStyles().headerView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ alignSelf: "flex-start" }}
        >
          <ArrowLeft width={32} style={{ color: "black" }} />
        </TouchableOpacity>
        <Text fontSize={20} style={[getStyles().headerText, { color: "blue" }]}>
          {i18n.t("language")}
        </Text>
      </View>
      <View style={getStyles().raw_more_main}>
        <TouchableOpacity onPress={() => setLanguage("de")}>
          <View style={getStyles().raw_more_main_option}>
            <View style={getStyles().raw_more_main_option_left}>
              <View style={getStyles().raw_more_main_option_icon}>
                <GermanFlag />
              </View>
              <Text
                style={{ color: selectedLanguage === "de" ? "green" : "brown" }}
                fontSize={16}
              >
                {i18n.t("german")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage("it")}>
          <View style={getStyles().raw_more_main_option}>
            <View style={getStyles().raw_more_main_option_left}>
              <View style={getStyles().raw_more_main_option_icon}>
                <ItalianFlag />
              </View>
              <Text
                style={{ color: selectedLanguage === "it" ? "green" : "brown" }}
                fontSize={16}
              >
                {i18n.t("italian")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage("en")}>
          <View style={getStyles().raw_more_main_option_no_border_bottom}>
            <View style={getStyles().raw_more_main_option_left}>
              <View style={getStyles().raw_more_main_option_icon}>
                <EnglishFlag />
              </View>
              <Text
                style={{ color: selectedLanguage === "en" ? "green" : "brown" }}
                fontSize={16}
              >
                {i18n.t("english")}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
