import styles from './styles.module.scss'

function Index() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.tool}>
          <button
            id="header_button"
            // onClick={() =>
            //   setShowMorePanel({
            //     show: showMorePanel.show == false ? true : showMorePanel.panel != 1 ? true : false,
            //     panel: 1,
            //   })
            // }
          >
            <i className="fa-regular fa-user"></i>
          </button>
          <button
            id="header_button"
            // onClick={() =>
            //   setShowMorePanel({
            //     show: showMorePanel.show == false ? true : showMorePanel.panel != 2 ? true : false,
            //     panel: 2,
            //   })
            // }
          >
            <i className="fa-regular fa-bells"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Index
