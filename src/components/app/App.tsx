import { Fragment, Suspense, lazy, useEffect, useState } from 'react';
import Xarrow from 'react-xarrows';
import contentJson from '../../content/content.json';
import { Story } from '../../models';
import { ComponentFactory } from '../index';
import styles from './App.module.scss';

const Hero = lazy(() => ComponentFactory.HeroAsync());
const Timeline = lazy(() => ComponentFactory.TimelineAsync());
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
      <div className={styles.yearWrapper}>
        {years.length > 0 &&
          years.map((year, i) => (
            <Fragment key={i}>
              <Year id={year} stories={getYearStories(year)} />
              {i !== 0 && (
                <Xarrow
                  animateDrawing
                  color="#ffff00"
                  startAnchor="bottom"
                  endAnchor="top"
                  start={'year-' + years[i - 1]}
                  end={'year-' + year}
                />
              )}
            </Fragment>
          ))}
      </div>
      <Timeline />
    </div>
  );
};

export default App;
