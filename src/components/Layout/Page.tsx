import { useRouter } from "next/router";
import type { ReactNode } from "react";
import styled from "styled-components";
import { AffineHead } from "../AffineHead";
import { Footer } from "./Footer";
import { HeaderNav } from "./Nav";

interface PageProps {
  children: ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
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
