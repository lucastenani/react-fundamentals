import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://github.com/lucastenani.png"
        alt="User profile picture"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Tenani</strong>
              <time title="Mon 14 Aug 19:52" dateTime="2023-08-14 19:52:00">
                About 1 hour ago
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Lucas, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} /> Applaud <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
