import Left from './Left'
import { routes } from './config'
import styles from './styles.module.scss'

import { useSearchParams } from 'react-router-dom'

function Index() {
  const [searchParams] = useSearchParams()
  const tab = searchParams.get('tab')
  return (
    <div className={styles.container}>
      <Left></Left>
      <div className={styles.right}>
        {Object(routes)[tab!] ? Object(routes)[tab!].element : routes['main'].element}
      </div>
    </div>
  )
}

export default Index
