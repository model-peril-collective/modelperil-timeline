import Header from '../header/Header';
import Period from '../period/Period';
import Timeline from '../timeline/Timeline';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div role="presentation" className="canvas">
        <Timeline />
      </div>
      <div className="content">
        <Header />
        <Period />
        <Period />
        <Period />
        <Period />
      </div>
    </div>
  );
};

export default App;
