import { Artifact as ArtifactModel } from '../../models';
import Artifact, { ArtifactType } from '../artifact/Artifact';

export interface StoryProps {
  artifacts: ArtifactModel[];
  subtitle?: string;
  title: string;
}

const Story = (props: StoryProps) => {
  const { artifacts, subtitle, title } = props;

  const renderArtifact = (a: ArtifactModel) => {
    return <Artifact type={a.type as ArtifactType} content={a.content} />;
  };

  return (
    <article>
      <header>
        <h2>{title}</h2>
        {subtitle && <span>{subtitle}</span>}
      </header>
      {artifacts.map(a => renderArtifact(a))}
    </article>
  );
};

export default Story;
