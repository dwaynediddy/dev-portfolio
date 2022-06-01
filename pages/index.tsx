import type { NextPage } from 'next'
import Head from 'next/head'
import TitleText from '../components/TitleText'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Dwayne Diddy portfolio</title>
        <meta name="description" content="frontend developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleText />

    </>
  )
}

export default Home
