import { useState } from 'react'
import styles from '@styles/Orangutan.module.css'

const imageArray = [
  'surprised-orangutan.png',
  'swinging-orangutan.png',
  'plushie-orangutan.png',
  'stoned-fox.png',
  'beta-dog.png',
  'chad-dog.png'
]

function Orangutan() {
  const [imageIndex, setImageIndex] = useState(0)

  function handleOrangutanClick() {
    console.log(imageArray)
    if (imageIndex + 1 >= imageArray.length) return setImageIndex(0)
    setImageIndex(imageIndex + 1)
  }

  return (
    <img
      src={`/images/${imageArray[imageIndex]}`}
      alt='Orangutan'
      className={styles.image}
      onClick={handleOrangutanClick}
    />
  )
}

export default Orangutan