// import Image from 'next/image'

import styles from '@styles/Orangutan.module.css'

function Orangutan() {
  // return <Image src='/orangutan.png' className={styles.image} alt='Orangutan' width='100' height='100' />
  return <img src='/orangutan.png' alt='Orangutan' className={styles.image} />
}

export default Orangutan