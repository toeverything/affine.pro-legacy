import styles from "@/libs/pagesHome/HomeLayout.module.css";
import type { NextPage } from "next";
import Image from "next/image";
import CollaborationImage from "../../public/content/homePage/collaboration.png";
import LogoImage from "../../public/content/homePage/logo.png";
import PageImage from "../../public/content/homePage/page.png";
import HomepageTabs from "../components/Layout/HomepageTabs";
import { Page } from "../components/Layout/Page";

const Home: NextPage = () => {
  return (
    <Page>
      <div className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerPart1}>
            <p>Open Source,</p>
            <p>Privacy First</p>
          </div>
          <div className={styles.headerPart2}>
            <p>Notion Alternative</p>
          </div>

          <h3 className={styles.content}>
            Affine is the next-generation collaborative knowledge base for
            professionals.
          </h3>
        </div>

        <div className={styles.button}>
          <button className={styles.github}>Check GitHub</button>
          <button className={styles.liveDemo}>Try it Online</button>
        </div>
        <div className={styles.image}>
          <Image src={PageImage} alt="AFFiNE main ui" />
        </div>

        <div className={styles.textBlock}>
          <h1>
            It&apos;s not just a collection of Docs, whiteboard, and tables.
          </h1>
          <p>Transform any building block as you like.</p>
          <p>
            Say goodbye to redundancy. Store your data once, and keep your data
            as you like it.
          </p>
        </div>
        <HomepageTabs />
        <div className={styles.textBlock}>
          <h2>Privacy-first, and collaborative. No compromises whatsoever.</h2>
          <p>
            We don&apos;t like being locked-in, and neither should you. Privacy
            is at the foundation of everything we do, but it should not limit us
            that&apos;s why there are no compromises.
          </p>
          <p>
            Your data is yours;it is always locally stored and secured -
            available to you always. While still being able to enjoy
            collaboration features such as real-time editing and sharing with
            others, without any cloud setup.
          </p>
        </div>
        <div className={styles.image}>
          <Image
            src={CollaborationImage}
            alt="AFFiNE Privacy-first, and collaborative"
          />
        </div>
        <div className={styles.logo}>
          <Image src={LogoImage} alt="AFFiNE Logo" />
        </div>
        <div className={styles.footer}>
          <p>Build for an open and semantic future</p>
          <div className={styles.button}>
            <h2>Keep Updated on</h2>
            <button className={styles.github2}>GitHub</button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
