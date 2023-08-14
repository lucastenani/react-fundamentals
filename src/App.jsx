import { Post } from "./Post";
import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>sidebar</aside>
        <main>
          <Post
            author="Lucas Tenani"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <Post
            author="Stephen King"
            content="Corrupti id natus mollitia repellat officiis aliquid"
          />
        </main>
      </div>
    </>
  );
}
