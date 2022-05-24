import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 py-8 px-8 place-items-center">
        <span className="max-w-max">Hello World!</span>
      </div>
    </div>
  )
}
