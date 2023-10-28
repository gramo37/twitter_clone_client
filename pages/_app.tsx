import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="352390152267-ful13fjc6nvs40u5k5i0vugc6291niij.apps.googleusercontent.com">
      <ToastContainer />
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  )
}
