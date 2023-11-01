import React from 'react'
import Head from 'next/head';
import  Navbar  from './Navbar';
import FooterBanner from './FooterBanner';


const Layout = ({children}) => {
  return (
    <div>
    <div className='p-2.5'>
      <Head>
        <title>Iphone store</title>
      </Head>
      <header>
        <Navbar/> 
      </header>
      <main className='max-w-[1400px] m-auto w-full'>
        {children}
      </main>
 </div>
      <footer className='h-full'>
        <FooterBanner />
      </footer> 
    </div>
  )
}

export default Layout