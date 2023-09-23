import { useRef } from 'react';
import LeaderLine from 'leader-line-new';
import Header from '../header/Header';
import Article, { Piece } from '../article/Article';
import './App.scss';

import timelineText from '../../content/timelineText.json';

const App = () => {
  const lineOne = useRef<LeaderLine>();

  return (
    <div className="app">
      <div className="content">
        <Header />
        {timelineText.articles.map((piece, index) => {
          return <Article key={index} article={piece as Piece} />;
        })}
      </div>
    </div>
  );
};

export default App;
