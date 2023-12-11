import { lazy, Suspense } from 'react';
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

  return (
    <section id={'year-' + id.toString()} className={styles.sectionWrapper}>
      <Suspense>
        {stories.map((story, i) => (
          <Story
            key={i}
            title={story.title}
            subtitle={story.subtitle}
            artifacts={story.forms}
            date={story.date}
          />
        ))}
      </Suspense>
    </section>
  );
};

export default Year;
