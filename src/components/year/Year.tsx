import { CSSProperties, lazy, useEffect, useRef, useState } from 'react';
import { Story as StoryModel } from '../../models';
import { ComponentFactory } from '..';
import styles from './Year.module.scss';
import clsx from 'clsx';

const Story = lazy(() => ComponentFactory.StoryAsync());

export interface YearProps {
  id: string;
  stories: StoryModel[];
  isLastYear: boolean;
}

const Year = (props: YearProps) => {
  const { id, isLastYear, stories } = props;
  const yearRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 600;

  const getStoryId = (i: number) => {
    return 'year-' + id.toString() + '-' + i;
  };

  const onScroll = () => {
    if (yearRef.current) {
      const stickyHeight = isMobile ? 160 : 100;
      const yearRadius = isMobile ? 40 : 26;

      const winScroll = document.documentElement.scrollTop;
      const diff = Math.min(0, yearRef.current.offsetTop - stickyHeight - yearRadius - winScroll);
      const scrolled = Math.min(((diff * -1) / yearRef.current.offsetHeight) * 100, 100);

      setScrollTop(scrolled);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isLastYear) {
      window.addEventListener('scroll', onScroll);
    }

    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastYear]);

  return stories.length === 0 ? null : (
    <section
      id={'year-' + id.toString()}
      ref={yearRef}
      className={styles.sectionWrapper}
      style={{ '--yearHeight': isLastYear ? `${scrollTop}%` : '100%' } as CSSProperties}
    >
      <div className={styles.yearTrack}>
        <span className={styles.yearTitle}>{id.toString()}</span>
      </div>
      <div className={clsx(styles.storyWrapper, isLastYear && styles.lastYear)}>
        {stories.map((story, i) => (
          <Story
            id={getStoryId(i)}
            key={i}
            title={story.title}
            subtitle={story.subtitle}
            artifacts={story.forms}
            date={story.date}
            isLast={isLastYear && i === stories.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Year;
