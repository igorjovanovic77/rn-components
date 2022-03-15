import i18n from "i18n-js";
import * as Localization from "expo-localization";

import { tr_map as en } from "./en.tr";
import { tr_map as de } from "./de.tr";
import { tr_map as it } from "./it.tr";
import { storageGetItem } from "../core/storage";

i18n.translations = {
  en: en,
  de: de,
  it: it,
};

const setInitialLanguage = async () => {
  let languagePicked;
  try {
    languagePicked = await storageGetItem("languagePicked");
    console.log("lan " + languagePicked);
    const default_language =
      Localization.locale in i18n.translations ? Localization.locale : "en";
    // Picked or Default on the phone
    i18n.locale = languagePicked ? languagePicked : default_language;
  } catch (error) {
    console.log(error);
  }
};

export const changeLanguage = (lang) => {
  i18n.locale = lang;
};

changeLanguage("it");
setInitialLanguage().then();
export default i18n;
