import { ReactNode } from 'react';
import styles from './sidebar.module.scss';

interface sidebarProps {
  children: ReactNode;
}

export default function Sidebar({ children }: sidebarProps) {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.wrapper}>{children}</div>
      </aside>
    </>
  );
}
