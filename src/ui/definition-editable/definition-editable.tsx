// TO UNIFY

interface defProps {
  text: string;
  order: number;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './definition-editable.module.scss';
import { ChangeEvent, useState } from 'react';

export default function DefinitionEditable({ text, order }: defProps) {
  const [isEditing, setEditing] = useState<boolean>(false);
  const [def, setDef] = useState<string>(text);

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDef(e.target.value);

    e.target.style.height = 'auto';

    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;
  };

  return (
    <>
      <div className={styles.defContainer}>
        <div>{order}</div>
        <div
          onDoubleClick={() => setEditing(true)}
          style={{ flexGrow: 1 }}>
          {isEditing ? (
            <textarea
              className={styles.textarea}
              value={def}
              onChange={onTextChange}
              style={{ height: '60px' }}>
              {def}
            </textarea>
          ) : (
            <>
              {def}
              <FontAwesomeIcon
                icon={faTimes}
                className={styles.delete}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
