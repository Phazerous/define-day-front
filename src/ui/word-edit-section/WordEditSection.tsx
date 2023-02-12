import { useState } from 'react';
import IDef from '../../interfaces/IDef';
import IWord from '../../interfaces/IWord';
import DefinitionSectionEditable from '../definition-section-editable/DefinitionSectionEditable';
import SidebarEditActions from '../sidebar-actions/sidebar-edit-actions';
import styles from './word-edit-section.module.scss';

interface sectionProps {
  passedWord: IWord;
  onCancel: () => void;
}

import { nanoid } from 'nanoid';

export default function WordEditSection({
  passedWord,
  onCancel,
}: sectionProps) {
  const [title, setTitle] = useState<string>(passedWord.title);
  const [defs, setDefs] = useState<IDef[]>(passedWord.defs || []);

  const [bad, setBad] = useState<string>(JSON.stringify(JSON.stringify(defs))); // TO BE DELETED!!!!

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

  const onDefCreate = () => {
    setDefs([
      ...defs,
      {
        text: '',
        id: nanoid(),
        isNew: true,
      },
    ]);
    setBad(JSON.stringify(defs));
  };

  const onSave = () => {
    console.log('Saved');
  };

  return (
    <>
      <div className={styles.wordEditSection}>
        <div className={styles.wordTitle}>{title}</div>
        <DefinitionSectionEditable
          defs={defs}
          onDefChange={onDefChange}
          onDelete={onDefDelete}
          onCreate={onDefCreate}
        />

        <SidebarEditActions
          onCancel={() => onCancel()}
          onSave={onSave}
        />
      </div>
    </>
  );
}
