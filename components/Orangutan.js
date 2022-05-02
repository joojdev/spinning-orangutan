import { useState } from 'react'
import styles from '@styles/Orangutan.module.css'

function Orangutan() {
  const [imageIndex, setImageIndex] = useState(0)

  function handleOrangutanClick() {
    if (imageIndex + 1 >= 3) return setImageIndex(0)
    setImageIndex(imageIndex + 1)
  }

  return (
    <img
      src={`/images/orangutan${imageIndex}.png`}
      alt='Orangutan'
      className={styles.image}
      onClick={handleOrangutanClick}
    />
  )
}

export default Orangutan