export enum ArtifactType {
  Paragraph = 'paragraph',
  Image = 'image',
  Quote = 'quote',
  Highlight = 'highlight',
  Popout = 'popout',
}

export interface ArtifactProps {
  className: string;
  content: string;
  type: ArtifactType;
}

const Artifact = (props: ArtifactProps) => {
  const { className, content, type } = props;

  const getImgSrc = (src: string) => {
    return require(`../../content/timelineImages/${src}`);
  };

  return (
    <div className={className}>
      {type === ArtifactType.Image ? (
        <img src={getImgSrc(content)} />
      ) : (
        <div>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Artifact;
