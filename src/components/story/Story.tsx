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
  artifacts: ArtifactModel[];
  date: Date;
  id?: string;
  subtitle?: string;
  title: string;
}

const Story = (props: StoryProps) => {
  const { artifacts, date, id, subtitle, title } = props;
  const storyRef = useRef<HTMLDivElement>(null);
  const animationRefs = useRef<HTMLDivElement[]>([]);

  const addtoRefs = (el: HTMLDivElement) => {
    if (el && !animationRefs.current.includes(el)) {
      animationRefs.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (animationRefs?.current.length > 0) {
        animationRefs.current.forEach((ref) => {
          gsap.from(ref, {
            scrollTrigger: {
              trigger: ref,
              start: 'top bottom-=5%',
              end: 'top center+=10%',
              scrub: 0.5,
              // markers: true,
            },
            x: '50px',
            autoAlpha: 0,
          });
        });
      }
    }, storyRef); // <- selector scoping
    return () => ctx.revert();
  }, [animationRefs]);

  const renderDate = (date: Date) => {
    if (!date.month && !date.day) return null;

    let result = '';

    if (date.month && date.month.length > 0) result = date.month;
    if (date.day && date.day.length > 0) result += ` ${date.day}`;

    return (
      <span ref={addtoRefs} className={styles.date}>
        {result}
      </span>
    );
  };

  return (
    <article ref={storyRef} id={id} className={styles.container}>
      <div className={styles.contentWrapper}>
        <header className={styles.heading}>
          <div className={clsx(styles.titleWrapper)}>
            {renderDate(date)}
            {title && (
              <div ref={addtoRefs} className={clsx(styles.title)}>
                {title}
              </div>
            )}
          </div>
          {subtitle && (
            <span ref={addtoRefs} className={clsx(styles.subtitle)}>
              {subtitle}
            </span>
          )}
        </header>
        <div className={styles.artifactsContainer}>
          {artifacts.map((a, i) => (
            <Artifact key={i} ref={addtoRefs} type={a.type as ArtifactType} content={a.content} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Story;
