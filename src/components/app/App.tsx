import { useEffect } from 'react';
import Header from '../header/Header';
import Period from '../period/Period';
import Timeline from '../timeline/Timeline';
import './App.css';

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
      <Timeline />
      <div className="content">
        <Header />

        {/* Andres focus */}
        <Period />
        <Period side="right" />
        <Period />
        <Period side="right" />

        {/* Jeff focus */}
        <Period />
        <Period side="right" />
        <Period />
        <Period side="right" />
      </div>
    </div>
  );
};

export default App;
