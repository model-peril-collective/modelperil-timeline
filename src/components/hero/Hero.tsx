import { useInView } from 'react-intersection-observer';
import { classNames } from '../../utils/Utils';
import './Hero.scss';

import logo from '../../assets/logo.png';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <header ref={ref} className={classNames('hero-wrapper', inView && 'visible')}>
      <img className="hero-logo" src={logo} alt="Model Peril logo" />
      <h1 className="hero-title">
        <span className="hero-name">Model Peril</span> Timeline
      </h1>
    </header>
  );
};

export default Hero;
