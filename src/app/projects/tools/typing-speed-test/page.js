import '@/app/styles.css';
import React from 'react';
import Head from 'next/head';
import Header from '@/components/header/header.js';
import TypingSpeedSVG from '@/components/icons/typingSpeedSVG';

export default function TypingSpeedTest() {
  return (
    <>
      <Head>
        <title>CAA - Tools - Typing Speed Test</title>
        <script src="http://localhost:3000"></script>
      </Head>
      <Header />
      <div className="mainBody">
        <div className="toolTitle">
            <h1>Typing Speed Test</h1>
            <TypingSpeedSVG/>
        </div>
        
      </div>
    </>
  );
}