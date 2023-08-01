import { styled } from "styled-components";

const Footer = () => {
  const StyledFooter = styled.footer`
    text-align: center;
  `;
  const StyledAnchor = styled.a`
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
