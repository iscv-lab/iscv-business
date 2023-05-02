import setup from '@locales/setup'
import { store } from '@redux/store'
import '@styles/global.scss'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={setup}>
        <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)
