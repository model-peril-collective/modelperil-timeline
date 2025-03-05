/**
 * Standard Imports
 */
import { ArtifactType } from './artifact/Artifact';

/**
 * Object which exports functions that import components for lazy loading
 */
const ComponentFactory = {
  ArtifactAsync: () => import(/* webpackChunkName: "Artifact" */ './artifact/Artifact'),
  FooterAsync: () => import(/* webpackChunkName: "Footer" */ './footer/Footer'),
  HeroAsync: () => import(/* webpackChunkName: "Hero" */ './hero/Hero'),
  SpotifyAsync: () => import(/* webpackChunkName: "Spotify" */ './spotify/Spotify'),
  StoryAsync: () => import(/* webpackChunkName: "Story" */ './story/Story'),
  TimelineAsync: () => import(/* webpackChunkName: "Timeline" */ './timeline/Timeline'),
  YearAsync: () => import(/* webpackChunkName: "Year" */ './year/Year'),
};

export { ArtifactType, ComponentFactory };
