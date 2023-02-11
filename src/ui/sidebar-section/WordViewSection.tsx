import { convertDateToString } from '../../lib/formatter';
import styles from './word-section.module.scss';
import DefinitionSection from '../definition-section/defition-section';
import { useState } from 'react';
import SidebarViewActions from '../sidebar-actions/sidebar-view-actions';
import SidebarEditActions from '../sidebar-actions/sidebar-edit-actions';
import IWord from '../../interfaces/IWord';
import IDef from '../../interfaces/IDef';

interface sectionProps {
  word: IWord;
}

export default function WordViewSection({ word }: sectionProps) {
  const [isEditable, setEditable] = useState<boolean>(false);
  const [defs, setDefs] = useState<IDef[]>(word.defs || []);
  const [BAD, setBAD] = useState(JSON.stringify(word)); // WORST PRACTICE TO DELETE WHEN LEARNED

  const onDefChange = (defId: number, newText: string) => {
    const prevDefs = defs;

    const prevDef = prevDefs.find((def) => def.id === defId) as IDef;

    prevDef.text = newText;

    setDefs(defs);
    setBAD(JSON.stringify(defs));
  };

  const dateOfStudy = convertDateToString(word.dateOfStudy);

  return (
    <div className={styles.wordSection}>
      <h2 className={styles.wordTitle}>{word.title}</h2>

      <DefinitionSection
        defs={defs}
        isEditable={isEditable}
        onDefChange={onDefChange}
      />

      {isEditable ? (
        <SidebarEditActions onCancel={() => setEditable(!isEditable)} />
      ) : (
        <SidebarViewActions
          dateOfStudy={dateOfStudy}
          onEdit={() => setEditable(!isEditable)}
        />
      )}
    </div>
  );
}
