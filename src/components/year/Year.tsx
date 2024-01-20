import { Fragment, lazy, Suspense } from 'react';
import Xarrow from 'react-xarrows';
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
      <Suspense>
        {stories.map((story, i) => (
          <Fragment key={i}>
            <Story
              id={getStoryId(i)}
              key={i}
              title={story.title}
              subtitle={story.subtitle}
              artifacts={story.forms}
              date={story.date}
            />
            {i !== 0 && (
              <Xarrow
                animateDrawing
                color="#ffff00"
                startAnchor="bottom"
                endAnchor="top"
                start={getStoryId(i - 1)}
                end={getStoryId(i)}
              />
            )}
          </Fragment>
        ))}
      </Suspense>
    </section>
  );
};

export default Year;
