import { useState } from 'react';
import IDef from '../../interfaces/IDef';
import IWord from '../../interfaces/IWord';
import DefinitionSectionEditable from '../definition-section-editable/DefinitionSectionEditable';
import SidebarEditActions from '../sidebar-actions/sidebar-edit-actions';
import styles from './word-edit-section.module.scss';

interface sectionProps {
  word: IWord | INewWord;
  onCancel: () => void;
}

import { nanoid } from 'nanoid';
import INewDef from '../../interfaces/INewDef';
import INewWord from '../../interfaces/INewWord';
import { formatNewWord, formatUpdatedWord } from '../../lib/formatter';

export default function WordEditSection({ word, onCancel }: sectionProps) {
  const [title, setTitle] = useState<string>(word.title);
  const [defs, setDefs] = useState<IDef[]>(
    JSON.parse(JSON.stringify(word.defs)) || []
  ); // DEEP COPY
  const [newDefs, setNewDefs] = useState<INewDef[]>([]);

  const [bad, setBad] = useState<string>(JSON.stringify(defs)); // TO BE DELETED!!!!
  const [bad2, setBad2] = useState<string>(JSON.stringify(newDefs)); // TO BE DELETED!!!!

  const onDefChange = (id: number | string, newText: string) => {
    const prevDef = defs.find((def) => def.id === id) as IDef;
    prevDef.text = newText;

    setDefs(defs);
    setBad(JSON.stringify(defs));
  };

  const onDefDelete = (id: number | string) => {
    const prevDef = defs.find((def) => def.id === id) as IDef;

    const indexOfPrevDef = defs.indexOf(prevDef);
    defs.splice(indexOfPrevDef, 1);

    setDefs(defs);
    setBad(JSON.stringify(defs));
  };

  const onNewDefCreate = () => {
    const updatedDefs = [
      ...newDefs,
      {
        text: '',
        id: nanoid(),
      },
    ];

    setNewDefs(updatedDefs);
    setBad(JSON.stringify(defs));
  };

  const onNewDefChange = (id: string, newText: string) => {
    const prevDef = newDefs.find((def) => def.id === id) as INewDef;
    prevDef.text = newText;

    setNewDefs(newDefs);
    setBad(JSON.stringify(newDefs));
  };

  const onNewDefDelete = (id: string) => {
    const prevDef = newDefs.find((def) => def.id === id) as INewDef;

    const indexOfPrevDef = newDefs.indexOf(prevDef);
    newDefs.splice(indexOfPrevDef, 1);

    setNewDefs(newDefs);
    setBad2(JSON.stringify(newDefs));
  };

  const onSave = () => {
    let formattedWord: any;

    if ('id' in word) updateWord(word.id);
    else createWord();
  };

  const updateWord = (id: number) => {
    const formattedWord = formatUpdatedWord(id, title, defs, newDefs);
  };

  const createWord = () => {
    const formattedWord = formatNewWord(title, newDefs);
  };

  return (
    <>
      <div className={styles.wordEditSection}>
        <div className={styles.wordTitle}>{title}</div>
        <DefinitionSectionEditable
          defs={defs}
          onDefChange={onDefChange}
          onDelete={onDefDelete}
          newDefs={newDefs}
          onNewDefCreate={onNewDefCreate}
          onNewDefChange={onNewDefChange}
          onNewDefDelete={onNewDefDelete}
        />

        <SidebarEditActions
          onCancel={() => onCancel()}
          onSave={onSave}
        />
      </div>
    </>
  );
}
