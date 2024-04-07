import { Suspense, lazy, useEffect, useState } from 'react';
import contentJson from '../../content/content.json';
import { Story } from '../../models';
import { ComponentFactory } from '../index';
import styles from './App.module.scss';

const Footer = lazy(() => ComponentFactory.FooterAsync());
const Hero = lazy(() => ComponentFactory.HeroAsync());
const Year = lazy(() => ComponentFactory.YearAsync());

const App = () => {
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
      <Suspense>
        <Hero />
      </Suspense>
      <div id="stories" className={styles.yearWrapper}>
        <Suspense fallback={<p>Loading stories...</p>}>
          {years.length > 0 &&
            years.map((year, i) => <Year key={i} id={year} stories={getYearStories(year)} />)}
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
