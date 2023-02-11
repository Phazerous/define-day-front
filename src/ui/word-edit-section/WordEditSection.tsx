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

export default function WordEditSection({
  passedWord,
  onCancel,
}: sectionProps) {
  const [title, setTitle] = useState<string>(passedWord.title);
  const [defs, setDefs] = useState<IDef[]>(passedWord.defs || []);

  const [bad, setBad] = useState<string>(JSON.stringify(JSON.stringify(defs))); // TO BE DELETED!!!!

  const onDefChange = (id: number, newText: string) => {
    const prevDef = defs.find((def) => def.id === id) as IDef;
    prevDef.text = newText;

    setDefs(defs);
    setBad(JSON.stringify(defs));
  };

  return (
    <>
      <div className={styles.wordEditSection}>
        <div className={styles.title}>{title}</div>
        <DefinitionSectionEditable
          defs={defs}
          onDefChange={onDefChange}
        />
        {/* TO DO: CHANGE ON CANCEL */}
        <SidebarEditActions onCancel={() => {}} /> {}
      </div>
    </>
  );
}
