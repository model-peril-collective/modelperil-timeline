import clsx from 'clsx';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { CSSProperties, lazy, useEffect, useRef } from 'react';
import { Artifact as ArtifactModel, Date } from '../../models';
import { ComponentFactory, ArtifactType } from '../index';
import styles from './Story.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Artifact = lazy(() => ComponentFactory.ArtifactAsync());

export interface StoryProps {
  artifacts: ArtifactModel[];
  date: Date;
  id?: string;
  isLast?: boolean;
  subtitle?: string;
  title: string;
}

const Story = (props: StoryProps) => {
  const { artifacts, date, id, isLast = false, subtitle, title } = props;
  const storyRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
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
              start: 'top center+=25%',
              end: 'top center-=5%',
              scrub: 0.5,
              // markers: true,
            },
            x: '-120px',
            autoAlpha: 0,
          });
        });
      }
    }, storyRef);
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

  const renderArtifacts = (list: ArtifactModel[]) => {
    const hasImage = list.some((story) => story.type === ArtifactType.Image);

    if (hasImage) {
      const textList: ArtifactModel[] = [];
      const imgList: ArtifactModel[] = [];

      list.forEach((a) => {
        if (a.type !== ArtifactType.Image) textList.push(a);
        else imgList.push(a);
      });

      return (
        <>
          {textList.map((a, i) => (
            <Artifact key={i} ref={addtoRefs} type={a.type as ArtifactType} content={a.content} />
          ))}
          <div className={styles.imgList}>
            {imgList.map((a, i) => (
              <Artifact key={i} ref={addtoRefs} type={ArtifactType.Image} content={a.content} />
            ))}
          </div>
        </>
      );
    } else {
      return list.map((a, i) => (
        <Artifact key={i} ref={addtoRefs} type={a.type as ArtifactType} content={a.content} />
      ));
    }
  };

  return (
    <article ref={storyRef} id={id} className={clsx(styles.container, isLast && styles.lastStory)}>
      <div className={styles.contentWrapper}>
        <header ref={headingRef} className={styles.heading}>
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
        <div
          className={styles.artifactsContainer}
          style={{ '--headingPosition': `${headingRef.current?.offsetHeight}px` } as CSSProperties}
        >
          {renderArtifacts(artifacts)}
        </div>
      </div>
    </article>
  );
};

export default Story;
