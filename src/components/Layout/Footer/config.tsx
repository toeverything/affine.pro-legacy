import {
  DiscordIcon,
  GithubIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "@BlockSuite/icons";
import styled from "@emotion/styled";

const StyledGithubIcon = styled(GithubIcon)({
  color: "#6880ff",
  fontSize: "24px",
});

const StyledRedditIcon = styled(RedditIcon)({
  color: "#6880ff",
  fontSize: "24px",
});

const StyledTwitterIcon = styled(TwitterIcon)({
  color: "#6880ff",
  fontSize: "24px",
});

const StyledTelegramIcon = styled(TelegramIcon)({
  color: "#6880ff",
  fontSize: "24px",
});

const StyledDiscordIcon = styled(DiscordIcon)({
  color: "#6880ff",
  fontSize: "24px",
});

export const contactUsList = [
  {
    title: "Github",
    href: "https://github.com/toeverything/AFFiNE/",
    icon: <StyledGithubIcon />,
  },
  {
    title: "Reddit",
    href: "https://www.reddit.com/r/Affine/",
    icon: <StyledRedditIcon />,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/AffineOfficial",
    icon: <StyledTwitterIcon />,
  },
  {
    title: "Telegram",
    href: "https://t.me/affineworkos",
    icon: <StyledTelegramIcon />,
  },
  {
    title: "Discord",
    href: "https://discord.gg/yz6tGVsf5p",
    icon: <StyledDiscordIcon />,
  },
];
