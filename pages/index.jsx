import Head from 'next/head'
import Container from '../components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Trello clone</title>
        <meta name='description' content='React Trello clone' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container />
    </>
  )
}
