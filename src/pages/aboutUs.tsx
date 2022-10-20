import styled from "@emotion/styled";
import ExportedImage from "../components/Image";
import { Page } from "../components/Layout/Page";
import ContactUs from "../libs/pageAboutUs/ContactUs";
import keepUpdate from "../libs/pageAboutUs/keepUpdate.png";
import Philosophy from "../libs/pageAboutUs/Philosophy";
import TeamMember from "../libs/pageAboutUs/TeamMember";
import Title from "../libs/pageAboutUs/Title";
const aboutUs = () => {
  return (
    <Page>
      <Title />
      <StyledMain>
        <ContactUs />
        <TeamMember />
        <Philosophy />
        <div>
          <ExportedImage
            src={keepUpdate}
            alt="AFFiNE keep update"
            onClick={() =>
              window.open("https://github.com/toeverything/AFFiNE")
            }
            width="720px"
            height="400px"
            useWebp={!!process.env.nextImageExportOptimizer_storePicturesInWEBP}
          />
        </div>
      </StyledMain>
    </Page>
  );
};

export default aboutUs;

const StyledMain = styled.div({
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  margin: "16px auto",
  maxWidth: "720px",
  paddingLeft: "24px",
  paddingRight: "24px",
});
