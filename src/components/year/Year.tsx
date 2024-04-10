import { lazy, useRef } from 'react';
import { Story as StoryModel } from '../../models';
import { ComponentFactory } from '..';
import styles from './Year.module.scss';

const Story = lazy(() => ComponentFactory.StoryAsync());

export interface YearProps {
  id: string;
  stories: StoryModel[];
}

const Year = (props: YearProps) => {
  const { id, stories } = props;
  const yearRef = useRef<HTMLDivElement>(null);

  console.log(id, stories.length);

  const getStoryId = (i: number) => {
    return 'year-' + id.toString() + '-' + i;
  };

  return (
    stories.length === 0 ? null : (
      <section id={'year-' + id.toString()} ref={yearRef} className={styles.sectionWrapper}>
        <div className={styles.yearTrack}>
          <span className={styles.yearTitle}>{id.toString()}</span>
        </div>
        <div className={styles.storyWrapper}>
          {stories.map((story, i) => (
            <Story
              id={getStoryId(i)}
              key={i}
              title={story.title}
              subtitle={story.subtitle}
              artifacts={story.forms}
              date={story.date}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Year;
