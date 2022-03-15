import React from "react";
import { StyleSheet } from "react-native";

export const getStyles = () => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(255, 255, 255)",
      padding: 16,
    },

    headerView: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 9,
    },
    headerText: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      paddingRight: 25,
    },

    raw_more_main: {
      marginTop: 50,
    },

    raw_more_main_option: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomColor: "rgba(255, 255, 255, 0.3)",
      borderBottomWidth: 1,
      paddingBottom: 12,
      marginTop: 12,
      marginBottom: 18,
    },

    raw_more_main_option_no_border_bottom: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 12,
      marginTop: 12,
      marginBottom: 18,
    },

    raw_more_main_option_icon: {
      marginRight: 20,
    },

    raw_more_main_option_left: {
      display: "flex",
      flexDirection: "row",
    },
  });
};
