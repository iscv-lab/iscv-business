// import { routes } from 'src/routes'
// import styles from './styles.module.scss'
// import { NavLink, Outlet } from 'react-router-dom'
// import clsx from 'clsx'
// import { useTranslation } from 'react-i18next'
// import { useEffect, useState } from 'react'
// import { getBusiness } from '@apis/profile'
// import { useSelector } from 'react-redux'
// import { RootState } from '@redux/store'
// import avatarDefault from '@assets/avatar.png'
// import { IPFS_GATEWAY } from '@constants/index'
// import ProfileOverview from '@components/ProfileOverview'

// function Index() {
//   const { t } = useTranslation('page', { keyPrefix: 'dashboard.index' })
//   const [data, setData] = useState()
//   const business = useSelector((state: RootState) => state.auth.business)
//   const [open, setOpen] = useState(false)
//   if (business)
//     return (
//       <>
//         <aside className={styles.container}>
//           <div className={styles.topWrapper}>
//             <img src={`${IPFS_GATEWAY}${business.sourceImage}`}></img>
//             <div className={styles.titleWrapper}>
//               <a className={styles.title}>{business.name}</a>
//               <p className={styles.text}>Group</p>
//             </div>
//           </div>
//           <ProfileOverview></ProfileOverview>
//           <div className={styles.tableWrapper}>
//             {routes
//               .at(0)
//               ?.children.find((x) => x.name === 'sidebar')
//               ?.children.map((value) => {
//                 return (
//                   <NavLink
//                     key={value.path}
//                     to={value.path}
//                     className={({ isActive }) => clsx(styles.tab, { [styles.active]: isActive })}
//                   >
//                     <i className={value.icon}></i>
//                     <span>{t(value.name)}</span>
//                   </NavLink>
//                 )
//               })}
//           </div>
//         </aside>
//         <div className={styles.main}>
//           <Outlet></Outlet>
//         </div>
//       </>
//     )
//   return <h1>hello</h1>
// }

// export default Index

import React, { useState } from 'react'
import { Button } from '@components/index'
import { EButton } from '@components/Button'
import logo from '@assets/logo.jpg'
import clsx from 'clsx'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { routes } from 'src/routes'
import { useTranslation } from 'react-i18next'
import { RootState } from '@redux/store'
import { useSelector } from 'react-redux'
import { IIG_ID, IPFS_GATEWAY } from '@constants/index'

type Props = {
  //
}

const SideBar = (props: Props) => {
  const [expand, setExpand] = useState(true)
  const { t } = useTranslation('page', { keyPrefix: 'dashboard.index' })
  const business = useSelector((state: RootState) => state.auth.business)
  const navigate = useNavigate()
  return (
    <main className="flex w-full p-2 gap-4 bg-blue-200 min-h-screen">
      <aside className="rounded-xl bg-white py-3 px-3 min-h-full flex flex-col gap-3 ">
        {business && (
          <h2 className="flex items-center">
            <img
              src={`${IPFS_GATEWAY}${business?.sourceImage}`}
              width={50}
              height={50}
              // alt={'logo'}
              className=" cursor-pointer"
            ></img>
            {expand && (
              <span className="ml-3 text-2xl font-quicksand font-bold">{business?.name}</span>
            )}
          </h2>
        )}
        {!business && <Button onClick={() => navigate('/register')}>Đăng ký</Button>}
        <div className="flex items-center">
          <Button type={EButton.Square} onClick={() => setExpand(!expand)}>
            <i className="fa-solid fa-grid text-2xl"></i>
          </Button>
          {expand && <a className="text-xl ml-4 font-medium">Menu</a>}
        </div>
        <div className=" overflow-hidden h-full flex flex-col">
          <h4 className="text-gray-500 text-lg">Menu</h4>
          <div className="flex flex-col gap-2 mt-2 flex-1 py-5 overflow-scroll">
            {routes
              .at(0)
              ?.children.find((x) => x.name === 'sidebar')
              ?.children.filter((x) => (business ? true : x.name === 'main'))
              .filter((x) => (x.name === 'iig' ? business?.id === IIG_ID : true))
              .map((value) => {
                return (
                  <NavLink
                    to={value.path}
                    className={({ isActive }) =>
                      clsx(
                        'flex shrink-0 items-center text-gray-600 hover:bg-blue-600 hover:text-white px-4 h-10 py-1 rounded-lg',
                        { 'bg-blue-600 text-white': isActive }
                      )
                    }
                    key={value.name}
                  >
                    <i
                      className={`fa-regular fa-${value.icon} shrink-0 w-5 h-5 flex justify-center items-center`}
                    ></i>
                    {expand && <h6 className="ml-4 font-semibold">{t(value.name)}</h6>}
                  </NavLink>
                )
              })}
          </div>
        </div>
      </aside>
      <div className="rounded-xl min-h-full flex-1 overflow-overlay relative bg-blue-100">
        <Outlet></Outlet>
      </div>
    </main>
  )
}

export default SideBar
