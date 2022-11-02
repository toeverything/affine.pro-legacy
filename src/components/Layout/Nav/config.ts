import { useTranslation } from "react-i18next";

export const useNavLink = () => {
  const leftNavLink = useLeftNavLink();
  const rightNavLink = useFeedbackNavLink().concat(useLiveDemoNavLink());
  const allNavLink = leftNavLink.concat(rightNavLink);
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
export const useFeedbackNavLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "/feedback",
      title: t("Feedback"),
    },
  ];
};
export const useLiveDemoNavLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "https://pathfinder.affine.pro/",
      title: t("Try it Online"),
    },
  ];
};
