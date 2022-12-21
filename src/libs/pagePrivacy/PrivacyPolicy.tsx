import styled from "@emotion/styled";
const Philosophy = () => {
  return (
    <>
      <StyledPhilosophy>
        <StyledTitle>Privacy Policy</StyledTitle>
        <StyledContent>
          TOEVERYTHING PTE. LTD. (also referred to as &quot;Affine&quot;,
          &quot;we&quot;, &quot;our&quot; and &quot;us&quot;) is committed to
          protecting the privacy of our users. This Privacy Policy explains how
          we collect, use, and share information about you when you use our
          websites, mobile applications, and other online services
          (collectively, the &quot;Services&quot;).
        </StyledContent>
        <StyledContent>
          By using the Services, you agree to the collection, use, and sharing
          of your information as described in this Privacy Policy. If you do not
          agree with our policies and practices, do not use the Services.
        </StyledContent>
        <StyledH2>Information We Collect</StyledH2>
        <StyledContent>
          We collect information about you when you use the Services, including
          the following types of information:
        </StyledContent>
        <StyledList>
          <li>
            Personal information: This is information that identifies you as an
            individual, such as your name, email address, and phone number.
          </li>
          <li>
            Device information: This is information about the device you use to
            access the Services, such as the type of device, the operating
            system, and the device&apos;s unique device identifier.
          </li>
          <li>
            Usage information: This is information about how you use the
            Services, such as the pages you visit and the actions you take
            within the Services.
          </li>
          <li>
            Location information: This is information about your location, such
            as your IP address or GPS data.
          </li>
        </StyledList>
        <StyledContent>
          We may also collect information about you from third parties, such as
          social media platforms or other companies that provide us with data.
        </StyledContent>
        <StyledH2>How We Use Your Information</StyledH2>
        <StyledContent>
          We use the information we collect about you to provide, maintain, and
          improve the Services, and to personalize your experience. This
          includes using the information to:
        </StyledContent>
        <StyledList>
          <li>Provide the Services to you</li>
          <li>Communicate with you about the Services</li>
          <li>Analyze and understand how the Services are used</li>
          <li>
            Personalize the content and advertising you see within the Services
          </li>
        </StyledList>
        <StyledContent>
          We may also use your information for research and analytics purposes,
          to enforce our policies, or as required by law.
        </StyledContent>
        <StyledH2>Sharing Your Information</StyledH2>
        <StyledContent>
          We may share your information with third parties for the following
          purposes:
        </StyledContent>
        <StyledList>
          <li>To provide the Services to you</li>
          <li>To comply with legal requirements</li>
          <li>
            To protect the rights, property, or safety of TOEVERYTHING PTE.
            LTD., our users, or others
          </li>
        </StyledList>
        <StyledContent>
          We may also share your information with third parties for business
          purposes, such as to enable them to provide services on our behalf or
          to assist us in analyzing how the Services are used.
        </StyledContent>
        <StyledH2>Your Choices</StyledH2>
        <StyledContent>
          You have the following choices regarding the information we collect
          and use:
        </StyledContent>
        <StyledList>
          <li>
            You can opt out of receiving marketing communications from us by
            following the unsubscribe instructions in the communications we send
            you.
          </li>
          <li>
            You can adjust your browser settings to disable cookies, or you can
            set your browser to alert you when cookies are being sent.
          </li>
          <li>
            You can exercise your right to access, rectify, erase, restrict, or
            object to the processing of your personal data, or to request data
            portability, by contacting us using the contact information provided
            below.
          </li>
        </StyledList>
        <StyledContent>
          Please note that if you opt out of certain types of data collection or
          use, you may not be able to use all of the features of the Services.
        </StyledContent>
        <StyledH2>Data Retention</StyledH2>
        <StyledContent>
          We retain your personal data for as long as necessary to provide the
          Services to you, to comply with legal requirements, and to protect the
          rights, property, or the safety of us, our users, or others.
        </StyledContent>
        <StyledH2>Changes to This Privacy Policy</StyledH2>
        <StyledContent>
          We may update this Privacy Policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons. We encourage you to review the Privacy Policy whenever you
          access the Services to stay informed about our data collection and use
          practices and your choices. We will post any changes on this page and
          we encourage you to review the Privacy Policy whenever you access the
          Services to stay informed about our data collection and use practices
          and your choices.
        </StyledContent>
        <StyledH2>Contact Us</StyledH2>
        <StyledContent>
          If you have any questions about this Privacy Policy, please contact
          us:&nbsp;
          <a href="mailto:contact@toeverything.info">
            contact@toeverything.info
          </a>
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
