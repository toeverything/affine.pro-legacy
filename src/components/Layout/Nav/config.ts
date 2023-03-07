import { useTranslation } from "react-i18next";

export const useNavLink = () => {
  const leftNavLink = useLeftNavLink();
  // const rightNavLink = useCommunityNavLink().concat(useLiveDemoNavLink());
  const rightNavLink = useLiveDemoNavLink();
  const allNavLink = leftNavLink.concat(rightNavLink);
  return allNavLink;
};
export const useLeftNavLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "/about-us",
      title: t("AboutUs"),
    },
    {
      href: "/blog",
      title: t("Blog"),
    },
    // {
    //   href: "https://docs.affine.pro/",
    //   title: t("Docs"),
    // },
    {
      href: "https://community.affine.pro",
      title: t("Community"),
    },
  ];
};
// export const useCommunityNavLink = () => {
//   const { t } = useTranslation();
//   return [
//     {
//       href: "https://community.affine.pro",
//       title: t("Community"),
//     },
//   ];
// };
export const useLiveDemoNavLink = () => {
  const { t } = useTranslation();
  return [
    {
      href: "https://app.affine.pro/",
      title: t("Try it Online"),
    },
  ];
};
