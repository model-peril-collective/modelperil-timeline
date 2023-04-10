import { useEffect, useState, useRef } from 'react';
import Header from '../header/Header';
import Article from '../article/Article';
import Timeline from '../timeline/Timeline';
import './App.css';

import timelineText from '../../content/timelineText.json';

const App = () => {
  const containerRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef]);

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
      <Timeline />
      <div className="content">
        <Header />
        {/* Andres focus */}
        {/* <Article inView={isIntersecting} /> */}
        <Article
          inView={isIntersecting}
          article={timelineText.articles[0]}
          side="right"
          ref={containerRef}
        />
        <Article inView={isIntersecting} article={timelineText.articles[1]} />
        {/* <Article inView={isIntersecting} side="right" /> */}

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
