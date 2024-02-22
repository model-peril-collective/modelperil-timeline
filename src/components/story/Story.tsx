import clsx from 'clsx';
import { createRef, lazy, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Artifact as ArtifactModel, Date } from '../../models';
import { ComponentFactory, ArtifactType } from '../index';
import styles from './Story.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Artifact = lazy(() => ComponentFactory.ArtifactAsync());

export interface StoryProps {
  id?: string;
  artifacts: ArtifactModel[];
  date: Date;
  subtitle?: string;
  title: string;
}

const Story = (props: StoryProps) => {
  const { artifacts, date, id, subtitle, title } = props;
  const storyRef = createRef<HTMLDivElement>();

  const renderDate = (date: Date) => {
    let content = date.year;

    if (date.month && date.month.length > 0) content += `, ${date.month}`;
    if (date.day && date.day.length > 0) content += ` ${date.day}`;

    return content;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.scroll-trigger', {
        scrollTrigger: {
          trigger: '.scroll-trigger',
          start: 'top bottom-=200',
          end: 'top center',
          scrub: true,
          markers: true,
        },
        x: 300,
        autoAlpha: 0,
      });
    }, storyRef); // <- selector scoping
    return () => ctx.revert();
  }, [storyRef]);

  return (
    <article ref={storyRef} id={id} className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.heading}>
          <div className={clsx(styles.titleWrapper)}>
            <span className={styles.date}>{renderDate(date)}</span>
            <div className={clsx(styles.title, 'scroll-trigger')}>{title}</div>
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
