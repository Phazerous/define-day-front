import { convertDatestringToString } from '../../lib/formatter';
import DefinitionSection from '../definition-section/defition-section';
import SidebarViewActions from '../sidebar-actions/sidebar-view-actions';
import IWord from '../../interfaces/IWord';

import styles from './word-view-section.module.scss';

interface sectionProps {
  word: IWord;
  setEditable: () => void;
}

export default function WordViewSection({ word, setEditable }: sectionProps) {
  const dateOfStudy = convertDatestringToString(word.created_at);

  return (
    <div className={styles.wordViewSection}>
      <h2 className={styles.wordTitle}>{word.title}</h2>

      <DefinitionSection defs={word.definitions} />

      <SidebarViewActions
        dateOfStudy={dateOfStudy}
        setEditable={() => setEditable()}
      />
    </div>
  );
}
