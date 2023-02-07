import Word from './Word';

import styles from '../styles/wordTable.module.scss';
import IWord from '../interfaces/IWord';
import words from '../db/data';

interface props {
  onClick: (word: IWord) => void;
}

export default function WordTable({ onClick }: props) {
  return (
    <>
      <div className={styles.table}>
        {words.map((word, idx) => (
          <Word
            key={idx}
            title={word.title}
            onClick={() => onClick(word)}
          />
        ))}
      </div>
    </>
  );
}
