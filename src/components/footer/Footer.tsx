import { lazy } from 'react';
import { SiApplemusic, SiInstagram, SiSpotify, SiYoutubemusic } from 'react-icons/si';
import { ComponentFactory } from '../index';
import styles from './Footer.module.scss';
import clsx from 'clsx';

const Spotify = lazy(() => ComponentFactory.SpotifyAsync());

// https://open.spotify.com/artist/7qolDRFBtdsZiSzWqazZdm?si=WUImTJhwQI-vmZfSEa6C7Q
// https://music.apple.com/us/artist/model-peril/1686750556
// https://www.instagram.com/modelperil/
// https://music.youtube.com/channel/UCm3-GWXA26ZlVaAXAYfa7Ng?si=txQPNSziaRAxGhK8

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Spotify profile className={styles.footerSpotify} />
      <div className={styles.socialContainer}>
        <ul className={styles.socialList}>
          <li className={clsx(styles.socialLink, styles.appleMusic)}>
            <a
              href="https://music.apple.com/us/artist/model-peril/1686750556"
              target="_blank"
              rel="noreferrer"
            >
              <SiApplemusic />
            </a>
          </li>
          <li className={clsx(styles.socialLink, styles.instagram)}>
            <a href="https://www.instagram.com/modelperil/" target="_blank" rel="noreferrer">
              <SiInstagram />
            </a>
          </li>
          <li className={clsx(styles.socialLink, styles.spotify)}>
            <a
              href="https://open.spotify.com/artist/7qolDRFBtdsZiSzWqazZdm?si=WUImTJhwQI-vmZfSEa6C7Q"
              target="_blank"
              rel="noreferrer"
            >
              <SiSpotify />
            </a>
          </li>
          <li className={clsx(styles.socialLink, styles.youtubeMusic)}>
            <a
              href="https://music.youtube.com/channel/UCm3-GWXA26ZlVaAXAYfa7Ng?si=txQPNSziaRAxGhK8"
              target="_blank"
              rel="noreferrer"
            >
              <SiYoutubemusic />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.footerCreds}>
        <span className={styles.copyright}>Model Peril © 2024</span>
        <span className={styles.createdBy}>
          site created by{' '}
          <a href="https://github.com/discocisco" target="_blank" rel="noreferrer">
            discocisco
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
