import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'
import ContextWrapper from './Context'

export default function App({ Component, pageProps }) {
  return <ContextWrapper>
  <Toaster/>
  <Component {...pageProps} />
  </ContextWrapper>
}
