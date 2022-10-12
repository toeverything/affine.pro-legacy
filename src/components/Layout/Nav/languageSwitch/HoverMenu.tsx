import type { TooltipProps } from "@mui/material";
import { Button, styled, Tooltip } from "@mui/material";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

interface HoverMenuProps {
  title: ReactNode;
  options: Array<{ name: string; tag: string; originalName: string }>;
  onSelect: (value: string) => void;
  className?: string;
  style?: CSSProperties;
  target?: string;
}

export function HoverMenu({
  title,
  options,
  onSelect,
  className,
  style,
  target,
  ...rest
}: HoverMenuProps) {
  // const router = useRouter();
  // options.map((option) => {
  //   const locale = option.tag;
  //   let href = rest.href || router.asPath;
  //   let pName = router.pathname;
  //   Object.keys(router.query).forEach((k) => {
  //     if (k === "locale") {
  //       pName = pName.replace(`[${k}]`, locale);
  //       return;
  //     }
  //     pName = pName.replace(`[${k}]`, router.query[k] as string);
  //   });
  //   if (locale) {
  //     href = rest.href ? `/${locale}${rest.href}` : pName;
  //   }
  //   return href;
  // }
  // );
  return (
    <StyledTooltip
      title={
        <>
          {options.map((option) => {
            return (
              <Link key={option.name} href={`/${option.tag}`} target="_self">
                <ListItem
                  title={option.tag}
                  onClick={() => {
                    onSelect(option.tag);
                  }}
                >
                  {option.originalName}
                </ListItem>
              </Link>
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
