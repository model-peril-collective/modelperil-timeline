/**
 * Standard Imports
 */
import Hero from './hero/Hero';

/**
 * Object which exports functions that import components for lazy loading
 */
const ComponentFactory = {
  ArticleAsync: () => import('./article/Article'),
  ArtifactAsync: () => import('./artifact/Artifact'),
  StoryAsync: () => import('./story/Story'),
  YearAsync: () => import('./year/Year'),
};

export {
  ComponentFactory,
  Hero
};