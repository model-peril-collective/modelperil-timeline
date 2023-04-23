/* eslint-disable react/no-unescaped-entities */
import { useInView } from 'react-intersection-observer';
import { classNames } from '../../utils/Utils';
import './Article.css';

interface ArticleProps {
  side?: 'left' | 'right';
  article?: any;
  handleInView?: () => void;
  threshold?: number | number[];
}

export type Ref = HTMLDivElement;

const Article = (props: ArticleProps) => {
  const { article, threshold = 0.3 } = props;
  let sampleImgSrc;
  if (article.type === 'image') {
    sampleImgSrc = require(`../../content/timelineImages/${article.content}`);
  }

  const { ref, inView } = useInView({
    /* Optional options */
    threshold,
  });

  const handleContent = (content: string) => {
    let convertedStr = '';
    if (content.includes('<highlight>')) {
      convertedStr = content
        .replaceAll('<highlight>', '<span class="highlight">')
        .replaceAll('</highlight>', '</span>');
    }
    return convertedStr;
  };

  return (
    <>
      <div ref={ref} className={classNames('period-wrapper', inView ? 'visible' : '')}>
        <header className="period-header">
          <h2 className="period-header_title">1930</h2>
        </header>
        {article.type === 'full' && (
          <div
            className="period-body"
            dangerouslySetInnerHTML={{ __html: handleContent(article.content) }}
          />
        )}
        {article.type === 'image' && <img src={sampleImgSrc} />}
      </div>
    </>
  );
};

export default Article;
