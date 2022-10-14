import React from "react";
//i18next
import { useTranslation } from "react-i18next";

//definning language switcher
const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
};

{
  /*test content in order to follow tutorial, delete after
    https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b
    */
}

const LanguageSwitcherBtn = () => {
  const { i18n } = useTranslation(["translations", "translations"]);

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => i18n.changeLanguage(lng)}
        >
          {lngs[lng as keyof typeof lngs].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcherBtn;
