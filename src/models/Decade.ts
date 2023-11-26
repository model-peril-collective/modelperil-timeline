import { Year } from './index';

export interface Decade {
  range: {
    start: number;
    end: number;
  };
  title: string;
  years: Year[];
}
