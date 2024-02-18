import { Fragment, lazy, Suspense } from 'react';
import { Story as StoryModel } from '../../models';
import { ComponentFactory } from '..';
import styles from './Year.module.scss';
import { Xwrapper } from 'react-xarrows';

const LineTree = lazy(() => ComponentFactory.LineTreeAsync());
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
      <Xwrapper>
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
                <LineTree
                  color="#00ffff"
                  start={getStoryId(i - 1)}
                  end={getStoryId(i)}
                />
              )}
            </Fragment>
          ))}
        </Suspense>
      </Xwrapper>
    </section>
  );
};

export default Year;
