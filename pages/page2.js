import React from 'react';
import Head from 'next/head'
import useScript from 'react-script-hook';

import Nav from '../components/nav';


const Dependencies = () => {
    if (!process.browser) return null;
    const [loading1] = useScript({src: '/dependency-1.js'});
    const [loading2] = useScript({src: '/dependency-2.js', checkForExisting: true});

    return (<div>
                  {!loading1 && <div>
        Dependency 1 (unchecked) Load Count: {window.__dependency1}
            </div>}
                {!loading2 && <div>
            Dependency 2 (checked) Load Count: {window.__dependency2}
            </div>}
                </div>);
};

export default function Home() {

    return (
        <div className="container">
          <Head>
              <title>Repro App - Page 2</title>
          </Head>

              <Nav />

                  <Dependencies />

    </div>
  )
}
