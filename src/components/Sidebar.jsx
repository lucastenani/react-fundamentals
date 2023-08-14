import { PencilLine } from "@phosphor-icons/react";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt="User cover photo"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/75996842?v=4"
          alt="User profile picture"
        />
        <strong>Lucas Tenani</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#" title="Click to edit profile">
          <PencilLine size={20} />
          Edit profile
        </a>
      </footer>
    </aside>
  );
}
