import { useEffect, useState } from 'react';
import IWord from '../interfaces/IWord';

import styles from '../styles/wordTable.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface props {
  onCancel: () => void;
  word: IWord;
}

export default function WordSidebar({ onCancel, word }: props) {
  const [defs, setDefs] = useState(word.defs);

  useEffect(() => {
    setDefs(word.defs);
  });

  return (
    <>
      <div className={styles.wrapper}>
        <FontAwesomeIcon
          className={styles.faClose}
          icon={faClose}
          size={'xl'}
          onClick={onCancel}
        />

        <div className={styles.sidebar}>
          <h3>{word.title}</h3>

          <ol>
            {defs.map((def, idx) => (
              <li key={idx}>{def.text}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
