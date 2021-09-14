import React from "react";
import { TiArrowDownOutline } from "react-icons/ti";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <div>
      <header className="screen3">
        <img src="/poch_logo.svg" alt="logo" className="rotate-scale-up" />
        <a href="#nosotros" className="pochteca-a">
          <IconContext.Provider
            value={{ color: "white", size: "3rem", className: "pochteca-icon" }}
          >
            <div>
              <TiArrowDownOutline />
            </div>
          </IconContext.Provider>
        </a>
      </header>
    </div>
  );
}
