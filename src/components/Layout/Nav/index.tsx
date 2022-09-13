import NextLink from "next/link";
import styled from "styled-components";
import AFFiNETextLogo from "./affine-text-logo.png";

const Button = styled.button``;
const ButtonLink = ({
  href,
  className,
  children,
  target,
  label,
  ...props
}: JSX.IntrinsicElements["a"] & { label?: string }) => {
  return (
    <Button>
      <NextLink href={href as string}>
        <a className={className} {...props} aria-label={label} target={target}>
          {children}
        </a>
      </NextLink>
    </Button>
  );
};

export const AFFiNEHeader = () => {
  return (
    <Container>
      <NextLink href={"/"}>
        <StyledImage src={AFFiNETextLogo.src} alt="affine" />
      </NextLink>

      <ButtonLink
        color="neutral"
        href={"/about"}
        style={{
          fontSize: "16px",
        }}
      >
        AboutUs
      </ButtonLink>

      <Button
        onClick={() => window.open("https://blog.affine.pro")}
        style={{
          fontSize: "16px",
        }}
      >
        Blog
      </Button>
      <Button
        onClick={() => window.open("https://docs.affine.pro/")}
        color="neutral"
        style={{
          fontSize: "16px",
        }}
      >
        Docs
      </Button>
      <Button
        onClick={() => window.open("https://feedback.affine.pro/")}
        color="neutral"
        style={{
          fontSize: "16px",
        }}
      >
        Feedback
      </Button>

      <Button
        onClick={() => window.open("https://livedemo.affine.pro/")}
        color="neutral"
        style={{
          fontSize: "16px",
        }}
      >
        Try it Online
      </Button>
    </Container>
  );
};

const Container = styled.div({
  position: "fixed",
  top: 0,
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  paddingTop: "1em",
  paddingBottom: "1em",
  backgroundColor: "#fff",
  zIndex: 1500,
  maxWidth: "1440px",
  margin: "auto",
  marginTop: "0 !important",
});

const StyledImage = styled.img({
  height: "24px",
  marginRight: "16px",
  cursor: "pointer",
});
