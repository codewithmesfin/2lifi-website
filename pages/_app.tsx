import "@/styles/globals.css";
import Layout from '../components/layout'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "@/context/authContext";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: any) {
  useEffect(()=>{AOS.init();},[])
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </AuthProvider>
  )
}