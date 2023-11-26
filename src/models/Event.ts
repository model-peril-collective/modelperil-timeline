import { Artifact } from './index';

export interface Event {
  artifacts: Artifact[];
  date: {
    day?: string;
    month?: string;
    year: string;
  };
  subtitle?: string;
  title: string;
}
