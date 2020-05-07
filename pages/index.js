import Head from 'next/head'
import Nav from '../components/nav';

export default function Home() {
    return (
        <div className="container">
          <Head>
              <title>Repro App</title>
          </Head>

              <Nav />

        This is just a blank page to navigate to. Go back and forth between this and page2 to see dependency counts change.
    </div>
  )
}
