/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { classNames } from '../../utils/Utils';
import './Article.css';

interface ArticleProps {
  side?: 'left' | 'right';
  article?: any;
  handleInView?: () => void;
}

export type Ref = HTMLDivElement;

const Article = (props: ArticleProps) => {
  const { side = 'left', article } = props;

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log(side, inView);
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
};

export default Article;
