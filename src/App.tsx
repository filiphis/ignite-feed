import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Post } from "./components/Post";
import styles from './app.module.css'


interface comments {
  type: 'paragraph' | 'link';
  text: string;
}

interface postProps {
  id: number;
  user: {
    name: string;
    avatar: string;
    occupation: string;
    contents: comments[]
  },
  publishedAt: Date;
  tags: string[]
}

export function App() {

  const posts: postProps[] = [
    {
      id: 1,
      user: {
        name: 'Luiz Silveira',
        avatar: 'https://avatars.githubusercontent.com/u/13370451?v=4',
        occupation: 'Dev Front-End',
        contents: [
          { type: 'paragraph', text: 'Fala galeraa 👋' },
          { type: 'paragraph', text: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
          { type: 'link', text: 'jane.design/doctorcare' },
        ],
      },
      publishedAt: new Date('2022-07-17 22:00:00'),
      tags: ['#novoprojeto', '#nlw', '#rocketseat']
    },

    {
      id: 2,
      user: {
        name: 'Gutavo',
        avatar: 'https://lh3.googleusercontent.com/i-b7LTMWaU4oe61vKf_ISXdfWorGZNFJ3zee9M4dPsyeMIhznc25vovPYNfXLjJ5qi_zjumLx3CRILWblHu8AKyJWP9XhQTANPPn3fkNuLqTUEM6pVMCJ48QTgUZVUxyUm4HqyWgiarXxE2UksDoV7kQUeTHmqbpmxpKQ45MYHLecxh3cmba6XetfpRmmDEeNv5eJgP22VkGlTfhZ765voVQstLvGtcsuFVKXWrZucAFsL2iTE15Ozokg36kY5SQjEBmflYrCCZ3TRintGhHzfXGUEthDtDE43xbwwE6o1k1wx6VmYrgsYuzdCR9YPizXK2kmPb3lbGarvj8wydOrEP13Kv08t_WrXWhVM2AjLGPoAhTgyC3p2M9zvWOmEMIw-7Om1kB0BhSlp9Ht3KM9Yp1fmrznww-6dJ3SEjaPbMUhEpi9iCG-L-p1cTQEdpUl0PoGCLDo1gBWbV8UQZuoFYXvCbcCz1bBzznydx16D2Tdtu2cmkKdr3VXcsFfNHwsTbTZSrMs5SgIc7eTW1C6gtkLbrZNQbSQ_OwOy7XgCYHgSeTq86unCt3HrTD3_W0wD-22xSwRGj4CHMxD0AbLGQkuPShN8SrsvR3ITPVdaNsRRp57aCkbOqWhBpIPTyzfYejNqaCnm20XQK_oM5tnBtnF_sLwAXTVQ-aufeILGVx9_DxXyEr8Vkzif2A7OZrKYIcEVuR5aOnebT0YVa-rgmh_2BcXHOfYzf1SgZ56wQWs8WIa1HbWBxIAjUKU8jnrqkmQgPoHZRddThP67AGxb42g8xn6aKMJeHaqDXHQWPUfmvOC6M6tqDYqfB9My8d4dCt7b0=w706-h937-no?authuser=0',
        occupation: 'Bebe mais lindo do mundo',
        contents: [
          { type: 'paragraph', text: 'Minha mamãe é muito lindona ❤️' },
          { type: 'paragraph', text: 'Amo o papai 👬' },
          { type: 'paragraph', text: 'Tenho as melhores vóvós 😍' },
          { type: 'link', text: 'gutavo.silveira/omaislindo' },
        ],
      },
      publishedAt: new Date('2022-07-15 11:00:00'),
      tags: ['#bonitão do pai', '#lindão da mamae', '#chamego das vóvó']
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
  )
}