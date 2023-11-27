import { lazy, Suspense } from 'react';
import { Article as ArticleModel, Date } from '../../models';
import { ComponentFactory } from '..';

const Story = lazy(() => ComponentFactory.StoryAsync());

export interface YearProps {
  articles: ArticleModel[];
  id: number;
}

const Year = (props: YearProps) => {
  const { articles, id } = props;

  const renderDate = (date: Date) => {
    let content = date.year;
  
    if (date.month && date.month.length > 0) content += `, ${date.month}`;
  
    if (date.day) content += ` ${date.day}`;

    return content;
  };


  return (
    <div id={id.toString()}>
      <Suspense>
        {articles.map(article => (
          <>
            <span>{renderDate(article.date)}</span>
            <Story title={article.title} subtitle={article.subtitle} artifacts={article.artifacts} />
          </>
        ))}
      </Suspense>
    </div>
  );
};

export default Year;
