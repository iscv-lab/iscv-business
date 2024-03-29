import { LoadingContainer } from '@components/Loading'

import { ToastContainer } from '@iscv/toast'
import { connect } from '@redux/reducers/auth'
import { setClient } from '@redux/reducers/socket'
import { RootState } from '@redux/store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const provider = useSelector((state: RootState) => state.auth.provider)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const business = useSelector((state: RootState) => state.auth.business)
  useEffect(() => {
    ;(provider.provider as any).on('accountsChanged', async () => {
      await dispatch<any>(connect({ provider, navigate }))
    })
    ;(provider.provider as any).on('chainChanged', async () => {
      await dispatch<any>(connect({ provider, navigate }))
    })
    return () => {
      ;(provider.provider as any).removeListener('accountsChanged', () => {})
      ;(provider.provider as any).removeListener('chainChanged', () => {})
    }
  }, [provider])
  useEffect(() => {
    if (!provider) return
    ;(async () => {
      await dispatch<any>(connect({ provider, navigate }))
    })()
  }, [provider])

  useEffect(() => {
    ;(async () => {
      if (business?.id === undefined || business?.id === null) return
      await dispatch<any>(setClient({ businessId: business?.id }))
    })()
  }, [business?.id])

  return (
    <div className="App">
      <LoadingContainer></LoadingContainer>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
    </div>
  )
}

export default App
