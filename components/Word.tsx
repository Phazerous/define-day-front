interface props {
  title: string;
  onClick: () => void;
}

import styles from '../styles/wordTable.module.scss';

export default function Word({ title, onClick }: props) {
  return (
    <>
      <div
        className={styles.word}
        onClick={onClick}>
        <span>{title}</span>
      </div>
    </>
  );
}
