import styles from '~/styles/Bears.module.css'
import { ActionButton } from '../ActionButton'
import { Description } from '../Description'
import { useStore } from '~/store'

export const Tigers = () => {

  const { tigers, addTiger, removeTiger, removeAllTigers } = useStore()

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Tigers</h3>
      <p className={styles.counter}>{ tigers }</p>
      <div className={styles.buttons}>
        <ActionButton 
          title='+ Add'
          onclick={addTiger} 
        />
        <ActionButton 
          title='- Remove'
          onclick={removeTiger} 
        />
        <ActionButton 
          title='x Remove All'
          onclick={removeAllTigers} 
        />
      </div>
      <Description 
        type='tiger'
        count={tigers}
      />
    </div>
  )
}
