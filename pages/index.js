import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import photo from '../public/JELAY.jpg';

import { motion, transform } from 'framer-motion';

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const [toggleImages, setToggleImages] = useState(false);

  return (
    <div>
      <Head>
        <title>FOR JESSIE💛</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.wrapper}>
        <div className={styles.container}>
          {toggle ? (
            <>
              <motion.h1
                initial={{ opacity: 0, y: '-100vw' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.title}
              >
                Click me!
              </motion.h1>
              <motion.div
                className={styles.arrow}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                ⬇
              </motion.div>
            </>
          ) : (
            <>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={styles.btn}
                onClick={() => {
                  setToggle(true);
                  setToggleImages(false);
                }}
              >
                Reset
              </motion.button>
            </>
          )}
          <div>
            {toggle ? (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {' '}
                <Image
                  className={styles.giftbox}
                  src='https://cdnjs.cloudflare.com/ajax/libs/flat-ui/2.3.0/img/icons/svg/gift-box.svg'
                  alt='giftbox'
                  object-fit='cover'
                  width={64}
                  height={64}
                  onClick={() => {
                    setToggle(!toggle);
                    setToggleImages(true);
                  }}
                />
              </motion.div>
            ) : (
              <>
                <div className={styles.greetingWrapper}>
                  <motion.h1
                    initial={{ opacity: 0, x: '-100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className={styles.greetingTitle}
                  >
                    <marquee>TAYO NA BA?! 💛</marquee>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: '-100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <p>
                      YES OR NO?
                    </p>

                    <div>
                      <pre class='tab'> </pre>
                      <p> - VINCENT</p>
                    </div>
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: '-100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5 }}
                  ></motion.p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
