import { useRouter } from "next/router";
import type { ReactNode } from "react";
import styled from "styled-components";
import { AffineHead } from "../AffineHead";
import { AFFiNEHeader } from "./Nav";

interface PageProps {
  children: ReactNode;
}

const Footer = styled.footer``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export function Page({ children }: PageProps) {
  const { asPath } = useRouter();

  return (
    <>
      <AffineHead />

      <Container>
        <AFFiNEHeader />
        <main className="min-w-0">
          <div className="lg:hidden h-16 mb-2" />
          <article className="break-words" key={asPath}>
            {children}
          </article>
          <Footer />
        </main>
      </Container>
    </>
  );
}
