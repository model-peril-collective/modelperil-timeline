import { LegacyRef, forwardRef } from 'react';
import clsx from 'clsx';
import styles from './Artifact.module.scss';

export enum ArtifactType {
  Paragraph = 'paragraph',
  Image = 'image',
  Quote = 'quote',
  Highlight = 'highlight',
  Popout = 'popout',
}

export interface ArtifactProps {
  className?: string;
  content: string;
  type: ArtifactType;
}

const Artifact = forwardRef(function Artifact(
  props: ArtifactProps,
  ref: LegacyRef<HTMLDivElement> | undefined
) {
  const { className = '', content, type } = props;

  const getImgSrc = (src: string) => {
    return require(`../../content/timelineImages/${src}`);
  };

  const getImgPosition = () => {
    return Math.random() < 0.5 ? styles.imageLeft : styles.imageRight;
  };

  return (
    <div ref={ref} className={clsx(className, styles.wrapper)}>
      {type === ArtifactType.Image ? (
        <img className={getImgPosition()} src={getImgSrc(content)} />
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
});

export default Artifact;
