import { Artifact } from './index';

export interface Story {
  forms: Artifact[];
  date: {
    day?: string;
    month?: string;
    year: string;
  };
  subtitle?: string;
  title: string;
}
