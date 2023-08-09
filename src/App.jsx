import { Post } from "./Post";
import { Header } from "./components/Header";
import "./styles.css";

export function App() {
  return (
    <>
      <Header />
      <Post
        author="Lucas Tenani"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Post
        author="Stephen King"
        content="Corrupti id natus mollitia repellat officiis aliquid"
      />
    </>
  );
}
