import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styles from './definition-editable.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';

interface defProps {
  text: string;
  order: number;
  onDefChange: (newText: string) => void;
}

export default function DefinitionEditable({
  text,
  order,
  onDefChange,
}: defProps) {
  const [isEditing, setEditing] = useState<boolean>(false);

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onDefChange(e.target.value);

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
              value={text}
              onChange={onTextChange}
              style={{ height: '60px' }}></textarea>
          ) : (
            <>
              {text}
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
