import React from 'react';
import Head from 'next/head';
import {
  Menu,
  Intro,
  Experiences,
  ThisWebsite,
  Contact,
} from '../components';

const Home = () => {
  return (
    <>
      <Head>
        <title>Arthur Lara Web Developer</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Khand:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <Menu/>
      <Intro/>
      <Experiences/>
      <ThisWebsite/>
      <Contact/>
    </>
  );
}

export default Home;