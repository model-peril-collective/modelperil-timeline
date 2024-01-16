import { lazy, Suspense } from 'react';
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

  return (
    <section id={'year-' + id.toString()} className={styles.sectionWrapper}>
      <Suspense>
        {stories.map((story, i) => (
          <>
            <div id={'year-' + id.toString() + '-' + i + '-pre'} style={{ position: 'absolute', left: 0, width: 0, height: 0, top: 0 }} />
            <Story
              id={'year-' + id.toString() + '-' + i}
              key={i}
              title={story.title}
              subtitle={story.subtitle}
              artifacts={story.forms}
              date={story.date}
            />
            <Xarrow
              animateDrawing
              color="#ffff00"
              start={'year-' + id.toString() + '-' + i + '-pre'}
              startAnchor="bottom"
              end={'year-' + id.toString() + '-' + i}
              endAnchor="top"
            />
          </>
        ))}
      </Suspense>
    </section>
  );
};

export default Year;
