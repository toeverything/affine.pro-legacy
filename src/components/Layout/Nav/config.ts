import { useTranslation } from "react-i18next";

export const useNavLink = () => {
  const leftNavLink = useLeftNavLink();
  const feedbackLink = useFeedbackLink();
  const liveDemoLink = useLiveDemoLink();
  const allNavLink = leftNavLink.concat(feedbackLink).concat(liveDemoLink);
  return allNavLink;
};
export const useLeftNavLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "/aboutUs",
      title: t("AboutUs"),
    },
    {
      href: "/blog",
      title: t("Blog"),
    },
    {
      href: "https://docs.affine.pro/",
      title: t("Docs"),
    },
  ];
};
export const useFeedbackLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "/feedback",
      title: t("Feedback"),
    },
  ];
};
export const useLiveDemoLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "https://pathfinder.affine.pro/",
      title: t("Try it Online"),
    },
  ];
};
