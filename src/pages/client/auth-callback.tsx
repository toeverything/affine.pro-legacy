import { useEffect } from "react";

const openAffineClient = () => {
  if (typeof window !== "undefined") {
    // do we need to concern if it is secure?
    window.location.href = "affine://auth-callback?" + window.location.search;
  }
};

// this is a page that is used to redirect the user to affine client
// after authenticated through the Firebase
// this route page is client only
export default function ClientAuthRedirect() {
  useEffect(() => {
    openAffineClient();
  }, []);
  return (
    <div>
      Redirecting to your AFFiNE Client App...
      <div>
        <button onClick={openAffineClient}>Click here to try again</button>
      </div>
    </div>
  );
}
