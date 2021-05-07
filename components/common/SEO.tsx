import React from 'react';
import Head from 'next/head';

const SEO_DATA = {
  description: 'My portfolio',
  title: 'Luca Xue',
  url: '',
  author: 'Luca Xue',
  keywords: ['luca', 'xue', 'portfolio'],
  img: '',
  twitterId: '',
  facebookId: '',
};

const SEO: React.FC = () => (
  <Head>
    <meta property="fb:app_id" content={SEO_DATA.facebookId} />
    <meta property="og:title" content={SEO_DATA.title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SEO_DATA.url} />
    <meta property="og:image" content={SEO_DATA.img} />
    <meta property="og:description" content={SEO_DATA.description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content={SEO_DATA.twitterId} />
    <meta name="twitter:site" content={SEO_DATA.url} />
    <meta name="twitter:title" content={SEO_DATA.title} />
    <meta name="twitter:description" content={SEO_DATA.description} />
    <meta name="twitter:domain" content={SEO_DATA.url} />
    <meta name="twitter:image:src" content={SEO_DATA.img} />

    <meta name="description" content={SEO_DATA.description} />
    <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
    <meta name="author" content={SEO_DATA.author} />
    <title>{SEO_DATA.title}</title>
    <html lang="en" />
  </Head>
);

export default SEO;
