/* eslint-disable react/no-unescaped-entities */
import { useInView } from 'react-intersection-observer';
import { classNames } from '../../utils/Utils';
import './Article.css';

export enum PieceType {
  Full = 'full',
  Image = 'image',
  Quote = 'quote',
}
export interface Piece {
  content: string;
  date: string;
  description?: string;
  speaker?: string;
  title?: string;
  type: PieceType;
}

interface ArticleProps {
  side?: 'left' | 'right';
  article: Piece;
  handleInView?: () => void;
  threshold?: number | number[];
}

const Article = (props: ArticleProps) => {
  const { article, threshold = 0.3 } = props;

  let sampleImgSrc: string;
  if (article?.type === 'image') {
    sampleImgSrc = require(`../../content/timelineImages/${article.content}`);
  }

  const { ref, inView } = useInView({
    threshold,
  });

  const handleContent = (content: string) => {
    let convertedStr = content;

    convertedStr = content
      .replaceAll('<highlight>', '<span class="highlight">')
      .replaceAll('</highlight>', '</span>');

    return convertedStr;
  };

  const renderArticleContent = (article: Piece) => {
    const { content, speaker, type } = article;

    switch (type) {
      case PieceType.Full:
        return (
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: handleContent(content) }}
          />
        );
      case PieceType.Image:
        return <img src={sampleImgSrc} />;
      case PieceType.Quote:
        return (
          <div className={classNames('article-quote')}>
            <blockquote className={classNames('article-quote_content')}>{content}</blockquote>
            <p className={classNames('article-quote_speaker')}>{speaker}</p>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <>
      <div ref={ref} className={classNames('article-wrapper', inView ? 'visible' : '')}>
        <header className="article-header">
          <h2 className="article-header_title">{article.title}</h2>
        </header>
        {renderArticleContent(article)}
      </div>
    </>
  );
};

export default Article;
