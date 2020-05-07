import React from 'react';
import Link from 'next/link';

export default () => (
    <ul>
        <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/page2"><a>Page 2</a></Link></li>
    </ul>
);
