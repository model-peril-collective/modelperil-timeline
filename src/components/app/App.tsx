import { useEffect } from 'react';
import Header from '../header/Header';
import Article from '../article/Article';
import './App.css';

import timelineText from '../../content/timelineText.json';

const App = () => {
  useEffect(() => {
    document.body.style.setProperty('--scroll', '0%');

    const trackScroll = () => {
      document.body.style.setProperty(
        '--scroll',
        `${(100 * window.scrollY) / (document.body.offsetHeight - window.innerHeight)}%`
      );
    };

    window.addEventListener('scroll', trackScroll);

    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* <Timeline /> */}
      <div className="content">
        <Header />
        {/* Andres focus */}
        <Article article={timelineText.articles[0]} side="right" />
        <Article article={timelineText.articles[1]} />

        {/* Jeff focus */}
        {/* <Article inView={isIntersecting} /> */}
        {/* <Article inView={isIntersecting} side="right" /> */}
        {/* <Article inView={isIntersecting} /> */}
        {/* <Article inView={isIntersecting} side="right" /> */}
      </div>
    </div>
  );
};

export default App;
