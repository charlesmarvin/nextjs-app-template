import styles from './Component.module.css'

const Component = ({ templateText }) => {
  return <div className={styles.container}>{templateText}</div>
}

export default Component
