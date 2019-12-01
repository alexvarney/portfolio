import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
import { Link } from "react-scroll";

export default function Header() {
  // eslint-disable-next-line
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  const onScroll = () => {
    setScrollPos(prevState => {
      setScrollingDown(window.pageYOffset > prevState && window.pageYOffset > 1);
      return window.pageYOffset;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={classNames(
        "navbar",
        "navbar-default",
        "fixed-top",
        scrollingDown ? styles.nav_hidden : styles.nav
      )}
    >
      <ul>
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={750}
          >
            home
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            projects
          </Link></li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            about
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={750}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
