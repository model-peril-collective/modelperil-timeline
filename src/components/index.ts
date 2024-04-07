/**
 * Standard Imports
 */
import { ArtifactType } from './artifact/Artifact';

/**
 * Object which exports functions that import components for lazy loading
 */
const ComponentFactory = {
  ArticleAsync: () => import(/* webpackChunkName: "Article" */ './article/Article'),
  ArtifactAsync: () => import(/* webpackChunkName: "Artifact" */ './artifact/Artifact'),
  HeroAsync: () => import(/* webpackChunkName: "Hero" */ './hero/Hero'),
  LineTreeAsync: () => import(/* webpackChunkName: "LineTree" */ './linetree/LineTree'),
  StoryAsync: () => import(/* webpackChunkName: "Story" */ './story/Story'),
  TimelineAsync: () => import(/* webpackChunkName: "Timeline" */ './timeline/Timeline'),
  YearAsync: () => import(/* webpackChunkName: "Year" */ './year/Year'),
};

export { ArtifactType, ComponentFactory };
