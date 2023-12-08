import { Suspense, lazy, useEffect, useState } from 'react';
import contentJson from '../../content/content.json';
import { Story } from '../../models';
import { ComponentFactory } from '../index';
import styles from './App.module.scss';

const Hero = lazy(() => ComponentFactory.HeroAsync());
const Year = lazy(() => ComponentFactory.YearAsync());

const App = () => {
  const [years, setYears] = useState<string[]>([]);

  const getYearStories = (year: string) =>
    contentJson.stories.filter((value) => year === value.date.year);

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
      {/* <div className={styles.content}> */}
      {years.length > 0 &&
        years.map((year) => {
          return <Year key={year} id={year} stories={getYearStories(year)} />;
        })}
      {/* </div> */}
    </div>
  );
};

export default App;
