import { useState } from 'react';
import INewWord from '../../interfaces/INewWord';
import IWord from '../../interfaces/IWord';
import { deleteWord } from '../../lib/wordApi';
import Sidebar from '../sidebar/Sidebar';
import WordAddSection from '../word-add-section/WordAddSection';
import WordEditSection from '../word-edit-section/WordEditSection';
import WordList from '../word-list/WordList';
import WordViewSection from '../word-view-section/WordViewSection';

import styles from './word-panel.module.scss';

interface props {
  words: IWord[];
  onUpdate: () => void;
}

export default function WordPanel({ words, onUpdate }: props) {
  const [selectedWord, setSelectedWord] = useState<IWord | undefined>(
    undefined
  );

  const [newWord, setNewWord] = useState<INewWord | undefined>(undefined);

  const [isEditing, setEditing] = useState<boolean>(false);

  const onSelect = (word: IWord) => {
    setSelectedWord(word);
  };

  const onWordDelete = async (id: number) => {
    try {
      await deleteWord(id);
    } catch (e) {
      console.log(e);
    }
  };

  const onClose = () => {
    setSelectedWord(undefined);
  };

  const renderSidebar = () => {
    if (selectedWord && isEditing) {
      return (
        <WordEditSection
          onUpdate={() => onUpdate()}
          word={selectedWord}
          onCancel={() => setEditing(false)}
        />
      );
    }

    if (selectedWord) {
      return (
        <WordViewSection
          word={selectedWord}
          setEditable={() => setEditing(true)}
        />
      );
    }

    if (newWord) {
      return (
        <WordEditSection
          onUpdate={() => onUpdate()}
          word={newWord}
          onCancel={() => setNewWord(undefined)}
        />
      );
    }

    return (
      <WordAddSection
        onAdd={() =>
          setNewWord({
            title: '',
            definitions: [],
          })
        }
      />
    );
  };

  return (
    <>
      <div className={styles.panel}>
        <WordList
          words={words}
          onSelect={onSelect}
        />

        <Sidebar>{renderSidebar()}</Sidebar>
      </div>
    </>
  );
}
