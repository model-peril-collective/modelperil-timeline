import clsx from 'clsx';
import { createRef, lazy } from 'react';
import { Artifact as ArtifactModel, Date } from '../../models';
import { ComponentFactory, ArtifactType } from '../index';
import styles from './Story.module.scss';

const Artifact = lazy(() => ComponentFactory.ArtifactAsync());

export interface StoryProps {
  artifacts: ArtifactModel[];
  date: Date;
  subtitle?: string;
  title: string;
}

const Story = (props: StoryProps) => {
  const { artifacts, date, subtitle, title } = props;
  const storyRef = createRef<HTMLDivElement>();

  const renderDate = (date: Date) => {
    let content = date.year;

    if (date.month && date.month.length > 0) content += `, ${date.month}`;
    if (date.day && date.day.length > 0) content += ` ${date.day}`;

    return content;
  };

  return (
    <article ref={storyRef} className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.heading}>
          <div className={clsx(styles.titleWrapper)}>
            <span className={styles.date}>{renderDate(date)}</span>
            <h2 className={clsx(styles.title, 'scroll-trigger')}>{title}</h2>
          </div>
          {subtitle && <span className={clsx(styles.subtitle, 'scroll-trigger')}>{subtitle}</span>}
        </header>
        <div className={styles.artifactsContainer}>
          {artifacts.map((a, i) => (
            <Artifact key={i} type={a.type as ArtifactType} content={a.content} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Story;
