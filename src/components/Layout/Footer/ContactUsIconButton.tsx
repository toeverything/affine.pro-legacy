import { Button, styled } from "@mui/material";
import type { ReactNode } from "react";

interface Props {
  title: string;
  href: string;
  icon: ReactNode;
}

export const ContactUsIconButton = ({ title, href, icon }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <StyledButton>
        <div>
          {icon}
          <StyledText>{title}</StyledText>
        </div>
      </StyledButton>
    </a>
  );
};

const StyledButton = styled(Button)({
  padding: "14px",
});

const StyledText = styled("div")({
  color: "#262626",
  fontSize: "14px",
});
