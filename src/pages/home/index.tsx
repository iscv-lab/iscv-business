import Right from './Right';
import Story from './Story';
import styles from './styles.module.scss';

function Index() {
  return (
    <div className={styles.container}>
      <Story></Story>
      <Right></Right>
    </div>
  );
}

export default Index;
