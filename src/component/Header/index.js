"use Client";

import { BsGithub } from "react-icons/bs";
import styles from "./header.module.css";
function Header() {
  return (
    <div className={styles.header}>
      <h1>
        <BsGithub />
        Todo List
      </h1>
    </div>
  );
}

export default Header;
