import clsx from 'clsx';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { lazy, useEffect, useRef } from 'react';
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
  const storyRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (animationRefs?.current.length > 0) {
        animationRefs.current.forEach((ref) => {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: ref,
              start: 'top bottom-=200',
              end: 'top center',
              scrub: true,
              // markers: true,
            },
            x: '50px',
            autoAlpha: 0,
          });
        })
      }

    }, storyRef); // <- selector scoping
    return () => ctx.revert();
  }, []);

  const addtoRefs = (el: HTMLDivElement) => {
    if (el && !animationRefs.current.includes(el)) {
      animationRefs.current.push(el);
    }
  };

  const renderDate = (date: Date) => {
    let content = date.year;

    if (date.month && date.month.length > 0) content += `, ${date.month}`;
    if (date.day && date.day.length > 0) content += ` ${date.day}`;

    return content;
  };

  return (
    <article ref={storyRef} id={id} className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.heading}>
          <div className={clsx(styles.titleWrapper)}>
            <span ref={addtoRefs} className={styles.date}>{renderDate(date)}</span>
            {title && <div ref={addtoRefs} className={clsx(styles.title)}>{title}</div>}
          </div>
          {subtitle && <span ref={addtoRefs} className={clsx(styles.subtitle)}>{subtitle}</span>}
        </header>
        <div className={styles.artifactsContainer}>
          {artifacts.map((a, i) => (
            <Artifact
              key={i}
              ref={addtoRefs}
              type={a.type as ArtifactType}
              content={a.content}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Story;
