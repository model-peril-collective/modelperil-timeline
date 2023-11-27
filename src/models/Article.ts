import { Artifact } from './index';

export interface Article {
  artifacts: Artifact[];
  date: {
    day?: string;
    month?: string;
    year: string;
  };
  subtitle?: string;
  title: string;
}
