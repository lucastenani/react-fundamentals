import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([1, 2]);

  const publishedDateFormatted = format(publishedAt, "MMM d 'at' hh:mm aaa");

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });

  function handleCreateNewComment() {
    event.preventDefault();
    setComments([...comments, comments.length + 1]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          Posted {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a
                  href={line.href}
                  target={line.href === "#" ? null : "_blank"}
                  rel={line.href === "#" ? null : "noreferrer"}
                >
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Put your feedback</strong>
        <textarea placeholder="Post a comment" />
        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment />;
        })}
      </div>
    </article>
  );
}
