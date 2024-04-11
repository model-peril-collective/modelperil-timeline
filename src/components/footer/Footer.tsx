import { lazy } from 'react';
import { SiApplemusic, SiInstagram, SiSpotify, SiYoutubemusic } from 'react-icons/si';
import { ComponentFactory } from '../index';
import styles from './Footer.module.scss';

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
          <li className={styles.socialLink}>
            <a><SiApplemusic /></a>
          </li>
          <li className={styles.socialLink}>
            <a><SiInstagram /></a>
          </li>
          <li className={styles.socialLink}>
            <a><SiSpotify /></a>
          </li>
          <li className={styles.socialLink}>
            <a><SiYoutubemusic /></a>
          </li>
        </ul>
        <div className={styles.footerCreds}>
          <a>Model Peril</a>
          <a>discocisco</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
