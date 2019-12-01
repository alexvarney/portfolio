import React from "react";
import styles from "./Page1.module.css";
import profilePicture from "../../assets/profile.webp";
import classNames from "classnames";
import { Link } from "react-scroll";

export default function Page1() {
  return (
    <div id="home" className={classNames(styles.page)}>
      <div className={styles.row_1}>
        <img
          className={styles.profileImg}
          src={profilePicture}
          alt="My profile pic"
        />
      </div>
      <div className={styles.row_2}>
        <div className={styles.text}>
          <h1><span role="img" aria-label="Waving hand">👋</span>, I'm Alex!</h1>
          <h2 className={styles.subtitle}>
            I’m a web developer from Waterloo, Ontario, <span role="img" aria-label="Canadian Flag">🇨🇦</span>. I build full-stack
            applications using React and Node.js.
          </h2>
        </div>
        <h3 href="#">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            view my work
          </Link>
        </h3>
      </div>
    </div>
  );
}
