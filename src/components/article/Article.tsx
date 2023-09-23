import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { classNames } from '../../utils/Utils';
import './Article.scss';

export enum PieceType {
  Full = 'full',
  Image = 'image',
  Quote = 'quote',
}

export interface Date {
  year: string;
  month?: string;
  day?: string;
}
export interface Piece {
  content: string;
  date: Date;
  description?: string;
  speaker?: string;
  title?: string;
  type: PieceType;
}

export interface ArticleProps {
  side?: string;
  article: Piece;
  handleInView?: () => void;
}

const Article = (props: ArticleProps) => {
  const { article, side = 'left' } = props;
  const articleRef = useRef<HTMLDivElement>(null);

  let sampleImgSrc: string;
  if (article?.type === 'image') {
    sampleImgSrc = require(`../../content/timelineImages/${article.content}`);
  }

  const handleContent = (content: string) => {
    let convertedStr = content;

    convertedStr = content
      .replaceAll('<highlight>', '<span class="highlight">')
      .replaceAll('</highlight>', '</span>');

    return convertedStr;
  };

  const renderDate = (date: Date) => {
    let result = date.year;

    if (date.month && date.month.length > 0) result += `, ${date.month}`;

    if (date.day && date.day.length > 0) result += ` ${date.day}`;

    return <p className={classNames('article-aside_date')}>{result}</p>;
  };

  const renderArticleContent = (article: Piece) => {
    const { content, speaker, type } = article;

    switch (type) {
      case PieceType.Full:
        return (
          <div
            className={classNames('article-body')}
            dangerouslySetInnerHTML={{ __html: handleContent(content) }}
          />
        );
      case PieceType.Image:
        return (
          <div className={classNames('article-body', 'image')}>
            <img src={sampleImgSrc} />
          </div>
        );
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from('.article-content', {
        autoAlpha: 0,
        x: 400,
        y: 200,
        scrollTrigger: {
          end: 'top center-=5%',
          markers: true,
          scrub: true,
          start: 'top bottom-=10%',
          trigger: '.article-content',
        },
      });
    }, articleRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={articleRef} className={classNames('article-wrapper', side)}>
      <aside className="article-aside">{renderDate(article.date)}</aside>
      <article className={classNames('article-content')}>
        <header className="article-header">
          <h2 className="article-header_title">{article.title}</h2>
        </header>
        {renderArticleContent(article)}
      </article>
    </div>
  );
};

export default Article;
