import styles from '~/styles/Title.module.css'

export const Title = ({ title }) => {
  return (
    <h1 className={styles.title}>{ title }</h1>
  )
}
