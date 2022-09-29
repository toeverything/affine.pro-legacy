import styles from "@/libs/pagesHome/HomeLayout.module.css";
import Image from "next/image";
import { useState } from "react";
import ShapeImage from "../../../public/content/homePage/shape.png";

const HomepageTabs = () => {
  const [tab, selectTab] = useState(0);
  return (
    <div>
      <div className={styles.tabsPaper}>
        <div>
          <div>
            <button className={styles.tabs}>Shape Your Page</button>
            <button className={styles.tabs}>Plan Your Task</button>
          </div>
          <span></span>
        </div>
        <div className={styles.slides}>
          <div className={styles.shape_left}>
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
          <div className={styles.shape_right}>
            <div className={styles.image}>
              <Image src={ShapeImage} alt="AFFiNE Shape Your Page" />
            </div>
          </div>
        </div>
        {/* <div>
          <div className="left">
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
          <div className="right">
            <div className={styles.image}>
              <Image src={TaskImage} alt="AFFiNE Plan Your Task" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomepageTabs;
