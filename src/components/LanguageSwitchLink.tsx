import languageDetector from "@/libs/i18n/languageDetector";
import type { TooltipProps } from "@mui/material";
import { Button, styled, Tooltip } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import type { CSSProperties, ReactNode } from "react";
import { i18nextConfig } from "../../next-i18next.config";

interface HoverMenuProps {
  title: ReactNode;
  options: Array<{ title: string; value: string }>;
  onSelect: (value: string) => void;
  className?: string;
  style?: CSSProperties;
}

const LanguageSwitchLink = ({ locale, children, ...rest }: any) => {
  const router = useRouter();
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;
  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }
    pName = pName.replace(`[${k}]`, router.query[k] as string);
  });
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }
  return (
    <StyledTooltip
      title={
        <>
          {options.map((option) => {
            return (
              <a
                key={option.title}
                href={option.value}
                target="_blank"
                rel="noreferrer"
              >
                <ListItem
                  title={option.value}
                  onClick={(evt) => {
                    onSelect(option.value);
                    evt.preventDefault();
                  }}
                >
                  {option.title}
                </ListItem>
              </a>
            );
          })}
        </>
      }
    >
      <Link href={href} onClick={() => languageDetector.cache?.(locale)}>
        {locale}
      </Link>
      <StyledTitleButton className={className} style={style} variant="text">
        {title}
      </StyledTitleButton>
    </StyledTooltip>
  );
};

export default LanguageSwitchLink;

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
