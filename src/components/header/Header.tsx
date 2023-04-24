import { useInView } from 'react-intersection-observer';
import { classNames } from '../../utils/Utils';
import './Header.css';

import logo from '../../assets/logo.png';

const Header = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <header ref={ref} className={classNames('header-wrapper', inView && 'visible')}>
      <img className="header-logo" src={logo} />
      <h1 className="header-title">
        <span className="header-name">Model Peril</span> Timeline
      </h1>
    </header>
  );
};

export default Header;
