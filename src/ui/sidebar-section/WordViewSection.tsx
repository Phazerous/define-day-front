import { convertDateToString } from '../../lib/formatter';
import styles from './word-section.module.scss';
import DefinitionSection from '../definition-section/defition-section';
import { useState } from 'react';
import SidebarViewActions from '../sidebar-actions/sidebar-view-actions';
import SidebarEditActions from '../sidebar-actions/sidebar-edit-actions';
import IWord from '../../interfaces/IWord';

interface sectionProps {
  word: IWord;
}

export default function WordViewSection({ word }: sectionProps) {
  const [isEditable, setEditable] = useState<boolean>(false);

  const dateOfStudy = convertDateToString(word.dateOfStudy);

  return (
    <div className={styles.wordSection}>
      <h2 className={styles.wordTitle}>{word.title}</h2>

      <DefinitionSection
        defs={word.defs}
        isEditable={isEditable}
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
