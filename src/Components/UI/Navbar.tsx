import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { useSelectedItems } from "../context/SelectedItems";
//i18next
import { useTranslation } from "react-i18next";
import LanguageSwitcherBtn from "./LanguageSwitchBtn";

const Navbar: React.FC = () => {
  const { numberItems } = useSelectedItems();
  const { t } = useTranslation(["translations", "translations"]);
  return (
    <>
      <LanguageSwitcherBtn />
      <div
        style={{
          border: "solid red",
          display: "flex",
          justifyContent: "space-around",
          marginTop: "1rem",
        }}
      >
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li>
            <Link to="/">{t("home", { ns: "translations" })}</Link>
          </li>
          <span>/</span>
          <li>
            <Link to="/cart"> {t("address", { ns: "translations" })} </Link>
          </li>
        </ul>
        <div style={{ display: " flex" }}>
          <Link to="/cart">
            <p>
              {" "}
              <MdShoppingCart />
            </p>
          </Link>

          <div
            className="circle"
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "50%",
              backgroundColor: "tomato",
              color: "white",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {numberItems}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
