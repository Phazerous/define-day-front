import Image from 'next/image';
import { useEffect, useState } from 'react';
import IDef from '../interfaces/IDef';
import IWord from '../interfaces/IWord';

import styles from '../styles/wordTable.module.scss';

interface props {
  onCancel: () => void;
  word: IWord;
}

export default function WordSidebar({ onCancel, word }: props) {
  const [defs, setDefs] = useState(word.defs);

  useEffect(() => {
    setDefs([]);
    setDefs(word.defs);
  });

  const onDefAdd = () => {
    let updatedDefs: IDef[] = [];

    if (defs) updatedDefs = [...defs];

    updatedDefs.push({ text: '' });

    setDefs(updatedDefs);
  };

  return (
    <>
      <div className={styles.sidebar}>
        <h3>{word.title}</h3>

        <ol>
          {defs?.map((def, idx) => (
            <li key={idx}>
              <span
                contentEditable={true}
                className={styles.defField}>
                {def.text}
              </span>
            </li>
          ))}
        </ol>

        <Image
          src='/add-btn.png'
          width={30}
          height={30}
          alt='add'
          onClick={onDefAdd}
        />

        <div className={styles.actions}>
          <button
            className={styles.cancel}
            onClick={onCancel}>
            Cancel
          </button>
          <button className={styles.save}>Save</button>
        </div>
      </div>
    </>
  );
}
