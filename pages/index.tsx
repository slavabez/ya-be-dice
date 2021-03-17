import Head from 'next/head'
import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      The actual page
    </PageLayout>
  )
}
