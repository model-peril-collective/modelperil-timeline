import { Story } from './index';

export interface Year {
  id: number;
  articles: Story[];
  position: 'left' | 'right';
}
