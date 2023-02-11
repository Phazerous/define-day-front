import styles from './sidebar-actions.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface actionsProps {
  onCancel: () => void;
}

export default function SidebarEditActions({ onCancel }: actionsProps) {
  return (
    <>
      <div className={styles.actions}>
        <div className={styles.trashWrapper}>
          <FontAwesomeIcon
            className={styles.trash}
            icon={faTrash}
          />
        </div>
        <div className={styles.options}>
          <div
            className={styles.cancel}
            onClick={onCancel}>
            Cancel
          </div>
          <div className={styles.save}>Save</div>
        </div>
      </div>
    </>
  );
}
