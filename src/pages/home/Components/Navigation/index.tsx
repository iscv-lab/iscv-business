import { Link, To } from 'react-router-dom';
import styles from './styles.module.scss';

function Index({ to, title }: { to: To; title: string }) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {to && <Link to={to} className="fa-solid fa-angle-left"></Link>}
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Index;
