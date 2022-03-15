import React, { createContext, useState } from "react";

const LanguageContext = createContext("default");

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("de");
  return (
    <LanguageContext.Provider value={{ language }}>
      {children}
    </LanguageContext.Provider>
  );
};

const withLanguage = (Child) => (props) =>
  (
    <LanguageContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </LanguageContext.Consumer>
  );

export { LanguageProvider, withLanguage };
