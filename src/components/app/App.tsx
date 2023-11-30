import { useEffect, useState } from 'react';
import Hero from '../hero/Hero';
import Article, { Piece } from '../article/Article';
import timelineText from '../../content/timelineText.json';
import contentJson from '../../content/content.json';
import { Story } from '../../models';
import './App.scss';

const App = () => {
  const [years, setYears] = useState<{ [key: string]: Story[] }>({});

  useEffect(() => {
    contentJson.stories.forEach((story: Story) => {
      setYears((prevYears) => {
        console.log(prevYears[story.date.year]?.some((obj) => obj === story));
        return {
          ...prevYears,
          [story.date.year]: [...(prevYears[story.date.year] ?? []), story],
        };
      });
    });
  }, []);

  useEffect(() => {
    // TODO: potentially stories sort within the year here
    console.log(years);
  }, [years]);

  return (
    <div className="app">
      <div className="content">
        <Hero />
        {timelineText.articles.map((piece, index) => {
          return <Article key={index} article={piece as Piece} />;
        })}
      </div>
    </div>
  );
};

export default App;
