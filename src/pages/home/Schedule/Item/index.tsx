import styles from './styles.module.scss'
function Index({ time, name, job, employeeId, businessId, address, appointmentId }: any) {

  return (
    <div className={styles.item}>
      <div className={styles.time}>{new Date(parseInt(time)).toLocaleTimeString()}</div>
      {/* <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.avatar}>
            <img src={avatar}></img>
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.contentTime}>
              {new Date(parseInt(time)).toLocaleTimeString()}
            </div>
            <div className={styles.contentPost}>{job}</div>
            <div className={styles.contentName}>{name}</div>
          </div>
        </div>
        <div className={styles.right}>
          <i onClick={handleDelete} className="fa-solid fa-trash-list"></i>
        </div>
      </div> */}
    </div>
  )
}

export default Index
