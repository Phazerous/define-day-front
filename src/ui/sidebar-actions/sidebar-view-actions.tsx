import styles from './sidebar-actions.module.scss';

interface viewProps {
  dateOfStudy: string;
  setEditable: () => void;
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function SidebarViewActions({
  dateOfStudy,
  setEditable,
}: viewProps) {
  return (
    <>
      <div className={styles.actions}>
        <div className={styles.info}>
          <div className={styles.dateOfStudy}>
            <p style={{ textDecoration: 'underline' }}>Date of study</p>
            <p>{dateOfStudy}</p>
          </div>
        </div>

        <div>
          <div>
            <FontAwesomeIcon
              className={styles.edit}
              icon={faPenToSquare}
              onClick={setEditable}
            />
          </div>
        </div>
      </div>
    </>
  );
}
