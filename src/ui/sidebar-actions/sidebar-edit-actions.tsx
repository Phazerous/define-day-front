import styles from './sidebar-actions.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface actionsProps {
  onCancel: () => void;
  onSave: () => void;
  onDelete: () => void;
}

export default function SidebarEditActions({
  onCancel,
  onSave,
  onDelete,
}: actionsProps) {
  return (
    <>
      <div className={styles.actions}>
        <div className={styles.trashWrapper}>
          <FontAwesomeIcon
            onClick={onDelete}
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
          <div
            className={styles.save}
            onClick={onSave}>
            Save
          </div>
        </div>
      </div>
    </>
  );
}
