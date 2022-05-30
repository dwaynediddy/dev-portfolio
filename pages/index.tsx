import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import TitleText from '../components/TitleText'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dwayne Diddy portfolio</title>
        <meta name="description" content="frontend developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
        <TitleText />
        <Footer />
    </>
  )
}

export default Home
