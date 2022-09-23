import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    window.location.replace("/blog");
  }, []);
  return <div>Loading...</div>;
};

export default Home;
