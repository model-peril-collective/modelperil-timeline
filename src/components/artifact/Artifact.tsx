export enum ArtifactType {
  Paragraph = 'paragraph',
  Image = 'image',
  Quote = 'quote',
  Highlight = 'highlight',
  Popout = 'popout'
}

export interface ArtifactProps {
  type: ArtifactType;
  content: string;
}

const Artifact = (props: ArtifactProps) => {
  const { content, type } = props;

  const getImgSrc = (src: string) => {
    return require(`../../content/timelineImages/${src}`);
  }

  return (
    <li>
      { type === ArtifactType.Image ? (
        <img src={getImgSrc(content)} />
      ) : (
        <div>
          <p>{content}</p>
        </div>
      )}
    </li>
  );
};

export default Artifact;
