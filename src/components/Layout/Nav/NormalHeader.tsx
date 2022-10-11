import { LinkText } from "../LinkText";
import { navLinks } from "./config";
import { LanguageMenu } from "./LanguageMenu";

export const NormalHeader = () => {
  return (
    <>
      {navLinks.map((nav) => {
        return <LinkText key={nav.title} href={nav.href} title={nav.title} />;
      })}
      <LanguageMenu />
    </>
  );
};
