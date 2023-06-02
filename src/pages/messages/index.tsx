import clsx from 'clsx'
import Chat from './Chat'
import ChatContextProvider from './ChatContext'
import People from './People'
import Tools from './Tools'
import styles from './styles.module.scss'

function Index() {
  return (
    <div className={clsx(styles.container, 'rounded-xl')}>
      <People></People>
      <Chat></Chat>
      <Tools></Tools>
    </div>
  )
}

function Messages() {
  return (
    <ChatContextProvider>
      <Index></Index>
    </ChatContextProvider>
  )
}
export default Messages
