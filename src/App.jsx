import { Header } from "./components/Header";
import styles from './app.module.css'
import { Post } from "./components/Post";
import { Aside } from "./components/Aside";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Aside />

        <div>
          <Post userName="Gutavo" message="Bû" />
          <Post userName="Pai" message="Quem é o bebe mais lindo do mundo ? É o Gustavo \o/" />
          <Post userName="Irineu" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore repellendus eveniet expedita repudiandae praesentium odio voluptates ipsam assumenda incidunt accusamus ducimus laudantium vitae natus harum, pariatur non quae voluptate distinctio!" />
        </div>
      </div>
      
    </div>
  )
}