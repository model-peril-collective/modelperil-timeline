/* eslint-disable react/no-unescaped-entities */
import './Article.css';
import { classNames } from '../../utils/Utils';
import { useEffect, forwardRef } from 'react';

interface ArticleProps {
  side?: 'left' | 'right';
  inView: boolean;
  article?: any;
}

export type Ref = HTMLDivElement;

const Article = forwardRef<Ref, ArticleProps>(function Article(props, ref) {
  const { side = 'left', inView = false, article } = props;

  useEffect(() => {
    console.log(article);
  });

  return (
    <>
      <div ref={ref} className={classNames('period-wrapper', side, inView ? 'visible' : '')}>
        <header className="period-header">
          <h2 className="period-header_title">1930</h2>
        </header>
        <button className="period-button">Slide</button>
        {article.type === 'full' && <div className="period-body">{article && article.content}</div>}
        {article.type === 'image' && <img src="/content/timelineImages/1907Deport.png" />}
      </div>
    </>
  );
});

export default Article;
