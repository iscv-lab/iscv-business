import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import Navigation from '../../Components/Navigation'
import styles from './styles.module.scss'

function Index() {
  const [list, setList] = useState()
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.posts' })
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <Navigation to='' title={t('manager_posts')}></Navigation>
        <div className={styles.tool}>
          <Link to="/dashboard?tab=posts&create=true" className={styles.create}>
            {t('create_post')}
          </Link>
        </div>
        <div className={styles.tableWrapper}>
          <div className={styles.panel}>
            <table cellSpacing="0">
              <tr>
                <th>{t('post_name')}</th>
                <th>{t('date')}</th>
                <th>{t('status')}</th>
                <th>{t('content')}</th>
                <th>{t('applied')}</th>
              </tr>
{/* 
              {list?.map((value, index) => {
                return <Item key={index} {...value}></Item>
              })}
              {isLoading && (
                <tr>
                  <td colSpan={'100%'}>
                    <ContentLoader></ContentLoader>
                  </td>
                </tr>
              )} */}
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
