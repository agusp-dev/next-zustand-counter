import styles from '~/styles/Main.module.css'
import { Title } from '../Title'
import { Bears } from '../Bears'
import { Tigers } from '../Tigers'

export const Main = ({ title }) => {
  console.log('Main')
  return (
    <main className={styles.main}>
      <Title 
        title={title}
      />
      <div className={styles.container}>
        <Bears />
        <Tigers />
      </div>
    </main>
  )
}
