import React from 'react';

import withStyles from 'isomorphic-style-loader/withStyles';
import styles from './LogoBlock.module.scss';
import WineBottle from '../assets/wine-bottle.svg';
import Logo from '../assets/w-4-p-vf.svg';

const LogoBlock = () => (
  <div className={styles.logoBlock}>
    <div>
      <Logo className={styles.logo} />
      <h6 className={styles.subtitle}>Caviste & Horeca</h6>
    </div>
    <WineBottle className={styles.wineBottle} />
  </div>
);
export default withStyles(styles)(LogoBlock);
