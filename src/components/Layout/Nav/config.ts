import { useTranslation } from "react-i18next";

export const useNavLink = () => {
  const leftNavLink = useLeftNavLink();
  const rightNavLink = useRightNavLink();
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
export const useRightNavLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "https://feedback.affine.pro/",
      title: t("Feedback"),
    },
    {
      href: "https://livedemo.affine.pro/",
      title: t("Try it Online"),
    },
  ];
};
