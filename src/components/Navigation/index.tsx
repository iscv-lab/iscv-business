import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

function Index({ to, title }: { to?: string | number; title: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {to && (
          <Link
            to={typeof to === 'string' ? { pathname: to } : (to as any)}
            className="fa-solid fa-angle-left"
          ></Link>
        )}
        <p>{title}</p>
      </div>
    </div>
  )
}

export default Index
