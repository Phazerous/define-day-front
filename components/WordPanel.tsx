import { useState } from 'react';
import IWord from '../interfaces/IWord';
import styles from '../styles/wordTable.module.scss';
import WordSidebar from './WordSidebar';
import WordTable from './WordTable';

export default function WordPanel() {
  const [word, setWord] = useState<IWord>();

  const onChoose = (word: IWord) => {
    setWord(word);
  };

  const onCancel = () => {
    setWord(undefined);
  };

  return (
    <>
      <div className={styles.menu}>
        <WordTable onClick={onChoose} />
        {word ? (
          <WordSidebar
            onCancel={onCancel}
            word={word}
          />
        ) : null}
      </div>
    </>
  );
}
