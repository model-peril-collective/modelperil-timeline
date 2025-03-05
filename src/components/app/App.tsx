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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [years, setYears] = useState<string[]>([]);
  const [heroRef, heroInView] = useInView({
    threshold: windowWidth > 600 ? 0.5 : 0,
  });
  const [timelineRef, timelineInView] = useInView({
    threshold: 0,
  });
  const [footerRef, footerInView] = useInView({
    threshold: 0.1,
  });

  const getYearStories = (year: string) =>
    contentJson.stories.filter((story) => year === story.date.year && !story.ignore);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const unique = new Set<string>();
    contentJson.stories.forEach((story: Story) => unique.add(story.date.year));

    const sortedYears = [...unique].sort((a, b) => parseInt(a) - parseInt(b));

    setYears(sortedYears);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={styles.app}>
      <main className={styles.mainContent}>
        <Hero ref={heroRef} />
        <Spotify
          compact
          className={clsx(
            styles.stickyPlayer,
            timelineInView && !heroInView && !footerInView && styles.show
          )}
          link="https://open.spotify.com/album/5pviUBTXTliGqQrNU4rc6X?si=ZZgd404fSKuXbYBcqYCh5w"
        />
        <div id="stories" ref={timelineRef} className={styles.yearWrapper}>
          <Suspense fallback={<p>Loading stories...</p>}>
            {years.length > 0 &&
              years.map((year, i) => (
                <Year
                  key={i}
                  id={year}
                  stories={getYearStories(year)}
                  isLastYear={i === years.length - 1}
                />
              ))}
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
