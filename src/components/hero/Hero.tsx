import clsx from 'clsx';
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';
import styles from './Hero.module.scss';

import whiteM from '../../assets/logo/white_M_logo.png';
import whiteO from '../../assets/logo/white_O_logo.png';
import whiteD from '../../assets/logo/white_D_logo.png';
import whiteE from '../../assets/logo/white_E_logo.png';
import whiteL from '../../assets/logo/white_L_logo.png';
import yellowP from '../../assets/logo/yellow_P_logo.png';
import yellowE from '../../assets/logo/yellow_E_logo.png';
import yellowR from '../../assets/logo/yellow_R_logo.png';
import yellowI from '../../assets/logo/yellow_I_logo.png';
import yellowL from '../../assets/logo/yellow_L_logo.png';

export type HeroProps = HTMLAttributes<HTMLDivElement>;

const LogoModel = () => {
  return (
    <div className={clsx(styles.logoWord, styles.white)}>
      <img className={clsx(styles.letter, styles.whiteM)} src={whiteM} alt="Model Peril logo" />
      <img className={styles.letter} src={whiteO} alt="Model Peril logo" />
      <img className={styles.letter} src={whiteD} alt="Model Peril logo" />
      <img className={clsx(styles.letter, styles.whiteE)} src={whiteE} alt="Model Peril logo" />
      <img className={styles.letter} src={whiteL} alt="Model Peril logo" />
    </div>
  );
};

const LogoPeril = () => {
  return (
    <div className={clsx(styles.logoWord, styles.yellow)}>
      <img className={styles.letter} src={yellowP} alt="Model Peril logo" />
      <img className={clsx(styles.letter, styles.yellowE)} src={yellowE} alt="Model Peril logo" />
      <img className={styles.letter} src={yellowR} alt="Model Peril logo" />
      <img className={styles.letter} src={yellowI} alt="Model Peril logo" />
      <img className={styles.letter} src={yellowL} alt="Model Peril logo" />
    </div>
  );
};

const Hero = forwardRef(function Hero(props: HeroProps, ref: ForwardedRef<HTMLElement>) {
  return (
    <header ref={ref} className={clsx(styles.wrapper, styles.visible)} {...props}>
      <div className={styles.logoWrapper}>
        <LogoModel />
        <LogoPeril />
      </div>
      <h1 className={styles.title}>
        <span className={styles.name}>A Model Minority Yellow Peril Timeline</span>
      </h1>
    </header>
  );
});

export default Hero;
