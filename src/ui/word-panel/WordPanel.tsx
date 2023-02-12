import { useState } from 'react';
import IWord from '../../interfaces/IWord';
import Sidebar from '../sidebar/Sidebar';
import WordEditSection from '../word-edit-section/WordEditSection';
import WordList from '../word-list/WordList';
import WordViewSection from '../word-view-section/WordVIewSection';

import styles from './word-panel.module.scss';

interface props {
  words: IWord[];
}

export default function WordPanel({ words }: props) {
  const [selectedWord, setSelectedWord] = useState<IWord | undefined>(
    undefined
  );

  const [isEditing, setEditing] = useState<boolean>(false);

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
          {selectedWord ? (
            isEditing ? (
              <WordEditSection
                passedWord={selectedWord}
                onCancel={() => setEditing(false)}
              />
            ) : (
              <WordViewSection
                word={selectedWord}
                setEditable={() => setEditing(true)}
              />
            )
          ) : null}
        </Sidebar>
      </div>
    </>
  );
}
