import { useEffect, useState } from "react";

export const useMatchMediaMaxWidth800 = () => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const i = window.matchMedia("(max-width:800px)");
    i.addEventListener("change", (event) => {
      setMatches(event.matches);
    });
    setMatches(i.matches);
  }, []);
  return matches;
};
