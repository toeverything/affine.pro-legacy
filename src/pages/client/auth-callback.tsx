import { useEffect } from "react";

const openAffineClient = () => {
  if (typeof window !== "undefined") {
    window.location.href = "affine://auth-callback?" + window.location.search;
  }
};

// this is a page that is used to redirect the user to affine client
// after authenticated through the Firebase
export default function ClientAuthRedirect() {
  useEffect(() => {
    openAffineClient();
  }, []);
  // this route page is client only
  // TODO: allow the user to retry if the redirect failed?
  return (
    <div>
      Redirecting to your AFFiNE Client App...
      <div>
        <button onClick={openAffineClient}>Click here to try again</button>
      </div>
    </div>
  );
}
