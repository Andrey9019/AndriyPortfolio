import React from "react";
import { HeaderMobile } from "./HeaderMobile";
import { HeaderDesktop } from "./HeaderDesktop";

export const Header = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  );
};
