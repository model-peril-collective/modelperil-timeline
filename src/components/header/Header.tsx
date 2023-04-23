import { classNames } from '../../utils/Utils';
import './Header.css';
import { useInView } from 'react-intersection-observer';

const logo = require('../../assets/logo.png');

const Header = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
  });

  return (
    <header ref={ref} className={classNames('header-wrapper', inView ? 'visible' : 'hidden')}>
      <img className="header-logo" src={logo} />
      <h1 className="header-title">
        <span className="header-name">Model Peril</span> Timeline
      </h1>
    </header>
  );
};

export default Header;
