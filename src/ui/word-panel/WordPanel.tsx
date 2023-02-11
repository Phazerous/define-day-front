import { useState } from 'react';
import IWord from '../../interfaces/IWord';
import WordViewSection from '../sidebar-section/WordViewSection';
import Sidebar from '../sidebar/Sidebar';
import WordList from '../word-list/WordList';

import styles from './wordTable.module.scss';

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

        <Sidebar>
          {selectedWord ? <WordViewSection word={selectedWord} /> : null}
        </Sidebar>
      </div>
    </>
  );
}
