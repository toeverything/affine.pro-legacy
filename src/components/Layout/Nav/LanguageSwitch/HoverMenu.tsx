import type { TooltipProps } from "@mui/material";
import { Button, styled, Tooltip } from "@mui/material";
import type { CSSProperties, ReactNode } from "react";

interface HoverMenuProps {
  title: ReactNode;
  options: Array<{ name: string; tag: string; originalName: string }>;
  onSelect: (value: string) => void;
  className?: string;
  style?: CSSProperties;
}

export function HoverMenu({
  title,
  options,
  onSelect,
  className,
  style,
}: HoverMenuProps) {
  return (
    <StyledTooltip
      title={
        <>
          {options.map((option) => {
            return (
              <a
                key={option.name}
                href={option.name}
                target="_self"
                rel="noreferrer"
              >
                <ListItem
                  title={option.name}
                  onClick={(evt: any) => {
                    onSelect(option.tag);
                    evt.preventDefault();
                  }}
                >
                  {option.originalName}
                </ListItem>
              </a>
            );
          })}
        </>
      }
    >
      <StyledTitleButton className={className} style={style} variant="text">
        {title}
      </StyledTitleButton>
    </StyledTooltip>
  );
}

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  "& .MuiTooltip-tooltip": {
    backgroundColor: "white",
    boxShadow: theme.shadows[4],
    color: "#272930",
    zIndex: "1500",
  },
}));

const ListItem = styled(Button)({
  display: "block",
  width: "100%",
  color: "#262626",
  fontWeight: "400",
});

const StyledTitleButton = styled(Button)({
  color: "#262626",
});
