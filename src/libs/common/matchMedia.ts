import { useEffect, useState } from "react";

export const useMatchMediaMaxWidth1000 = () => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const i = window.matchMedia("(max-width:1000px)");
    i.addEventListener("change", (event) => {
      setMatches(event.matches);
    });
    setMatches(i.matches);
  }, []);
  return matches;
};
