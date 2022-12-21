import styled from "@emotion/styled";
const Philosophy = () => {
  return (
    <>
      <StyledPhilosophy>
        <StyledTitle>Terms & Conditions</StyledTitle>
        <StyledContent>
          This Agreement (“Agreement”) is a legal agreement between you (either
          an individual or an entity) and TOEVERYTHING PTE. LTD. (“Company”) and
          applies to your use of the [Software] (“Software”) provided by
          Company. By accessing or using the Software, you agree to be bound by
          the terms and conditions of this Agreement. If you do not agree to the
          terms and conditions of this Agreement, do not use the Software.
        </StyledContent>
        <StyledH2>1. License</StyledH2>
        <StyledContent>
          Company grants you a limited, non-exclusive, non-transferable,
          revocable license to use the Software for your personal or internal
          business use, subject to the terms and conditions of this Agreement.
          You are not allowed to rent, lease, lend, sell, redistribute, or
          sublicense the Software or any part of it.
        </StyledContent>
        <StyledH2>2. Restrictions</StyledH2>
        <StyledContent>
          You shall not, and shall not allow any third party to:
        </StyledContent>
        <StyledList>
          <li>
            modify, adapt, translate, or create derivative works of the Software
          </li>
          <li>
            reverse engineer, decompile, disassemble, or otherwise attempt to
            derive the source code of the Software
          </li>
          <li>
            remove, alter, or obscure any copyright, trademark, or other
            proprietary rights notices from the Software
          </li>
          <li>
            use the Software in any manner that violates any applicable laws or
            regulations
          </li>
        </StyledList>
        <StyledH2>3. Ownership</StyledH2>
        <StyledContent>
          The Software and all intellectual property rights in and to the
          Software, including but not limited to patents, copyrights,
          trademarks, and trade secrets, are owned by Company and its licensors.
          This Agreement does not grant you any ownership rights in the
          Software.
        </StyledContent>
        <StyledH2>4. Support and Maintenance</StyledH2>
        <StyledContent>
          Company may provide support and maintenance for the Software at its
          sole discretion. The terms and conditions of such support and
          maintenance will be separately agreed upon by the parties.
        </StyledContent>
        <StyledH2>5. Termination</StyledH2>
        <StyledContent>
          This Agreement is effective until terminated. Company may terminate
          this Agreement at any time without notice if you breach any term or
          condition of this Agreement. Upon termination, you must destroy all
          copies of the Software.
        </StyledContent>
        <StyledH2>6. Disclaimer of Warranties</StyledH2>
        <StyledContent>
          The Software is provided “as is” and without warranty of any kind.
          Company and its licensors hereby disclaim all warranties, express or
          implied, including but not limited to the implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. Company does not warrant that the Software will meet
          your requirements or that the operation of the Software will be
          uninterrupted or error-free.
        </StyledContent>
        <StyledH2>7. Limitation of Liability</StyledH2>
        <StyledContent>
          To the maximum extent permitted by law, Company and its licensors
          shall not be liable for any damages whatsoever (including, without
          limitation, damages for loss of business profits, business
          interruption, loss of business information, or any other pecuniary
          loss) arising out of the use or inability to use the Software, even if
          Company has been advised of the possibility of such damages.
        </StyledContent>
        <StyledH2>8. Indemnification</StyledH2>
        <StyledContent>
          You shall indemnify and hold Company and its affiliates, officers,
          agents, and employees harmless from any claim or demand, including
          reasonable attorneys&apos; fees, made by any third party due to or
          arising out of your use of the Software, your violation of this
          Agreement, or your violation of any rights of another.
        </StyledContent>
        <StyledH2>9. Governing Law</StyledH2>
        <StyledContent>
          This Agreement shall be governed by and construed in accordance with
          the laws of the Republic of Singapore, without giving effect to any
          principles of conflicts of law.
        </StyledContent>
        <StyledH2>10. Entire Agreement</StyledH2>
        <StyledContent>
          This Agreement constitutes the entire agreement between you and
          Company and supersedes all prior or contemporaneous communications and
          proposals, whether oral or written.
        </StyledContent>
        <StyledH2>11. Waiver</StyledH2>
        <StyledContent>
          The failure of either party to exercise any right provided for herein
          shall not be deemed a waiver of any right hereunder.
        </StyledContent>
        <StyledH2>12. Severability</StyledH2>
        <StyledContent>
          If any provision of this Agreement is found to be invalid or
          unenforceable, the remaining provisions shall remain in full force and
          effect.
        </StyledContent>
        <StyledH2>13. No Assignment</StyledH2>
        <StyledContent>
          You may not assign or transfer this Agreement or any rights or
          obligations hereunder without the prior written consent of the
          Company.
        </StyledContent>
        <StyledH2>14. Force Majeure</StyledH2>
        <StyledContent>
          Company shall not be liable for any delay or failure to perform
          resulting from causes outside its reasonable control, including, but
          not limited to, acts of God, war, terrorism, strikes, shortages of
          labor or materials, and governmental actions.
        </StyledContent>
        <StyledH2>15. Relationship of the Parties</StyledH2>
        <StyledContent>
          This Agreement does not create a partnership, joint venture, or agency
          relationship between you and Company.
        </StyledContent>
        <StyledH2>16. No Third-Party Beneficiaries</StyledH2>
        <StyledContent>
          This Agreement is for the benefit of the parties hereto and their
          successors and assigns, and is not for the benefit of, nor may any
          provision hereof be enforced by, any other person.
        </StyledContent>
        <StyledH2>17. Headings</StyledH2>
        <StyledContent>
          The headings in this Agreement are for convenience only and shall not
          affect the interpretation of this Agreement.
        </StyledContent>
        <StyledH2>18. Counterparts</StyledH2>
        <StyledContent>
          This Agreement may be executed in counterparts, each of which shall be
          deemed an original, but all of which together shall constitute one and
          the same instrument.
        </StyledContent>
        <StyledH2>19. Survival</StyledH2>
        <StyledContent>
          The provisions of this Agreement that by their nature should survive
          termination shall survive termination, including, but not limited to,
          provisions regarding ownership, warranty disclaimers, indemnification,
          and limitations of liability.
        </StyledContent>
      </StyledPhilosophy>
    </>
  );
};

export default Philosophy;
const StyledPhilosophy = styled.div({
  marginTop: "24px",
});
const StyledTitle = styled.div({
  fontSize: "24px",
  fontWeight: "600",
  borderBottom: "1px solid #d8dee4",
  marginBottom: "16px",
  paddingBottom: "8px",
});
const StyledH2 = styled.div({
  fontSize: "18px",
  fontWeight: "600",
  borderBottom: "1px solid #d8dee4",
  marginTop: "60px",
  marginBottom: "16px",
  paddingBottom: "8px",
});
const StyledContent = styled.div({
  marginBottom: "16px",
  lineHeight: "1.5",
  a: {
    color: "#5085F6CC",
  },
});
const StyledList = styled.ul({
  marginBottom: "16px",
  lineHeight: "1.5",
  li: {
    lineHeight: "1.8",
  },
});
