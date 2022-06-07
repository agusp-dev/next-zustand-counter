import styles from '~/styles/Bears.module.css'
import { ActionButton } from '../ActionButton'
import { Description } from '../Description'
import { useStore } from '~/store'

export const Bears = () => {

  const { bears, addBear, removeBear, removeAllBears } = useStore()

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Bears</h3>
      <p className={styles.counter}>{ bears }</p>
      <div className={styles.buttons}>
        <ActionButton 
          title='+ Add'
          onclick={addBear} 
        />
        <ActionButton 
          title='- Remove'
          onclick={removeBear} 
        />
        <ActionButton 
          title='x Remove All'
          onclick={removeAllBears} 
        />
      </div>
      <Description 
        type='bear'
        count={bears}
      />
    </div>
  )
}
