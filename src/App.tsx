import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Post } from "./components/Post";
import styles from "./app.module.css";

interface comments {
  type: "paragraph" | "link";
  text: string;
}

interface postProps {
  id: number;
  user: {
    name: string;
    avatar: string;
    occupation: string;
    contents: comments[];
  };
  publishedAt: Date;
  tags: string[];
}

export function App() {
  const posts: postProps[] = [
    {
      id: 1,
      user: {
        name: "Luiz Silveira",
        avatar: "https://avatars.githubusercontent.com/u/13370451?v=4",
        occupation: "Dev Front-End",
        contents: [
          { type: "paragraph", text: "Fala galeraa 👋" },
          {
            type: "paragraph",
            text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
          },
          { type: "link", text: "jane.design/doctorcare" },
        ],
      },
      publishedAt: new Date("2022-07-17 22:00:00"),
      tags: ["#novoprojeto", "#nlw", "#rocketseat"],
    },

    {
      id: 2,
      user: {
        name: "Gutavo",
        avatar: "/gustavinho.jpg",
        occupation: "Bebe mais lindo do mundo",
        contents: [
          { type: "paragraph", text: "Minha mamãe é muito lindona ❤️" },
          { type: "paragraph", text: "Amo o papai 👬" },
          { type: "paragraph", text: "Tenho as melhores vóvós 😍" },
          { type: "link", text: "gutavo.silveira/omaislindo" },
        ],
      },
      publishedAt: new Date("2022-07-15 11:00:00"),
      tags: ["#bonitão do pai", "#lindão da mamae", "#chamego das vóvó"],
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Aside />
        <div>
          {posts.map((post) => (
            <Post
              key={post.id}
              user={post.user}
              tags={post.tags}
              publishedAt={post.publishedAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
