import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/75996842?v=4"
            alt="User profile picture"
          />
          <div className={styles.authorInfo}>
            <strong>Lucas Tenani</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <time title="Mon 14 Aug 19:52" dateTime="2023-08-14 19:52:00">
          Publicado à 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketsea</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Put your feedback</strong>
        <textarea placeholder="Post a comment" />
        <button type="submit">Publish</button>
      </form>
    </article>
  );
}
