import { styled } from "styled-components";

const Footer = () => {
  const StyledFooter = styled.footer`
    font-family: inherit;
    text-align: center;
    overflow: none;
  `;
  const StyledAnchor = styled.a`
    text-decoration: underline;
    font-weight: bold;

    &:visited {
      color: black;
    }
  `;

  return (
    <StyledFooter>
      Develop by:{" "}
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
