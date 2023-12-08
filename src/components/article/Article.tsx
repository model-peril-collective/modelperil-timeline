import clsx from 'clsx';
import { createRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  content: string | string[];
  date: Date;
  description?: string;
  speaker?: string;
  title?: string;
  type: PieceType;
}

export interface ArticleProps {
  article: Piece;
  handleInView?: () => void;
  side?: string;
}

const Article = (props: ArticleProps) => {
  const { article, side = 'left' } = props;
  const articleRef = createRef<HTMLDivElement>();

  let sampleImgSrc: string;
  if (article?.type === 'image') {
    sampleImgSrc = require(`../../content/timelineImages/${article.content}`);
  }

  const handleContent = (content: string | string[]): string => {
    let convertedStr = '';

    if (typeof content === 'string') {
      convertedStr = content
        .replaceAll('<highlight>', '<span class="highlight">')
        .replaceAll('</highlight>', '</span>');
    } else if (typeof content === 'object') {
      convertedStr = content.toString();
    }

    return convertedStr;
  };

  const renderDate = (date: Date) => {
    let result = date.year;

    if (date.month && date.month.length > 0) result += `, ${date.month}`;

    if (date.day && date.day.length > 0) result += ` ${date.day}`;

    return <p className={clsx('article-aside_date')}>{result}</p>;
  };

  const renderArticleContent = (article: Piece) => {
    const { content, speaker, type } = article;

    switch (type) {
      case PieceType.Full:
        return (
          <div
            className={clsx('article-body')}
            dangerouslySetInnerHTML={{ __html: handleContent(content) }}
          />
        );
      // TODO: refactor image into a child component of the article body
      case PieceType.Image:
        return (
          <div className={clsx('article-body', 'image')}>
            <img src={sampleImgSrc} />
          </div>
        );
      // TODO: refactor quote into a child component of the article-body
      case PieceType.Quote: // no example of standalone quote
        return (
          <div className={clsx('article-quote')}>
            <blockquote className={clsx('article-quote_content')}>{content}</blockquote>
            <p className={clsx('article-quote_speaker')}>{speaker}</p>
          </div>
        );
      default:
        return <></>;
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const scrollTriggerOptions = (trigger: string) => {
        return {
          end: 'top center+=15%',
          markers: true,
          scrub: true,
          start: 'top bottom-=5%',
          trigger: trigger,
        };
      };

      gsap.from('.article-content', {
        autoAlpha: 0,
        stagger: 1.0,
        scale: 0.7,
        x: 300,
        scrollTrigger: scrollTriggerOptions('.article-content'),
      });
    }, articleRef);

    return () => ctx.revert();
  }, [articleRef]);

  return (
    <div ref={articleRef} className={clsx('article-wrapper', side)}>
      <aside className="article-aside">{renderDate(article.date)}</aside>
      <article className={clsx('article-content')}>
        {article.title && article.title.length > 0 && (
          <header className="article-header">
            <h2 className="article-header_title">{article.title}</h2>
          </header>
        )}
        {renderArticleContent(article)}
      </article>
    </div>
  );
};

export default Article;
