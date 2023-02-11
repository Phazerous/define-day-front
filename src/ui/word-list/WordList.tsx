import IWord from '../../interfaces/IWord';

import styles from './wordTable.module.scss';

interface props {
  words: IWord[];
  onSelect: (word: IWord) => void;
}

export default function WordList({ words, onSelect }: props) {
  return (
    <>
      <ul className={styles.wordList}>
        {words.map((word) => (
          <li
            className={styles.word}
            key={word.id}
            onClick={() => onSelect(word)}>
            {word.title}
          </li>
        ))}
      </ul>
    </>
  );
}
