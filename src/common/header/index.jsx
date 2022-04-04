import React from "react";
import NavBar from "../navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/fontawesome-free-solid";
import { HeaderWrper, Icons } from "./ui";

const Header = () => {
  return (
    <HeaderWrper>
      <NavBar />
      <Icons>
        <FontAwesomeIcon
          title={"Profile"}
          size="lg"
          fade
          icon={faUserCircle}
          // bounce
          // beat
          color={"white"}
          // pulse
          // spin
          // flip={"vertical"}
        />

        {/* please refer this link for more Icons -https://www.w3schools.com/icons/fontawesome_icons_brand.asp */}

        <FontAwesomeIcon icon="fa-brands fa-facebook-f" color={"white"} />
        <FontAwesomeIcon icon="fa-brands fa-twitter" color={"white"} beat />
      </Icons>
    </HeaderWrper>
  );
};

export default Header;
