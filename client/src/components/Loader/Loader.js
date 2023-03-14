import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className={styles['lds-dual-ring']}></div>
  )
}

export default Loader
