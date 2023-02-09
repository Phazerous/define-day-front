import { useState } from 'react';
import IWord from '../interfaces/IWord';
import WordList from './WordList';
import WordSidebar from './WordSidebar';

import styles from '../styles/wordTable.module.scss';

interface props {
  words: IWord[];
}

export default function WordPanel({ words }: props) {
  const [selectedWord, setSelectedWord] = useState<IWord | undefined>(
    undefined
  );

  const onSelect = (word: IWord) => {
    setSelectedWord(word);
  };

  const onClose = () => {
    setSelectedWord(undefined);
  };

  return (
    <>
      <div className={styles.panel}>
        <WordList
          words={words}
          onSelect={onSelect}
        />
        {selectedWord ? (
          <WordSidebar
            onCancel={onClose}
            word={selectedWord}
          />
        ) : null}
      </div>
    </>
  );
}
