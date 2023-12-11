import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import styles from './Hero.module.scss';

import logo from '../../assets/logo.png';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <header ref={ref} className={clsx(styles.wrapper, inView && styles.visible)}>
      <img className={styles.logo} src={logo} alt="Model Peril logo" />
      <h1 className={styles.title}>
        <span className={styles.name}>Model Peril</span> Timeline
      </h1>
    </header>
  );
};

export default Hero;
