import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import { VscSymbolArray } from "react-icons/vsc";
import * as Style from "./index.styled";
import Button from "../Button/Button";
import Image from "next/image";
import logo from "@/../public/logo.svg"
import color from "@/../public/color.svg"

import logoText from "@/../public/text.svg"
import { MenuItems } from "./MenuItems";

type HeaderProps = {
  switchTheme: () => void;
};
const Header: React.FC<HeaderProps> = (props) => {
  return (
    <Style.Header id="header">
      <Style.Content>
        <Style.Logo href='/'>
          <Image
            src={logo}
            width={59}
            height={59}
            alt="logo"
          />
          <Image
            src={logoText}
            alt="logoText"
          />
        </Style.Logo>

        <MenuItems/>

        <Style.Buttons>

          <Button
            name={<VscSymbolColor />}
            action={() => props.switchTheme()}
          />
        </Style.Buttons>
      </Style.Content>
    </Style.Header>
  );
};
export default Header;
