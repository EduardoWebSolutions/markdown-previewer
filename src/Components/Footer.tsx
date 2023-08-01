<<<<<<< HEAD
=======
import React from "react";
>>>>>>> c64bb2f10bacc8bbd8af71a8309cdd736a45f367
import { styled } from "styled-components";

const Footer = () => {
  const StyledFooter = styled.footer`
    text-align: center;

    &:a {
      text-decorarion: none;
      color: red;
    }
  `;
  const StyledAnchor = styled.a`
    text-decoration: none;
    text-decoration: underline;

    &:visited {
      color: black;
    }
  `;

  return (
    <StyledFooter>
      Develop by:
      <StyledAnchor
        href="https://github.com/EduardoWebSolutions"
        target="_blank"
      >
        EduardoWebSolutions
      </StyledAnchor>
    </StyledFooter>
  );
};

export default Footer;
