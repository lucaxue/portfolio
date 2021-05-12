import React from 'react';
import Head from 'next/head';

const SEO_DATA = {
  description: 'A software developer with a passion for learning and growth.',
  title: 'Luca Xue',
  url: 'https://lucaxue.vercel.app/',
  author: 'Luca Xue',
  keywords: ['luca', 'xue', 'portfolio', 'software', 'developer'],
  img: 'https://lucaxue.vercel.app/images/portfolio_preview.png',
  twitterId: '@luca_xue',
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
