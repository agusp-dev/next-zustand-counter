import styles from '~/styles/Main.module.css'
import { Title } from '../Title'

export const Main = () => {
  return (
    <main className={styles.main}>
      <Title 
        title='Next Zustand Counter'
      />
    </main>
  )
}
