import { ChangeEvent, useState } from 'react';
import IDef from '../../interfaces/IDef';
import IWord from '../../interfaces/IWord';
import DefinitionSectionEditable from '../definition-section-editable/DefinitionSectionEditable';
import SidebarEditActions from '../sidebar-actions/sidebar-edit-actions';
import styles from './word-edit-section.module.scss';

interface sectionProps {
  word: IWord | INewWord;
  onCancel: () => void;
  onUpdate: () => void;
}

import { nanoid } from 'nanoid';
import INewDef from '../../interfaces/INewDef';
import INewWord from '../../interfaces/INewWord';
import { formatNewWord, formatUpdatedWord } from '../../lib/formatter';
import { createNewWord, deleteWord, updateWord } from '../../lib/wordApi';

export default function WordEditSection({
  word,
  onCancel,
  onUpdate,
}: sectionProps) {
  const [title, setTitle] = useState<string>(word.title);
  const [defs, setDefs] = useState<IDef[]>(
    JSON.parse(JSON.stringify(word.definitions)) || []
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

    if ('id' in word) onUpdateWord(word.id);
    else createWord();

    onUpdate();
  };

  const onUpdateWord = async (id: number) => {
    const formattedWord = formatUpdatedWord(id, title, defs, newDefs);

    try {
      await updateWord(formattedWord);
    } catch (e) {
      console.log(e);
    }
  };

  const onWordDelete = async (id: number) => {
    if (id === 0) return;

    try {
      await deleteWord(id);
    } catch (e) {
      console.log(e);
    }
  };

  const createWord = async () => {
    const formattedWord = formatNewWord(title, newDefs);

    try {
      await createNewWord(formattedWord);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={styles.wordEditSection}>
        {/* <div className={styles.wordTitle} contentEditable={true}{title}</div> */}
        <input
          type='text'
          className={styles.wordTitle}
          value={title}
          placeholder='Word'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
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
          onDelete={() => onWordDelete('id' in word ? word.id : 0)}
          onCancel={() => onCancel()}
          onSave={onSave}
        />
      </div>
    </>
  );
}
