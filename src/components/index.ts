/**
 * Standard Imports
 */
import { ArtifactType } from './artifact/Artifact';

/**
 * Object which exports functions that import components for lazy loading
 */
const ComponentFactory = {
  ArticleAsync: () => import('./article/Article'),
  ArtifactAsync: () => import('./artifact/Artifact'),
  HeroAsync: () => import('./hero/Hero'),
  LineTreeAsync: () => import ('./linetree/LineTree'),
  StoryAsync: () => import('./story/Story'),
  TimelineAsync: () => import('./timeline/Timeline'),
  YearAsync: () => import('./year/Year'),
};

export { ArtifactType, ComponentFactory };
