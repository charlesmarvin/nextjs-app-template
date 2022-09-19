import styles from './Component.module.css'

const Component = ({ sampleTextProp }) => {
  return (
    <div className={styles.container}>
      This is a Component - {sampleTextProp}
    </div>
  )
}

export default Component
