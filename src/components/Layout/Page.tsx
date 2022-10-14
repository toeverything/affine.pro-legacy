import styled from "@emotion/styled";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
import { AffineHead } from "../AffineHead";
import { Footer } from "./Footer";
import { HeaderNav } from "./Nav";

interface PageProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
`;

export function Page({ children }: PageProps) {
  const { asPath } = useRouter();

  return (
    <>
      <AffineHead />
      <Container>
        <HeaderNav />
        <main>
          <article key={asPath}>{children}</article>
          <Footer />
        </main>
      </Container>
    </>
  );
}
