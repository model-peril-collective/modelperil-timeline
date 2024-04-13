import clsx from 'clsx';
import { HTMLAttributes } from 'react'
import styles from './Spotify.module.scss';

interface SpotifyProps extends HTMLAttributes<HTMLIFrameElement> {
  compact?: boolean;
  glassBg?: boolean;
  link?: string;
  profile?: boolean;
}

const Spotify = (props: SpotifyProps) => {
  const {
    className = '',
    compact = false,
    glassBg = false,
    link,
    profile = false,
  } = props;

  let url;

  if (!profile && link && link.length > 0) {
    url = new URL(link);
  }

  const profilePathname = '/artist/7qolDRFBtdsZiSzWqazZdm';

  return (
    <div className={clsx(styles.container, glassBg && styles.glassBg, className)}>
      <iframe
        src={`https://open.spotify.com/embed${profile ? profilePathname : url?.pathname}?utm_source=generator&theme=0`}
        width="100%"
        height={compact ? '80' : '352'}
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div >
  )
};

export default Spotify;
