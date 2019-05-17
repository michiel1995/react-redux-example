import React from 'react';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.Node,
};

const Layout = ({ children }: LayoutProps) => <div className={styles.layout}>{children}</div>;
Layout.Split = ({ children }: LayoutProps) => <div className={styles.layoutSplit}>{children}</div>;
Layout.Content = ({ children }: LayoutProps) => (
  <div className={styles.layoutContent}>{children}</div>
);

export default Layout;
