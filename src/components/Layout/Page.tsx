import styled from "@emotion/styled";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { AffineHead } from "../AffineHead";
import { Footer } from "./Footer";
import { HeaderNav } from "./Nav";

interface PageProps {
  showSearchBar?: boolean;
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export function Page(props: PageProps) {
  const { asPath } = useRouter();
  const { children } = props;
  const showSearchBar = props.showSearchBar;

  return (
    <>
      <AffineHead />
      <Container>
        <HeaderNav showSearchBar={showSearchBar} />
        <main>
          <article key={asPath}>{children}</article>
          <Footer />
        </main>
      </Container>
    </>
  );
}
