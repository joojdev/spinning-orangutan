import PageTemplate from '@components/PageTemplate'
import Orangutan from '@components/Orangutan'

import styles from '@styles/HomePage.module.css'

function HomePage() {
  return (
    <PageTemplate title='Spinning Orangutan'>
      <div className={styles.container}>
        <Orangutan />
      </div>
      <a href='https://github.com/joojdev' target='_blank' rel='external' className={styles.credits}>joojdev</a>
    </PageTemplate>
  )
}

export default HomePage