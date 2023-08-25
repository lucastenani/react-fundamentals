import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import "./global.css";
import styles from "./App.module.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Hello everyone! 👋" },
      {
        type: "paragraph",
        content:
          "I've just uploaded another project to my portfolio. It's a project I did during NLW Return, a Rocketseat event. The project's name is DoctorCare 🚀.",
      },
      {
        type: "paragraph",
        content: "👉",
      },
      {
        type: "link",
        content: "github.com/diego3g",
        href: "https://github.com/diego3g",
      },
      {
        type: "link",
        content: "#newproject #nlw #rocketseat",
        href: "#",
      },
    ],
    publishedAt: new Date("2023-08-19 18:45:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/ErickWendel.png",
      name: "Erick Wendel",
      role: "Microsoft MVP, Google Dev Expert",
    },
    content: [
      { type: "paragraph", content: "Hey, guys 👋" },
      {
        type: "paragraph",
        content:
          "I finally launched my new course. It was quite a challenge to create all the content, but I did it 💪🏻",
      },
      {
        type: "paragraph",
        content: "Login and leave your feedback 👉  ",
      },
      {
        type: "link",
        content: "cursos.erickwendel.com.br",
        href: "https://cursos.erickwendel.com.br/",
      },
    ],
    publishedAt: new Date("2023-08-18 12:12:54"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
