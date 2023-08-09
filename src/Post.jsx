export function Post(props) {
  return (
    <article>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </article>
  );
}
