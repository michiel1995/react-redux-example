import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';

import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.Node,
};

const Layout = ({ children }: LayoutProps) => <div className={styles.layout}>{children}</div>;
const LayoutSplit = ({ children }: LayoutProps) => (
  <div className={styles.layoutSplit}>{children}</div>
);
const LayoutContent = ({ children }: LayoutProps) => (
  <div className={styles.layoutContent}>{children}</div>
);

const LayoutWithStyles = withStyles(styles)(Layout);
LayoutWithStyles.Split = withStyles(styles)(LayoutSplit);
LayoutWithStyles.Content = withStyles(styles)(LayoutContent);
export default LayoutWithStyles;
