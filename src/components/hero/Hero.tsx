import clsx from 'clsx';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';
import styles from './Hero.module.scss';

import logo from '../../assets/logo.png';

export type HeroProps = HTMLAttributes<HTMLDivElement>

const Hero = forwardRef(function Hero(
  props: HeroProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <header ref={ref} className={clsx(styles.wrapper, styles.visible)}>
      <img className={styles.logo} src={logo} alt="Model Peril logo" />
      <h1 className={styles.title}>
        <span className={styles.name}>A Model Minority Yellow Peril Timeline</span>
      </h1>
    </header>
  );
});

export default Hero;
