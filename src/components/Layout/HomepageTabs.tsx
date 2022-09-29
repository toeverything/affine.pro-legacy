import styles from "@/libs/pagesHome/HomeLayout.module.css";
import Image from "next/image";
import { useState } from "react";
import ShapeImage from "../../../public/content/homePage/shape.png";
import TaskImage from "../../../public/content/homePage/task.png";

const HomepageTabs = () => {
  const [tab, selectTab] = useState(0);
  return (
    <div>
      <div className={styles.tabsPaper}>
        <div>
          <ul>
            <li
              className={tab === 0 ? styles.tabsActive : styles.tabs}
              onClick={() => {
                selectTab(0);
              }}
            >
              Shape Your Page
            </li>
            <li
              className={tab === 0 ? styles.tabs : styles.tabsActive}
              onClick={() => {
                selectTab(1);
              }}
            >
              Plan Your Task
            </li>
          </ul>
          <span></span>
        </div>
        <div
          className={styles.slides}
          style={{ display: tab === 0 ? "" : "none" }}
        >
          <div className={styles.text} style={{ marginRight: "64px" }}>
            <h2>Shape Your Page</h2>
            <p>
              Docs, Kanbans, and Databases are all fully functional anywhere,
              anytime. A truly what-you-see-is-what-you-get environment for your
              data.
            </p>
            <p>
              All pages come with a document (Paper Mode) and whiteboard
              (Edgeless Mode) view.
            </p>
          </div>
          <div className={styles.pic}>
            <div className={styles.image}>
              <Image src={ShapeImage} alt="AFFiNE Shape Your Page" />
            </div>
          </div>
        </div>
        <div
          className={styles.slides}
          style={{ display: tab === 0 ? "none" : "" }}
        >
          <div className={styles.pic}>
            <div className={styles.image}>
              <Image src={TaskImage} alt="AFFiNE Plan Your Task" />
            </div>
          </div>
          <div className={styles.text} style={{ marginLeft: "64px" }}>
            <h2>Plan Your Task</h2>
            <p>No more chaos managing multiple views.</p>
            <p>
              Set a TODO with Markdown, and seamlessly edit it within a Kanban.
            </p>
            <p>
              Managing multi-dimensional tables should be this simple - and now
              it is.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageTabs;
