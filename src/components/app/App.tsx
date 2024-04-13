import clsx from 'clsx';
import { Suspense, lazy, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import contentJson from '../../content/content.json';
import { Story } from '../../models';
import { ComponentFactory } from '../index';
import styles from './App.module.scss';

const Footer = lazy(() => ComponentFactory.FooterAsync());
const Hero = lazy(() => ComponentFactory.HeroAsync());
const Spotify = lazy(() => ComponentFactory.SpotifyAsync());
const Year = lazy(() => ComponentFactory.YearAsync());

const App = () => {
  const [footerRef, footerInView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [heroRef, heroInView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [years, setYears] = useState<string[]>([]);

  const getYearStories = (year: string) =>
    contentJson.stories.filter((story) => year === story.date.year && !story.ignore);

  useEffect(() => {
    const unique = new Set<string>();
    contentJson.stories.forEach((story: Story) => unique.add(story.date.year));

    const sortedYears = [...unique].sort((a, b) => parseInt(a) - parseInt(b));

    setYears(sortedYears);
  }, []);

  return (
    <div className={styles.app}>
      <main className={styles.mainContent}>
        <Hero ref={heroRef} />
        <Spotify
          compact
          className={clsx(styles.stickyPlayer, (footerInView || heroInView) && styles.hide)}
          link="https://open.spotify.com/album/5pviUBTXTliGqQrNU4rc6X?si=ZZgd404fSKuXbYBcqYCh5w"
        />
        <div id="stories" className={styles.yearWrapper}>
          <Suspense fallback={<p>Loading stories...</p>}>
            {years.length > 0 &&
              years.map((year, i) => <Year key={i} id={year} stories={getYearStories(year)} />)}
          </Suspense>
        </div>
      </main>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
