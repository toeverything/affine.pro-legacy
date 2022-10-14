import styled from "@emotion/styled";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import DiscordIcon from "./DiscordIcon";

const StyledGithubIcon = styled(GitHubIcon)({
  color: "#096bde",
  fontSize: "36px",
});

const StyledRedditIcon = styled(RedditIcon)({
  color: "#096bde",
  fontSize: "36px",
});

const StyledTwitterIcon = styled(TwitterIcon)({
  color: "#096bde",
  fontSize: "36px",
});

const StyledTelegramIcon = styled(TelegramIcon)({
  color: "#096bde",
  fontSize: "36px",
});

const StyledDiscordIcon = styled(DiscordIcon)({
  color: "#096bde",
  fontSize: "36px",
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
