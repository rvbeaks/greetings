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
        <title>HAPPY BIRTHDAY💛</title>
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
                    HAPPY BIRTHDAY JESSIE! 💛
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: '-100vw' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2 }}
                  >
                    <p><center><justify>
                        Happy Happy Birthday sa taong pinaka sumusuporta saakin,
                        Oo, it's your day at ikaw yun Jessie! HAHAHAHA
                        I hope na hindi ka malungkot habang binabasa mo ito, 
                        I hope na wala kang bagabag sa oras na ito.
                        Una sa lahat Jessie, nagpapasalamat ako sa supportang binibigay
                        mo sa'akin sa lahat ng oras na need ko ng kausap, nariyan ka palagi.
                        Masama man takbo ng tadhana saatin, lagi mong tandaan na palaging may
                        isang sumusuporta sayo sa lahat ng bagay na mayroon ka sa buhay mo.
                        huwag kang mahihiya na magopen sa'akin, kahit gaano pa kagulo kwento mo
                        handa akong unawain lahat ng yun para  sa'iyo. Tandaan mo lagi na narito ako 
                        para pagkwentuhan mo, may balikat kang masasandalan sa lahat ng oras na 
                        naisin mo. Hindi kita iiwanan, magkasama tayong lalaban sa mundo, tulad ng
                        pangako ko sa'iyo, pangako ko na hindi ko nais mapako. Hiling ko sa kaarawan mo,
                        na balang araw aayon sayo ang mundo, kaunting tiis lang yan malalampasan mo din 
                        lahat ng iyan. Susuportahan kita, Tulad ng pag-suporta mo saakin. Lagi din natin
                        tandaan kung ano yung goal natin sa buhay, sabay lang tayo sa agos ng tadhana.
                        Maraming salamat sa lahat, Gusto kita at the same time, Mahal kita sobra. Enjoy 
                        your day Jessie! Masaya akong maging masaya ka. I love you, boss mahal. 🤟💛
                    </center></justify></p>
                      
                    <div> 
                        <pre class="tab">                                   </pre>
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
