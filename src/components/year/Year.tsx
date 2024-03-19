import { lazy } from 'react';
import { Story as StoryModel } from '../../models';
import { ComponentFactory } from '..';
import styles from './Year.module.scss';

const Story = lazy(() => ComponentFactory.StoryAsync());

export interface YearProps {
  stories: StoryModel[];
  id: string;
}

const Year = (props: YearProps) => {
  const { stories, id } = props;

  const getStoryId = (i: number) => {
    return 'year-' + id.toString() + '-' + i;
  };

  return (
    <section id={'year-' + id.toString()} className={styles.sectionWrapper}>
      <span className={styles.sectionTitle}>{id.toString()}</span>
      <div>
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
  );
};

export default Year;
